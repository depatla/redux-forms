import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/session/Login";
import Registration from "./components/session/Registration";
import Header from "./components/common/header";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Route path="/" exact component={Registration}></Route>
        <Route path="/login" component={Login}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
