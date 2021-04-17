import React from "react";
import Album from "./Album";
import albums from "../database/albums.json";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Albums() {
  let match = useRouteMatch();
  //Scrolling through all albums thats loaded from database.json
  let albumList = albums.map((album) => (
    <li key={getNewKey()}>
      {/* Adding a clickable link to each album */}
      <Link to={`${match.url}/${album.id}`}>
        {/* Retrieveing the album name, to display as a H3 header */}
        <h3>{album.name}</h3>
      </Link>
    </li>
  ));
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {/* displaying the new arraylist with all of the names of the albums and their link to their ID page. */}
        {albumList}
      </ul>
      {/* Telling the router about the ID, and sending it to Album component via getAlbum wrapper, which gets it from useParams() */}
      <Switch>
        {/* nested routing beings at switch, repeating same as before. */}
        <Route path={`${match.path}/:id`}>
          <GetAlbum />
        </Route>
      </Switch>
    </div>
  );
}

// Wrapper function ~! simply gets the ID via useParams and send it to Album component
const GetAlbum = () => {
  const { id } = useParams();
  console.log(id);
  //correct id;
  return <Album id={id} />;
};

const getNewKey = () => {
  return 1000000 + Math.floor(Math.random() * 9000000);
};

export default Albums;
