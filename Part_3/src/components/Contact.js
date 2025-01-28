import React from "react";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <form className="contact-form flex">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
