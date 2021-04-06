
function Artist({name, coverImage, albumList, selectedSongs}){
    return(
    <div>
        <h1>{name}</h1>
        <img 
        src = {coverImage}
        alt = "Albums cover image"/>
        <ul>{albumList}</ul>
        <ul>{selectedSongs}</ul>
    </div>
    );
}

export default Artist;