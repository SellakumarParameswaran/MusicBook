import React from 'react';
import { BsFillEnvelopeFill, BsPhone } from 'react-icons/bs'; // Using Bootstrap icons
import { FaMapMarkerAlt } from 'react-icons/fa'; // Using Font Awesome icons
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  return (
  <>
    <h2>Contact Us</h2>
    <div className="ner" name='contact'>
            <div><BsFillEnvelopeFill /> example@example.com</div>
            <div><BsPhone /> +123456789</div>
            <div><FaMapMarkerAlt /> 123 Street, City</div>
          </div>
        
        </>
      
    
  );
};

export default Contact;
