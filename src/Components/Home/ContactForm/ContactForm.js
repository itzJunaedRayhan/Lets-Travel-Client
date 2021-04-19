import React from 'react';
import './ContactForm.css'
const ContactForm = () => {
    return (
            <form class="my-form">
                    <ul>
                        <li>
                            <div class="grid grid-2">
                                <input type="text" placeholder="Name" required />
                                <input type="text" placeholder="Surname" required />
                            </div>
                        </li>
                        <li>
                            <div class="grid grid-2">
                                <input type="email" placeholder="Email" required />
                                <input type="tel" placeholder="Phone" />
                            </div>
                        </li>
                        <li>
                            <textarea placeholder="Message"></textarea>
                        </li>
                        <li>
                            <input type="checkbox" id="terms" />
                            <label for="terms">I have read and agreed with <a href="">the terms and conditions.</a></label>
                        </li>
                    </ul>
                    <button type="submit" className="contactFormBtn">Submit</button>
            </form>
    );
};

export default ContactForm;