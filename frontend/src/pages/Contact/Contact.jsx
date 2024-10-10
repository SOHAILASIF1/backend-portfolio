// Contact.js
import React, { useState } from 'react';
import './Contact.css';
import Headings from '../../component/Headings/Headings';
import FindMe from '../../component/FindMe/FindMe';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(`${window.location.origin}/api/contact/send`, formData);

      if (response.data.success) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setResponseMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('Failed to send message. Please try again later.');
    }

    setIsLoading(false); // End loading
  };

  return (
    <div className='contact'>
      <div className="input">
        <div className='input-heading'>
          <Headings tittle="Contact" span="Me" />
        </div>
        <form className="input-box" onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='NAME'
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder='EMAIL'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder='MESSAGE'
            name="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className='btn' type='submit' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
      <FindMe />
    </div>
  );
}

export default Contact;
