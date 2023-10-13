import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContactAction: {
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
            isFavorite: false,
          },
        };
      },
      reducer: (state, { payload }) => {
        state.contacts
          ? state.contacts.push(payload)
          : (state.contacts = [payload]);
      },
    },
    deleteContactAction(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    addFavorite: (state, { payload }) => {
      state.contacts = state.contacts.map(contact => {
        if (contact.id === payload) {
          return {
            ...contact,
            isFavorite: !contact.isFavorite,
          };
        } else {
          return contact;
        }
      });
    },
    changeContactAction: (state, { payload }) => {
      state.contacts = state.contacts.map(contact => {
        if (contact.id === payload.id) {
          return {
            ...contact,
            ...payload.inputValue,
          };
        } else {
          return contact;
        }
      });
    },
  },
});

export const {
  addContactAction,
  deleteContactAction,
  addFavorite,
  changeContactAction,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
