import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Testimonials() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <div className="d-flex mb-3">
            <Image src="https://via.placeholder.com/64" roundedCircle className="me-3" />
            <div>
              <h6 className="mb-0">John Doe</h6>
              <small>Software Developer</small>
            </div>
          </div>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sodales est. Phasellus id aliquet felis. Nulla facilisi. Nam ultrices dapibus libero, eu aliquet libero malesuada eu. Aliquam erat volutpat. </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <div className="d-flex mb-3">
            <Image src="https://via.placeholder.com/64" roundedCircle className="me-3" />
            <div>
              <h6 className="mb-0">John Doe</h6>
              <small>Software Developer</small>
            </div>
          </div>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sodales est. Phasellus id aliquet felis. Nulla facilisi. Nam ultrices dapibus libero, eu aliquet libero malesuada eu. Aliquam erat volutpat. </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <div className="d-flex mb-3">
            <Image src="https://via.placeholder.com/64" roundedCircle className="me-3" />
            <div>
              <h6 className="mb-0">John Doe</h6>
              <small>Software Developer</small>
            </div>
          </div>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut sodales est. Phasellus id aliquet felis. Nulla facilisi. Nam ultrices dapibus libero, eu aliquet libero malesuada eu. Aliquam erat volutpat. </p>
        </Col>
      </Row>
    </Container>

    
  );
}