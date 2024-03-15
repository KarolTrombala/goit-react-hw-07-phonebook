import { createSlice, nanoid } from '@reduxjs/toolkit';

const INITIAL_STATE = JSON.parse(localStorage.getItem('Contacts')) || [];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload)
                localStorage.setItem('Contacts', JSON.stringify(state))
            },
            prepare(name, number) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                }
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(
                (contact) => contact.id === action.payload
            )
            state.splice(index, 1)
            localStorage.setItem('Contacts', JSON.stringify(state))
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
