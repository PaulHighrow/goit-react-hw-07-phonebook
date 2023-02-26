import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;

export const getFilterValue = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
