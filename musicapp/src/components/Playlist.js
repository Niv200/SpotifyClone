
function Playlist({name, coverImage, createdAt, songList}){
    return(
    <div>
        <h1>{name}</h1>
        <img 
        src = {coverImage}
        alt = "Albums cover image"/>
        <h2>{createdAt}</h2>
        <ul>{songList}</ul>
    </div>
    );
}

export default Playlist;