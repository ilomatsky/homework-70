import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import {ContactsList} from '../../types';

export const fetchContacts = createAsyncThunk(
  'dishes/fetchContacts',
  async () => {
    const response = await axiosApi.get<ContactsList | null>('/contacts.json');
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const response = await axiosApi.post('/contacts', contact);
    return response.data;
  });

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, contact) => {
    const response = await axiosApi.put(`/contacts/${contactId}`, contact);
    return response.data;
  });

export const deleteContact = createAsyncThunk<void, string>(
  'dishes/delete',
  async (contactId) => {
    await axiosApi.delete(`/contacts/${contactId}.json`);
  }
);