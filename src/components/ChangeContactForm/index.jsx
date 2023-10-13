import { AiOutlineSave } from 'react-icons/ai';
import { ContactChange } from 'components/ContactItem/ContactItem.styled';
import { ChangeInput, InputBox } from './ChangeContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeContactAction } from 'store/contacts/sliceContacts';
import { Report } from 'notiflix';

export const ChangeName = ({ contact, onChangeContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);

  const { id, name } = contact;

  const handleChangeContact = e => {
    e.preventDefault();
    const inputValue = { name: e.target.elements.name.value };
    if (name !== inputValue.name) {
      const identicalContactName = contacts?.some(
        ({ name }) => inputValue.name === name
      );
      if (identicalContactName) {
        return Report.warning(
          'WARNING',
          `${inputValue.name} is already in contacts`,
          'ok'
        );
      }
      dispatch(changeContactAction({ id, inputValue }));
    }
    onChangeContact('name');
  };
  return (
    <InputBox>
      <form
        onSubmit={e => handleChangeContact(e)}
        onBlur={() => onChangeContact('name')}
      >
        <ContactChange type="submit">
          <AiOutlineSave />
        </ContactChange>
        <ChangeInput
          type="text"
          name="name"
          id="name"
          defaultValue={name}
          autoFocus
          placeholder="name*"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </form>
    </InputBox>
  );
};

export const ChangeNumber = ({ contact, onChangeContact }) => {
  const dispatch = useDispatch();

  const { id, number } = contact;

  const handleChangeContact = e => {
    e.preventDefault();
    const inputValue = { number: e.target.elements.number.value };
    if (number !== inputValue.number) {
      dispatch(changeContactAction({ id, inputValue }));
    }
    onChangeContact('number');
  };
  return (
    <InputBox>
      <form
        onSubmit={handleChangeContact}
        onBlur={() => onChangeContact('number')}
      >
        <ChangeInput
          type="tel"
          name="number"
          id="number"
          defaultValue={number}
          placeholder="number*"
          autoFocus
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ContactChange type="submit">
          <AiOutlineSave />
        </ContactChange>
      </form>
    </InputBox>
  );
};
