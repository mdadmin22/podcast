import React from 'react';
import Header from './components/Header/Header';
import SongCard from './components/Cards/SongCard';
import AlbumCard from './components/Cards/AlbumCard';
//import ArtistCard from './components/Cards/ArtistCard';
import PlaybackBar from './components/Bars/PlayBackBar';
import { data } from './data';
import './App.css';
import Sidebar from './components/Bars/SideBar';
//import MenuBar from './components/Bars/MenuBar';
//import FrameCard from './components/Cards/FrameCard';
// src/index.js o src/App.js
//import MyComponent from './components/MyComponent/MyComponent';
//import Listado from './components/Cards/Listado';
//import ListenAgain from './components/Cards/ListenAgain';
//import Sidebar from './components/Bars/Sidebar';

const App: React.FC = () => {
  return (
    <div className="app">
        <Header />
        <Sidebar userName="Marco F" userImage="public\perfil react (1).png" onButtonClick={null} />
        <main>
        <section className="section">
          <h2>Escuchar de nuevo</h2>
          <div className="song-list">
            {data.song.map((song) => (
              <SongCard key={song.id} song={song} imageUrl={song.imageUrl} />
              
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Quick Picks</h2>
          <div className="song-list">
            {data.quickPicks.map((song) => (
              <SongCard key={song.id} song={song} imageUrl={song.imageUrl} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Recomendados</h2>
          <div className="album-list">
          {data.recommendedAlbums.map((song) => (
              <SongCard key={song.id} song={song} imageUrl={song.imageUrl} />
            ))}
          </div>
        </section>

        <section className="section">
          <h2>ARTISTAS - Similares </h2>
          <div className="artist-list">
            {data.Album.map((artist) => (
              <AlbumCard key={artist.id} title={artist.name} artist={artist.artist} id={0} imageUrl={artist.imageUrl} name={artist.name} />
            ))}
          </div>
        </section>

        </main>
      <PlaybackBar />
      </div>
  );
};

export default App;
