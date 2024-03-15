import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;

        const contact = {
            name,
            number,
        };

        dispatch(addContact(contact));

        form.reset();
    };

    return (
        <div>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                    />
                </label>

                <label className={css.label}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        className={css.input}
                    />
                </label>

                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </form>
        </div>
    )
};