import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouters } from "./components/AppRouters";
import { Container } from "react-bootstrap";
import { NavBar } from "./components/NavBar";
import { Context } from "./index";
import userService from "./controllers/userService";
import { useAuth0 } from "@auth0/auth0-react";
import { useTheme } from "./hooks/use-theme";

const App = () => {
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated } = useAuth0();
  const { currentUser } = useContext(Context);
  const getUser = async () => {
    if (isAuthenticated) {
      try {
        const response = await userService.getUser(user.email);
        if (response) {
          currentUser.setUserId(response.id);
        } else {
          const newUser = await userService.createUser(user.email, "USER");
          currentUser.setUserId(newUser.id);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  getUser();
  return (
    <Router>
      <Container fluid>
        <NavBar theme={theme} setTheme={setTheme} />
        <AppRouters />
      </Container>
    </Router>
  );
};

export default App;
