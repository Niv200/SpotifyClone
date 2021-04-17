import logo from "./logo.svg";
import "./App.css";
import Songs from "./components/Songs";
import Albums from "./components/Albums";
import NavigationBar from "./components/navbar/NavigationBar";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header id="header">Music app by niv</header>
      <NavigationBar />
    </div>
  );
}

export default App;
