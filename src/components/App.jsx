import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'
import { fetchContacts } from 'redux/operations'
import { selectError, selectIsLoading } from 'redux/selectors'

export const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  
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
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
};
