import React, { useState } from 'react';
import { validateEmail, capitalizeFirstLetter } from '../../utils/helpers';

const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    /*** 
    * {event.target.name} synchronusly reaching out formState variable (name, email, message);
    */

    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value)
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${capitalizeFirstLetter(event.target.name)} is required.`);
            } else {
                setErrorMessage('');
            }

            if (!errorMessage) {
                setFormState({ ...formState, [event.target.name]: event.target.value });
            }
        };
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" >Submit</button>
            </form>
        </section>
    );


}
export default ContactForm;