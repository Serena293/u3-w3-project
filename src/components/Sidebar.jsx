import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../assets/sidebar.css';

const Sidebar = () => {
  return (
    <>
      {/* Navbar for large screens (sidebar) */}
      <Navbar expand="lg" className="d-none d-lg-block sidebar navbar-dark bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home">Apple Music</Navbar.Brand>
          
          {/* For large screens, no toggle button is needed */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-column">
            <Nav className="me-auto flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar for small screens */}
      <Navbar expand="lg" className="d-sm-block d-lg-none navbar-dark bg-dark">
        <Container fluid>
          <Navbar.Brand href="#home">Apple Music</Navbar.Brand>
          
          {/* The toggle is needed on small screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
