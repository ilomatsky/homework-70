import {Contact} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchContacts, deleteContact} from './contactsThunks';
import {RootState} from '../../app/store';

interface ContactsState {
  items: Contact[];
  fetchLoading: boolean;
  deleteLoading: false | string;
}

const initialState: ContactsState = {
  items: [],
  fetchLoading: false,
  deleteLoading: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, {payload: items}) => {
      state.fetchLoading = false;
      state.items = items;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(deleteContact.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteContact.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteContact.rejected, (state) => {
      state.deleteLoading = false;
      state.fetchLoading = false;
    });
  }
});

export const contactsReducer = contactsSlice.reducer;

export const selectContact = (state: RootState) => state.contact.items;
export const selectFetchContactLoading = (state: RootState) => state.contact.fetchLoading;
export const selectDeleteContactLoading = (state: RootState) => state.contact.deleteLoading;