import React from 'react';
import { Element } from 'react-scroll';
import {  Row, Col, Form, Button } from 'react-bootstrap';
import './../src/Feadback.css';

const Feadback = () => {
  return (
    <><h2>Feedback</h2>
   <Element className='feed' name='Feed'>
     
        
          <div className='fix'>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
          </Form>
          </div>
        <Button className='button' variant="primary" type="submit">
              Submit
            </Button>
      

    </Element ></>

  );
};

export default Feadback;
