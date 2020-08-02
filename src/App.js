import React from "react";

import "./App.css";
import DashboardTabs from "./DashboardTabs";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={DashboardTabs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
