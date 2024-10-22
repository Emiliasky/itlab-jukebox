interface SongProps {
  songName: string
  image: string
}

const Song = ({ songName, image }: SongProps) => {
  return (
    <div className="card bg-light border-dark mb-4">
      <div className="card-body">
        <h5 className="card-title">{songName}</h5>
        <img src={image} style={{ width: '120px', height: '120px' }} />
      </div>
    </div>
  );
};

export default Song;