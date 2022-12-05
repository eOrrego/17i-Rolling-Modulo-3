import {Container, Row, Col, Button} from 'react-bootstrap'

const AboutUs = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col lg={4}>
          <img src="https://rollingcodeschool.com/wp-content/uploads/2021/07/Logo_Rojo0000.png" alt="" />
        </Col>
        <Col lg={8} className="mt-5">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim non quod numquam nostrum, asperiores ad iste! Aspernatur quisquam explicabo aliquam!</p>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs