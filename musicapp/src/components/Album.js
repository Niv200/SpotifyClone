import albums from "../database/albums.json";
import Song from "./Song";

function Album(props) {
  let { id } = props;
  const getAlbumObject = (identifier) => {
    //Loops through database to see if the identifier is matching the songs id.
    //It returns an array [object], hence you need to return your array as array[0].
    return albums.filter((album) => album.id === identifier)[0];
  };
  //function to return list of <songs> from array of [ids]
  const getAlbumList = (arrayOfIds) => {
    console.log(arrayOfIds);
    return arrayOfIds.map((id) => (
      <span>
        <Song id={id} />
      </span>
    ));
  };
  //If id is valid then..
  if (id) {
    //get the song object from the database via getSongObject.
    let album = getAlbumObject(id);
    //constructing the return for the song component.
    return (
      <div>
        <h1>{album.name}</h1>
        <h2>By: {album.artist}</h2>
        <h2>img: {album.cover_img.slice(0, 10)}</h2>
        <h2>Songs:</h2>
        <div>{getAlbumList(album.songs)};</div>
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

export default Album;
