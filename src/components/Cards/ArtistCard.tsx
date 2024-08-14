import './ArtistCard.css';

interface Artist {
  id: number;
  name: string;
}

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="artist-card">
      <div className="artist-name">{artist.name}</div>
    </div>
  );
};

export default ArtistCard;
