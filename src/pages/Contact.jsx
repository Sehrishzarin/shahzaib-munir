import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Talk</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>
          <div className="contact-details">
            <p><i className="fas fa-envelope"></i> shahzaib@example.com</p>
            <p><i className="fas fa-phone"></i> +123 456 7890</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;