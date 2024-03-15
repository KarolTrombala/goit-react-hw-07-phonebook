import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = (state) => {
    state.isLoading = true
};

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder

            .addCase(fetchContacts.pending, handlePending)
            .addCase(addContact.pending, handlePending)
            .addCase(deleteContact.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false
                state.contacts = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.contacts.push(action.payload)
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                const index = state.contacts.findIndex(
                    (contact) => contact.id === action.payload
                )
                state.contacts.splice(index, 1)
            })
    },
});

export const contactsReducer = contactsSlice.reducer;
