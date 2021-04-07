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
  //Scrolling through all songs thats loaded from database.json
  let songList = songs.map((song) => (
    <li>
      {/* Adding a clickable link to each song */}
      <Link to={`${match.url}/${song.id}`}>
        {/* Retrieveing the song name, to display as a H3 header */}
        <h3>{song.name}</h3>
      </Link>
    </li>
  ));
  return (
    <div>
      <h2>Songs</h2>
      <ul>
        {/* displaying the new arraylist with all of the names of the songs and their link to their ID page. */}
        {songList}
      </ul>
      {/* Telling the router about the ID, and sending it to Song component via getSong wrapper, which gets it from useParams() */}
      <Switch>
        {/* nested routing beings at switch, repeating same as before. */}
        <Route path={`${match.path}/:id`}>
          <GetSong />
        </Route>
      </Switch>
    </div>
  );
}

// Wrapper function ~! simply gets the ID via useParams and send it to Song component
const GetSong = () => {
  const { id } = useParams();
  return <Song id={id} />;
};

export default Songs;
