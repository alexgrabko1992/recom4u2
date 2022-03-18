import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import UserStore from "./store/UserStore";
import ThemeStore from "./store/ThemeStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{ currentUser: new UserStore(), currTheme: new ThemeStore() }}
  >
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Context.Provider>,
  document.getElementById("root")
);
