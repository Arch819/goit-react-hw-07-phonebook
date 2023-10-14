import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContactThunk,
  getContactThunk,
  deleteContactThunk,
  changeContactThunk,
} from './contactsThunk';
import {
  handleAddContactFulfilled,
  handleChangeContactFulfilled,
  handleDeleteContactFulfilled,
  handleGetContactFulfilled,
  handlePending,
  handleRejected,
} from './helpers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactThunk.fulfilled, handleGetContactFulfilled)
      .addCase(addContactThunk.fulfilled, handleAddContactFulfilled)
      .addCase(deleteContactThunk.fulfilled, handleDeleteContactFulfilled)
      .addCase(changeContactThunk.fulfilled, handleChangeContactFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
