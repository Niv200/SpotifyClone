
function Album({albumName, artistsName, coverImage, songs}){
    return(
    <div>
        <h1>{albumName}</h1>
        <img 
        src = {coverImage}
        alt = "Albums cover image"/>
        <h2>{artistsName}</h2>
        <ul>{songs}</ul>
    </div>
    );
}

export default Album;