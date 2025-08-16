import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
      form.current.reset();
      setTimeout(() => setIsSent(false), 3000);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
        {isSent && <p className="success-message">Message sent successfully!</p>}
      </form>
    </div>
  );
};

export default ContactForm;