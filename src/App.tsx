import React from 'react';
import Header from './components/Header/Header';
import SongCard from './components/Cards/SongCard';
import AlbumCard from './components/Cards/AlbumCard';
import ArtistCard from './components/Cards/ArtistCard';
import PlaybackBar from './components/Bars/PlayBackBar';
import { data } from './data';
import './App.css';
//import FrameCard from './components/Cards/FrameCard';
// src/index.js o src/App.js
//import MyComponent from './components/MyComponent/MyComponent';

const App: React.FC = () => {
  return (
    <div className="app">
        <Header />

        <main>
        <section className="section">
          <h2>Escuchar de nuevo</h2>
          <div className="song-list">
            {data.listenAgain.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Quick Picks</h2>
          <div className="song-list">
            {data.quickPicks.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Recomendados</h2>
          <div className="album-list">
            {data.recommendedAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Similares [Artista]</h2>
          <div className="artist-list">
            {data.similarArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>
      </main>
      <PlaybackBar />
      </div>
  );
};

export default App;
