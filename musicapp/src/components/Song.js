import songs from "../database/songs.json";

function Song(props, { name, artist, album, length, link, lyrics, id }) {
  console.log(props.params.id);
  const getSongObject = (identifier) => {
    return songs.filter((song) => song.id === identifier)[0];
  };
  if (id) {
    let song = getSongObject(id);
    name = song.name;
    artist = song.artist;
    album = song.album;
    length = song.length;
    lyrics = song.lyrics;
    link = song.youtube_link;
  }
  return (
    <div>
      <h1>{name}</h1>
      <h2>{artist}</h2>
      <h2>{album}</h2>
      <h2>{length}</h2>
      <h2>
        {
          <iframe
            width="560"
            height="315"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        }
      </h2>
      <p>{lyrics}</p>
    </div>
  );
}

export default Song;
