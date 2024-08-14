// src/data.ts
interface Song {
    id: number;
    title: string;
    artist: string;
  }
  
  interface Album {
    id: number;
    title: string;
    artist: string;
  }
  
  interface Artist {
    id: number;
    name: string;
  }
  
  interface Data {
    listenAgain: Song[];
    quickPicks: Song[];
    recommendedAlbums: Album[];
    similarArtists: Artist[];
  }
  
  export const data: Data = {
    listenAgain: [
      { id: 1, title: "Song 1", artist: "Artist 1" },
      { id: 2, title: "Song 2", artist: "Artist 2" },
    ],
    quickPicks: [
      { id: 1, title: "Quick Pick 1", artist: "Artist 3" },
      { id: 2, title: "Quick Pick 2", artist: "Artist 4" },
    ],
    recommendedAlbums: [
      { id: 1, title: "Album 1", artist: "Artist 5" },
      { id: 2, title: "Album 2", artist: "Artist 6" },
    ],
    similarArtists: [
      { id: 1, name: "Artist 7" },
      { id: 2, name: "Artist 8" },
    ],
  };
  