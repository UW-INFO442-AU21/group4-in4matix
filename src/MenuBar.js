import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

function MenuBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark"> { /*change to incredibles scheme */ }
      <img src={'jack-jack.png'} alt="logo" />
        <Container>
          <Navbar.Brand href="#home">Be Incredible</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/group4-in4matix" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Home</NavLink>
            <Nav.Link href="#quiz">Quiz</Nav.Link>
            <Nav.Link href="#results">Results</Nav.Link>
            {/* the nav link is replaced by a dropdown to navigate imposter types */}
            {/* <Nav.Link >Types of Imposter Syndrome</Nav.Link> */}

            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Types of Imposter Syndrome
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item>
                  <NavLink to="/group4-in4matix/type-1" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Perfectionist</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/group4-in4matix/type-2" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Superhero</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/group4-in4matix/type-3" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Genius</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/group4-in4matix/type-4" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Soloist</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to="/group4-in4matix/type-5" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Expert</NavLink>
                </Dropdown.Item>
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
