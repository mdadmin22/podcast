import './SongCard.css';

interface Song {
  id: number;
  title: string;
  artist: string;
}

interface SongCardProps {
  song: Song;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="song-card">
      <div className="song-info">
        <div className="song-title">{song.title}</div>
        <div className="song-artist">{song.artist}</div>
      </div>
    </div>
  );
};

export default SongCard;
