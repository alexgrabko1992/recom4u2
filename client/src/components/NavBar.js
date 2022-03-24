import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const NavBar = ({ theme, setTheme }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg={theme === "light" ? "light" : "dark"} expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand
          href="#"
          className={theme === "light" ? "" : "text-light"}
        >
          Recom4u
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to="/"
              className={theme === "light" ? "" : "text-white"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/profile"
              disabled={isAuthenticated ? false : true}
              className={theme === "light" ? "" : "text-light"}
            >
              Profile
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-2">
              Search
            </Button>
            {isAuthenticated ? (
              <Button variant="danger" onClick={logout} className="me-2">
                Logout
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={loginWithRedirect}
                className="me-2"
              >
                login
              </Button>
            )}
            {/* <NavDropdown
              title={
                <Image
                  style={{ width: "70%" }}
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                />
              }
              id="navbarScrollingDropdown"
              style={{ width: "10%", minWidth: "5rem" }}
              className="me-2"
            >
              <NavDropdown.Item href="#action3">
                <Image
                  style={{ width: "60%" }}
                  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                />
              </NavDropdown.Item>
            </NavDropdown> */}
            <Form.Check
              type="switch"
              id="custom-switch"
              className="align-self-center"
              checked={theme === "dark" ? true : false}
              onChange={() => {
                theme === "light" ? setTheme("dark") : setTheme("light");
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
