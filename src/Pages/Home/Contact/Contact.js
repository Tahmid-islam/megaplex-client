import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <Container className="pt-3">
      <Fade bottom>
        <p className="fs-1 fw-bold">Contact Us</p>
        <Form
          className="border border-dark p-4 rounded-3"
          action="https://formsubmit.co/tahmid231@gmail.com"
          method="POST"
        >
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Enter Your Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-white">
              Enter Your Email address
            </Form.Label>
            <Form.Control
              type="email"
              required
              name="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-white">Enter Your Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              required
              rows={3}
              placeholder="Message....."
            />
          </Form.Group>
          <div className="text-center mt-3">
            <Button variant="dark" type="submit">
              <i className="fas fa-paper-plane text-white"></i> Send Message
            </Button>
          </div>
        </Form>
      </Fade>
    </Container>
  );
};

export default Contact;
