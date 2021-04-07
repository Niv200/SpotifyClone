import songs from "../database/songs.json";
import "../css/Song.css";

function Song(props) {
  let { id } = props;
  console.log(id);
  const getSongObject = (identifier) => {
    //Loops through database to see if the identifier is matching the songs id.
    //It returns an array [object], hence you need to return your array as array[0].
    return songs.filter((song) => song.id === identifier)[0];
  };
  //If id is valid then..
  if (id) {
    //get the song object from the database via getSongObject.
    let song = getSongObject(id);
    //constructing the return for the song component.
    return (
      <div className="songDiv">
        <h1 className="songName">{song.name}</h1>
        <h2 className="songArtist">By {song.artist}</h2>
        <h2 className="songLength">{song.length}</h2>
        <h2 className="songAlbum">Part of {song.album} album!</h2>
        <h2>
          {
            <iframe
              className="songVideo"
              width="300rem"
              height="170rem"
              src={song.youtube_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          }
        </h2>
        <p className="songLyrics">{song.lyrics}</p>
      </div>
    );
    //If ID doesnt exist, return invalid ID!
  } else {
    return (
      <div>
        <h1>Invalid ID!</h1>
      </div>
    );
  }
}

export default Song;
