import {Container, Row, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary">
            Enviar
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Contact;
