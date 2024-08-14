import './FrameCard.css';

interface Frame {
  time: string;
  title: string;
  artist: string;
  imgrtist: string;
  
}


const FrameCard: React.FC<Frame> = (song) => {
  return (
    <div className="frame-card">
      <div className="frame-info">
        <div className="frame-title">{song.title}</div>
        <div className="frame-artist">{song.artist}</div>
        <div className="id-artist">{song.time}</div>
        <img src={song.imgrtist} className='frame-img'/>
         </div>
    </div>
  );
};

export default FrameCard;
