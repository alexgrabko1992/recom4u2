import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
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
            {/* <Nav.Link as={Link} to="/login">
              Link
            </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
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
                Login
              </Button>
            )}
            <Form.Check
              type="switch"
              id="custom-switch"
              className="align-self-center"
              onChange={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
