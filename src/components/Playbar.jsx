import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Playbar = () => {
  return (
    <Container fluid className="fixed-bottom bg-dark pt-3 pb-4">
      <Row className="justify-content-center align-items-center">
        <Col xs="auto" className="d-flex justify-content-between w-100">
          <i className="bi bi-shuffle text-white"></i>
          
          <i className="bi bi-skip-start-fill text-white"></i>
          <i className="bi bi-skip-end-fill text-white"></i>
          <i className="bi bi-repeat text-white"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default Playbar;
