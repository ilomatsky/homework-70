import {configureStore} from '@reduxjs/toolkit';
import {contactsReducer} from '../store/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;