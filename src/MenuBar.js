import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

function MenuBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark"> { /*change to incredibles scheme */ }
      <img src={'jack-jack.png'} alt="logo" />
        <Container>
          <Navbar.Brand href="#home">Be Incredible</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#quiz">Quiz</Nav.Link>
            <Nav.Link href="#results">Results</Nav.Link>
            {/* the nav link is replaced by a dropdown to navigate imposter types */}
            {/* <Nav.Link >Types of Imposter Syndrome</Nav.Link> */}

            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Types of Imposter Syndrome
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#perfectionist">Perfectionist</Dropdown.Item>
                <Dropdown.Item href="#superperson">Superperson</Dropdown.Item>
                <Dropdown.Item href="#genius">Genius</Dropdown.Item>
                <Dropdown.Item href="#soloist">Soloist</Dropdown.Item>
                <Dropdown.Item href="#expert">Expert</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Container>
      </Navbar>

      {/* idea for a menu that can toggle visibility */}
      {/* <div className="imposter-menu">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#perfectionist">Perfectionist</Nav.Link>
              <Nav.Link href="#superperson">Superperson</Nav.Link>
              <Nav.Link href="#genius">Genius</Nav.Link>
              <Nav.Link href="#soloist">Soloist</Nav.Link>
              <Nav.Link href="#expert">Expert</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div> */}

    </div>
  )
}

export default MenuBar;