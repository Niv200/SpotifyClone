import albums from "../database/albums.json";
import songs from "../database/songs.json";

function Album(props){
    let {id} = props;
    const getSongObject = (identifier) => {
        return songs.filter((song) => song.id === identifier)[0];
    };
      const GetAlbumById = (identifier) => {
        return albums.filter(album => album.id === identifier)[0];
      };

      if(!id){
          return(
              <div>
                <h1>Album not found.</h1>
            </div>
        )
    }
    let album = GetAlbumById(id);
    const getAlbumSongs = () => {
       return album.songs.map((id) => <li>{getSongObject(id)}</li>);
    }
    return(
    <div>
        <h1>{album.name}</h1>
        <img 
        src = {album.cover_img}
        alt = "Albums cover image"/>
        <h2>{album.artist}</h2>
        <ul>{getAlbumSongs()}</ul>
    </div>
    );
}
  

export default Album;