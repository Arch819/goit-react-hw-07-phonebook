import { contactsReducer } from './contacts/sliceContacts';
import { filterReducer } from './filter/sliceFilter';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: ['contacts'],
};
const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};
