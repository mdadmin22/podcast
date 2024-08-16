import './ListenAgain.css';

type Props = {
    id: number;
    songName: string;
    artistName: string;
    songNumber: number;
    songViews: string;
    imageUrl: string;
  };
  
  function ListenAgain(props: Props) {
    const { id, songName, artistName, songNumber, songViews, imageUrl } = props;
    return (
      <li key={id}>
        <h2>{artistName}</h2>
        <p>ID: {id}</p>
        <div>
            <img src={imageUrl} alt={artistName} style={{ width: '100px', height: 'auto' }} /> 
        </div>
        <p>Canción: {songName}</p>
        <p>Tema N°: {songNumber}</p>
        <p>Views: {songViews}</p>
      </li>
    );
  }
  
export default ListenAgain;