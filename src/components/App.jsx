import { FormAddContact } from './FormAddContact';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Section } from './Section.styled';
import { EmptyEl } from './ContactList/ContactList.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(store => store.contacts.contacts);

  return (
    <Section>
      <h2>Phonebook</h2>
      <FormAddContact />
      <h2>Contacts</h2>
      <Filter />
      {contacts ? <ContactList /> : <EmptyEl>Not found</EmptyEl>}
    </Section>
  );
};
