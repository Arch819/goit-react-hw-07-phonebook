import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchChangContact,
  fetchDeleteContact,
  fetchGetContacts,
} from 'api/contacts';

export const getContactThunk = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchGetContacts();
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await fetchAddContact(contact);
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contact/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await fetchDeleteContact(id);
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
export const changeContactThunk = createAsyncThunk(
  'contact/changeContact',
  async (data, { rejectWithValue }) => {
    try {
      return await fetchChangContact(data);
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
