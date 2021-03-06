import React from "react";
import Album from "./Album";
import albums from "../database/albums.json";
import songs from "../database/songs.json";
import "../css/Albums.css";

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
    <li className="albumsli" key={getNewKey()}>
      {/* Adding a clickable link to each album */}
      <div className="albumslink">
        {/* Retrieveing the album name, to display as a H3 header */}
        <div className="albumsflexitem">
          <span className="albumsname">{album.name}</span>
         <span className="albumsby">by </span>
          <span className="albumsartist">{album.artist}</span>
          <ul className="showsongs">
            {getSongs(album)}
          </ul>
          </div>
      </div>
    </li>
  ));
  return (
    <div id="albums">
      <h2>Albums</h2>
      <div>
      <ul id = "albumscontainer">
        {/* displaying the new arraylist with all of the names of the albums and their link to their ID page. */}
        {albumList}
      </ul>
      </div>
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

const getSongs = (album) => {
  let songArray = album.songs
  return songArray.map((song) => (
    <li key = {getNewKey()} className="albumsongsli">
    <Link to={`/song/` + song}>
      <span classname= "albumssongspan">
      {getSong(song).name}
      </span>
    </Link>
    </li>
  ));
};

const getNewKey = () => {
  return 1000000 + Math.floor(Math.random() * 9000000);
};

const getSong = (identifier) => {
  return songs.filter((song) => song.id === identifier)[0];
};

export default Albums;
