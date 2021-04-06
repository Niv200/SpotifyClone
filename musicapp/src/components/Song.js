
function Song({name, artist, album, length, link, lyrics}){
    return(
    <div>
        <h1>{name}</h1>
        <h2>{artist}</h2>  
        <span>{album}</span>  
        <span>{length}</span>  
        <span>{
            <iframe width="560"
        height="315" 
        src={link}
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>}</span>  
        <p>{lyrics}</p>
    </div>
    );
}

export default Song;