import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, Button, } from 'react-bootstrap';
import '../App.css'; 

function ColorSchemesExample() {
  return (
    <>
 <Navbar bg="dark" variant="dark" expand="md" className="flex-column p-3" style={{ height: '100vh', position: 'fixed', left: 0, top: 0, width: '250px' }}>

  
          <Nav className="flex-column justify-content-start">
          <Navbar.Brand href="index.html">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="Spotify Logo" className="logospotify" />
        </Navbar.Brand>
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
            <Form className="mt-3">
              <Form.Group controlId="formSearch">
                <Form.Control type="text" placeholder="Search" />
              </Form.Group>
              <Button variant="outline-secondary" size="sm" className="mt-2">
                GO
              </Button>
            </Form>
          </Nav>

        <div className="mt-auto">
          <Button variant="success" className="m-2">Sign Up</Button>
          <Button variant="outline-light" className="m-2">Login</Button>
          <div>
            <a href="#" className="text-light">Cookie Policy</a> | 
            <a href="#" className="text-light"> Privacy</a>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;