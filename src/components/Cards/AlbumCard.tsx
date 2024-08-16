import './AlbumCard.css';

type AlbumCardProps = {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
  name: string;
}


function AlbumCard (album: AlbumCardProps)  {
  return (
    <div className="album-card">
      <div className="album-info">
        <div className="album-title">{album.title}</div>
        <div className="album-artist">{album.artist}</div>
        <div className="album-name">{album.name}</div>
        <img src="public\freddie1.jpeg" alt="Album Imagen" /> {/*preguntar ref al profe*/ }
        <img src={album.imageUrl} className='Album-img'/> {/*preguntar ref al profe*/ }
      </div>
    </div>
  );
}

export default AlbumCard;
