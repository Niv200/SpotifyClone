import songs from "../database/songs.json";

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
      <div>
        <h1>{song.name}</h1>
        <h2>{song.artist}</h2>
        <h2>{song.album}</h2>
        <h2>{song.length}</h2>
        <h2>
          {
            <iframe
              width="560"
              height="315"
              src={song.youtube_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          }
        </h2>
        <p>{song.lyrics}</p>
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
