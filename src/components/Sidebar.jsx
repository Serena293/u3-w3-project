import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import apple from "../assets/logos/apple.svg";
import "../assets/sidebar.css";

const Sidebar = () => {
  return (
    <>
     <Navbar expand="lg" className="d-none d-lg-block sidebar navbar-dark bg-dark ">
  <Container fluid className="d-flex flex-column mt-4"> 
  <div className="position-relative mb-3">
      <input 
        className="bg-dark text-white border-0 w-100 ps-5" 
        placeholder="Cerca" 
        aria-label="Search" 
      />
      <i className="bi bi-search text-white position-absolute" style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }}></i> {/* Search icon inside the input */}
    </div>
    <Navbar.Brand href="#home" className="mb-3"> 
      <img src={apple} alt="Music Logo" className="navbar-logo" /> Music
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-column w-100">
      <Nav className="me-auto flex-column w-100">
        <Nav.Link href="#home"> <i className="bi bi-house-door mx-1"></i>Home</Nav.Link>
        <Nav.Link href="#link"><i className="bi bi-music-note-list mx-1"></i>Novità</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      <Navbar expand="lg" className="d-sm-block d-lg-none navbar-dark bg-dark">
        <Container fluid>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav color-red"  />
<Navbar.Brand href="#home">
            <img src={apple} alt="Music Logo" className="navbar-logo" /> Music
          </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-column">
              <Nav.Link href="#home"><i className="bi bi-house-door mx-1"></i>Home</Nav.Link>
              <Nav.Link href="#link"> <i className="bi bi-music-note-list mx-1"></i>Novità</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="#link" className="text-light">Accedi</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
