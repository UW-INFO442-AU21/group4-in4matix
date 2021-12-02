import dash from './img/dash.svg';
import jackjack from './img/jack-jack.svg';
import mrIncredible from './img/mr-incredible.svg';
import elastigirl from './img/elastigirl.svg';
import violet from './img/violet.svg';
import edna from './img/edna.svg';
import './MenuBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

function MenuBar() {
  return (
    <div>
      <Navbar aria-label="Be Incredible" className="color-nav" variant="dark"> { /*change to incredibles scheme */ }
      <img className="nav-image" src={jackjack} alt="logo" />
        <Container>
          <Navbar.Brand href="/group4-in4matix">Be Incredible</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/group4-in4matix" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Home</NavLink>
            <NavLink aria-label="Take the quiz" to="/group4-in4matix/quiz" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Quiz</NavLink>
            <NavLink aria-label="View quiz results" to="/group4-in4matix/results" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Results</NavLink>
            {/* the nav link is replaced by a dropdown to navigate imposter types */}
            {/* <Nav.Link >Types of Imposter Syndrome</Nav.Link> */}

            <Dropdown>
              <Dropdown.Toggle aria-label="Types of imposter syndrome" className="color-dropdown" id="dropdown-button-dark-example1" variant="secondary">
                Types of Imposter Syndrome
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown" variant="dark">
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-1" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Perfectionist</NavLink> */}
                  <NavLink aria-label="Violet" to="/group4-in4matix/type-1" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={violet} alt="violet" />
                    <p className="dropdown-text">Violet</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-2" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Superhero</NavLink> */}
                  <NavLink aria-label="Mr. Incredible" to="/group4-in4matix/type-2" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={mrIncredible} alt="mr-incredible" />
                    <p className="dropdown-text">Mr. Incredible</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-3" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Genius</NavLink> */}
                  <NavLink aria-label="Edna Mode" to="/group4-in4matix/type-3" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={edna} alt="edna" />
                    <p className="dropdown-text">Edna Mode</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-4" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Soloist</NavLink> */}
                  <NavLink aria-label="Dash" to="/group4-in4matix/type-4" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={dash} alt="dash" />
                    <p className="dropdown-text">Dash</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/group4-in4matix/type-5" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Expert</NavLink> */}
                  <NavLink aria-label="Elastigirl" to="/group4-in4matix/type-5" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={elastigirl} alt="elastigirl" />
                    <p className="dropdown-text">Elastigirl</p>
                  </NavLink>
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
