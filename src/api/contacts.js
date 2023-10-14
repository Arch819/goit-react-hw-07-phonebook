import axios from 'axios';

axios.defaults.baseURL = 'https://6527e6dc931d71583df191c3.mockapi.io/';

export const fetchGetContacts = async () => {
  const { data } = await axios('contacts');
  return data;
};
export const fetchAddContact = async contact => {
  const { data } = await axios.post('contacts', contact);
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};

export const fetchChangContact = async ({ id, inputValue }) => {
  const { data } = await axios.put(`contacts/${id}`, inputValue);
  return data;
};
