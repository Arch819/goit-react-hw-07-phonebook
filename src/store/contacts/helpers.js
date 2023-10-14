export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleGetContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = payload;
};
export const handleAddContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.push(payload);
};
export const handleDeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
};

export const handleChangeContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = state.contacts.map(contact => {
    if (contact.id === payload.id) {
      return (contact = payload);
    } else {
      return contact;
    }
  });
};
