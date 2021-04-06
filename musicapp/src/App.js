import logo from "./logo.svg";
import "./App.css";
import Song from "./components/Song";
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
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/playlists">Playlists</Link>
            </li>
            <li>
              <Link to="/artists">Artists</Link>
            </li>
            <li>
              <Link to="/albums">Albums</Link>
            </li>
            <li>
              <Link to="/songs">Songs</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/playlists">
              <h1>Playlists</h1>
            </Route>
            <Route path="/artists">
              <h1>Artists</h1>
            </Route>
            <Route path="/albums">
              <h1>Albums</h1>
            </Route>
            <Route path="/songs">
              <h1>Songs</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

{
  /* <Song 
name = "song name"
artist = "song artist"
album = "song album"
length = "3:00"
link = "https://www.youtube.com/embed/YmynMyn8o6E"
lyrics = "lyrics lyrics lyrics bla bla bla"
/> */
}
