import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

// Pages
import Login from "../../pages/Login";

const AuthRoutes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
};

export default AuthRoutes;
