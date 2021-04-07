import React from "react";
import Song from "./Song";
import songs from "../database/songs.json";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Songs() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Songs</h2>
      <ul>
        <li>
          <Link to={`${match.url}/gOMhN-hfMtY`}>song id0</Link>
        </li>
        <li>
          <Link to={`${match.url}/1`}>song id1</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Song />
        </Route>
      </Switch>
    </div>
  );
}

export default Songs;
