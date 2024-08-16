import './SongCard.css';
//import './ListenAgain.css'

interface Song {
  id: number;
  title: string;
  artist: string;
  imageUrl: string;
}

interface SongCardProps {
  song: Song;
  imageUrl: string;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="song-card">
      <div className="song-info">
        <div className="song-title">{song.id}</div>
        <div className="song-title">{song.title}</div>
        <div className="song-artist">{song.artist}</div>
        <p>
        <img src={song.imageUrl} alt="imagen" />
        </p>
      </div>
    </div>
  );
};

export default SongCard;
