import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';

export function ContactList() {
  const contacts = useSelector(state => {
    return state.contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    );
  });
  const dispatch = useDispatch();
  const handleClick = event => {
    dispatch(deleteContact(event.target.id));
  };
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.listItem} key={id}>
            <span className={css.name}>{name}:</span>
            <span className={css.number}>{number}</span>
            <button id={id} className={css.deleteBtn} onClick={handleClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
