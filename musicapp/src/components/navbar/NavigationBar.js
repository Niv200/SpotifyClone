import React from "react";
import Songs from "../Songs";
import Song from "../Song";
import Albums from "../Albums";
import "../../css/NavigationBar.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function NavigationBar() {
  return (
    <div id="Navigation">
      <Router>
        <div>
          <ul className="navbar">
            <li className="navbarlist">
              <Link to="/">Home</Link>
            </li>
            <li className="navbarlist">
              <Link to="/playlists">Playlists</Link>
            </li>
            <li className="navbarlist">
              <Link to="/artists">Artists</Link>
            </li>
            <li className="navbarlist">
              <Link to="/albums">Albums</Link>
            </li>
            <li className="navbarlist">
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
              <Albums />
            </Route>
            <Route path="/songs">
              <Songs />
            </Route>
            <Route path="/song/:id">
            <h3>hello</h3>
              <GetSong />
            </Route>
            {/* <Route path="/song">
              <h3>hey</h3>
              <h3>hey</h3>
            </Route> */}
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const GetSong = () => {
  const { id } = useParams();
  return <Song id={id} />;
};

export default NavigationBar;
