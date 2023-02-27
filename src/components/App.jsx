import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <div action="" className={css.phonebook}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm />
        <h1 className={css.contactTitle}>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
