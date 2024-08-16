// Listado.tsx
//import ListenAgain from './components/Cards/ListenAgain';
import ListenAgain from './ListenAgain'

function Listado() {
  const songs = [
    {
      id: 1,
      artistName: "Michael Jackson",
      songName: "Thriller",
      songNumber: 14,
      songViews: "18.1M",
      imageUrl: "src/assets/rockwhityou.png"
    }
    // Puedes agregar más canciones aquí
  ];

  return (
    <ul>
      {songs.map((song) => (
        <ListenAgain key={song.id} id={0} songName={song.songName} artistName={song.artistName} songNumber={0} songViews={song.songViews} imageUrl={song.imageUrl}/>
      ))}
    </ul>
  );
}

export default Listado;
