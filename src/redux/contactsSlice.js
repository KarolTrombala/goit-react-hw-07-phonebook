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

    // extraReducers: {
    //     [fetchContacts.pending]: handlePending,
    //     [fetchContacts.fulfilled](state, action) {
    //         state.isLoading = false
    //         state.contacts = action.payload
    //     },
    //     [fetchContacts.rejected]: handleRejected,
    //     [addContact.pending]: handlePending,
    //     [addContact.fulfilled](state, action) {
    //         state.isLoading = false
    //         state.contacts.push(action.payload)
    //     },
    //     [addContact.rejected]: handleRejected,
    //     [deleteContact.pending]: handlePending,
    //     [deleteContact.fulfilled](state, action) {
    //         state.isLoading = false
    //         state.error = null
    //         const index = state.contacts.findIndex(
    //             (contact) => contact.id === action.payload
    //         )
    //         state.contacts.splice(index, 1)
    //     },
    //     [deleteContact.rejected]: handleRejected,
    // },

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
            // [fetchContacts.rejected]: handleRejected,
            // [addContact.pending]: handlePending,
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.contacts.push(action.payload)
            })
            // [addContact.rejected]: handleRejected,
            // [deleteContact.pending]: handlePending,
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                const index = state.contacts.findIndex(
                    (contact) => contact.id === action.payload
                );
                state.contacts.splice(index, 1)
            });
        // [deleteContact.rejected]: handleRejected,
    },
});

export const contactsReducer = contactsSlice.reducer;
