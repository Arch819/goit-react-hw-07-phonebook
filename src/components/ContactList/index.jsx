import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem';
import { ContactListStyled } from './ContactList.styled';
import { useSelector } from 'react-redux';

function sortContactsList(contacts) {
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  const favorites = contacts.filter(contact => contact.isFavorite === true);
  const nonFavorites = contacts.filter(contact => contact.isFavorite !== true);

  const sortedContacts = favorites.concat(nonFavorites);

  return sortedContacts;
}

export const ContactList = () => {
  const contacts = useSelector(store => store.contacts.contacts);
  const filter = useSelector(store => store.filter.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  const contactList = sortContactsList(visibleContacts);

  return (
    <ContactListStyled>
      {contactList.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
