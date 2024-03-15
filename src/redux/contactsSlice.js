import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = (state) => {
    state.isLoading = true
};

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

const isPendingAction = (action) => {
    return action.type.endsWith('/pending')
}

const isRejectAction = (action) => {
    return action.type.endsWith('/rejected')
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder

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
            .addMatcher(isPendingAction, handlePending)
            .addMatcher(isRejectAction, handleRejected)
    },
});

export const contactsReducer = contactsSlice.reducer;
