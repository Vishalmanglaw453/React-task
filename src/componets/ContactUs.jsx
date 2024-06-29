import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

 
import React from 'react'

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_up4oscv', 'template_oi9tsla', form.current, {
          publicKey: '_1XTPe6CahrlkVPya',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <div className=' mt-4 d-flex  gap-3'>
            <label>Name</label>
            <input type="text" name="user_name" />
        </div>
        
        <div className=' mt-4 d-flex  gap-3'>
            <label>Email</label>
            <input type="email" name="user_email" />
        </div>
        <div className=' mt-4 d-flex  gap-3'>
            <label>Message</label>
            <textarea name="message" />
        </div>
        <input type="submit" value="Send" />
      </form>
    );
}

export default ContactUs