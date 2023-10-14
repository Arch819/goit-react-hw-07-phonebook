import { FormAddContact } from './FormAddContact';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Section } from './Section.styled';

export const App = () => {
  return (
    <Section>
      <h2>Phonebook</h2>
      <FormAddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Section>
  );
};
