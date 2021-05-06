import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Pages
import Home from "../../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
