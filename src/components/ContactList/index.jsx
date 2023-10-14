import { ContactItem } from 'components/ContactItem';
import { ContactListStyled, EmptyEl } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactThunk } from 'store/contacts/contactsThunk';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'store/contacts/selector';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';

function sortContactsList(contacts) {
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  const favorites = contacts.filter(contact => contact.favorite === true);
  const nonFavorites = contacts.filter(contact => contact.favorite !== true);
  const sortedContacts = favorites.concat(nonFavorites);

  return sortedContacts;
}

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactThunk());
  }, [dispatch]);

  if (loader) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }
  if (contacts) {
    const contactList = sortContactsList(filteredContacts);
    return (
      <>
        {contactList.length ? (
          <ContactListStyled>
            {contactList.map(contact => {
              return <ContactItem key={contact.id} contact={contact} />;
            })}
          </ContactListStyled>
        ) : (
          <EmptyEl>Not found</EmptyEl>
        )}
      </>
    );
  }
};
