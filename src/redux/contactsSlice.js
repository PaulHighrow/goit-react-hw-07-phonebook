import { createSlice, nanoid } from '@reduxjs/toolkit';
import { INITIAL_CONTACTS } from './constants';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_CONTACTS,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return { payload: { ...contact, id: nanoid() } };
      },
    },

    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),

    editContact: (state, action) => {
      const i = state.findIndex(contact => contact.id === action.payload);
      state.splice(i, 1, {
        ...state[i],
        name: prompt(state[i].name, state[i].name),
        number: prompt(state[i].number, state[i].number),
      });
    },
  },
});

export const { addContact, deleteContact, editContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
