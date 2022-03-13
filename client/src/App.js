import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouters } from "./components/AppRouters";
import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";
import { Context } from "./index";
import userService from "./controllers/userService";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user, isAuthenticated } = useAuth0();
  const { currentUser } = useContext(Context);
  const getUser = async () => {
    if (isAuthenticated) {
      const response = await userService.getUser(user.email);
      currentUser.setUserId(response.id);
    }
  };
  getUser();
  return (
    <Router>
      <Container fluid>
        <NavBar />
        <AppRouters />
      </Container>
    </Router>
  );
};

export default App;
