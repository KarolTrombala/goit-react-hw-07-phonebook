import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors'
import { deleteContact } from 'redux/operations'

export const ContactList = () => {
  const dispatch = useDispatch()

  const filteredContacts = useSelector(selectVisibleContacts)

  const delContact = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <ul>
      {filteredContacts.map((n) => (
        <li key={n.id} className={css.listEl}>
          {n.name}: {n.number}
          <button
            className={css.delButton}
            type="submit"
            onClick={() => delContact(n.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
};
