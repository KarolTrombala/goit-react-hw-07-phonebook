import React from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'

export const App = () => {
  return (
    <div
      style={{
        marginTop: 100,
        marginLeft: 100,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>

      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
