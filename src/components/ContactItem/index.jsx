import PropTypes from 'prop-types';
import { MdDelete, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteContactAction } from 'store/contacts/sliceContacts';
import {
  ContactChange,
  ContactData,
  ContactDelete,
  ContactFavorite,
  ContactItemEl,
  ContactName,
  ContactNumber,
} from './ContactItem.styled';
import { useState } from 'react';
import { ChangeName, ChangeNumber } from 'components/ChangeContactForm';

export const ContactItem = ({ contact }) => {
  const [changeName, setChangeName] = useState(false);
  const [changeNumber, setChangeNumber] = useState(false);
  const { id, name, number, isFavorite } = contact;

  const dispatch = useDispatch();
  // const contacts = useSelector(store => store.contacts.contacts);

  const deleteContact = () => {
    dispatch(deleteContactAction(id));
  };
  const addToFavorite = () => {
    dispatch(addFavorite(id));
  };

  const onChangeContact = input => {
    input === 'name'
      ? setChangeName(prev => !prev)
      : setChangeNumber(prev => !prev);
  };

  return (
    <ContactItemEl>
      <ContactFavorite type="button" onClick={() => addToFavorite()}>
        {isFavorite ? (
          <MdFavorite style={{ fill: '#f90' }} />
        ) : (
          <MdFavoriteBorder />
        )}
      </ContactFavorite>
      <ContactData>
        {!changeName ? (
          <ContactName>
            <ContactChange
              type="button"
              onClick={() => onChangeContact('name')}
            >
              <BsPencil />
            </ContactChange>
            {name}:{' '}
          </ContactName>
        ) : (
          <ChangeName
            contact={{ id, name }}
            onChangeContact={onChangeContact}
          />
        )}
        {!changeNumber ? (
          <ContactNumber>
            {number}
            <ContactChange
              type="button"
              onClick={() => onChangeContact('number')}
            >
              <BsPencil />
            </ContactChange>
          </ContactNumber>
        ) : (
          <ChangeNumber
            contact={{ id, number }}
            onChangeContact={onChangeContact}
          />
        )}
      </ContactData>
      <ContactDelete type="button" onClick={() => deleteContact()}>
        <MdDelete />
      </ContactDelete>
    </ContactItemEl>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  onDeleteContact: PropTypes.func,
};
