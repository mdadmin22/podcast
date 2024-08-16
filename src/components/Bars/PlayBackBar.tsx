// src/components/PlaybackBar.tsx
import React from 'react';
import './PlaybackBar.css';
import FrameCard from '../Cards/FrameCard';
//import ArtistCard from '../Cards/ArtistCard';

const PlaybackBar: React.FC = () => {
  return (
    <div className="playback-bar">
      <div className="playback-controls">
        <button><img src="public\skip_previous.svg" alt="proximo" /></button>
        <button><img src="public\play_arrow.svg" alt="play" /></button>
        <button><img src="public\skip_next.svg" alt="proximo" /></button>
        </div>
      <div className="FrameCard">
        <FrameCard title="Artista 1" imgrtist="public\Rectangle 2.png" artist="ART" time={"0:15/3:10"}/>
        </div>  
    </div>
  );
};

export default PlaybackBar;
