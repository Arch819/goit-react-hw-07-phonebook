import { contactsReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/sliceFilter';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
