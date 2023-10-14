import { MdDelete, MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { BsPencil } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
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
import {
  changeContactThunk,
  deleteContactThunk,
} from 'store/contacts/contactsThunk';
import { selectError, selectIsLoading } from 'store/contacts/selector';
import { Loader } from 'components/Loader';
import { ErrorMessage } from 'components/ErrorMessage';

export const ContactItem = ({ contact }) => {
  const loader = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [changeName, setChangeName] = useState(false);
  const [changeNumber, setChangeNumber] = useState(false);
  const { id, name, phone, favorite } = contact;
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContactThunk(id));
  };
  const addToFavorite = () => {
    const inputValue = { favorite: !favorite };
    dispatch(changeContactThunk({ id, inputValue }));
  };

  const onChangeContact = input => {
    input === 'name'
      ? setChangeName(prev => !prev)
      : setChangeNumber(prev => !prev);
  };
  if (loader) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (contact) {
    return (
      <ContactItemEl>
        <ContactFavorite type="button" onClick={() => addToFavorite()}>
          {favorite ? (
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
              {phone}
              <ContactChange
                type="button"
                onClick={() => onChangeContact('phone')}
              >
                <BsPencil />
              </ContactChange>
            </ContactNumber>
          ) : (
            <ChangeNumber
              contact={{ id, phone }}
              onChangeContact={onChangeContact}
            />
          )}
        </ContactData>
        <ContactDelete type="button" onClick={() => deleteContact()}>
          <MdDelete />
        </ContactDelete>
      </ContactItemEl>
    );
  }
};

//
