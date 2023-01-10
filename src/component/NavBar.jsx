import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="md" className="py-2 navbar-dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="ml-5">
            React Redux Contact Apps
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
