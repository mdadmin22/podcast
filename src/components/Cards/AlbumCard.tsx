import './AlbumCard.css';


interface Album {
  id: number;
  title: string;
  artist: string;
}

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="album-card">
      <div className="album-info">
        <div className="album-title">{album.title}</div>
        <div className="album-artist">{album.artist}</div>
      </div>
    </div>
  );
};

export default AlbumCard;
