// src/data.ts 

interface Song {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
  }
  
  interface Album {
    id: number;
    title: string;
    artist: string;
    imageUrl: string;
  }
  
  interface Artist {
    id: number;
    name: string;
    artist: string;
    imageUrl: string;
  }

  
  interface Data {
    [x: string]: any;
    listenAgain: Song[];
    quickPicks: Song[];
    recommendedAlbums: Album[];
    similarArtists: Artist[];
    song: Song[];    
  }

;
  
  export const data: Data = {
    listenAgain: [
      { id: 1, title: "Thriller", artist: "Michael Jackson", imageUrl: 'public/smoothcriminal.png' },
      { id: 2, title: "Billie Jean", artist: "Michael Jackson", imageUrl: 'public/billieJean.png' },
    ],
    quickPicks: [
      { id: 1, title: "Thriller", artist: "Michael Jackson", imageUrl: "http://localhost:5173/public/billieJean.png" },
      { id: 2, title: "Billie Jean", artist: "Michael Jackson", imageUrl: "public/smoothcriminal.png" },
      { id: 3, title: "Billie Jean", artist: "Michael Jackson", imageUrl: "public/smoothcriminal.png" },
      { id: 4, title: "Billie Jean", artist: "Michael Jackson", imageUrl: "public/smoothcriminal.png" },
    ],
    recommendedAlbums: [
      { id: 4, title: "Billie Jean", artist: "Michael Jackson", imageUrl: "public/smoothcriminal.png" },
      { id: 4, title: "Billie Jean", artist: "Michael Jackson", imageUrl: "public/smoothcriminal.png" },
    ],
    similarArtists: [
      { id: 1, name: "Un artista Similar 1", artist:"Nuevo Artista Similar1", imageUrl:"-" },
      { id: 2, name: "Un artista similar 2", artist:"Nuevo Artista Similar2", imageUrl:"public/smoothcriminal.png" },
    ],
    song: [
      { id: 1, title: "Cancion 1", artist: "Teddy Swims", imageUrl:"public/rockwhityou.png"},
      { id: 1, title: "Cancion 1", artist: "Teddy Swims", imageUrl:"public/billieJean.png" },
      
    ],
    
  };
 