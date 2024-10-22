import { SEARCH_DATA } from '../../api/mock_data';

import Song from '../../components/songs/Song';

const SongList = () => {
  const songs = SEARCH_DATA;

  return (
    <div className="grid mt-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-3">
        {
          songs.map((p) => (
            <div className="col" key={p.id}>
              <Song songName={p.name} image={p.image} />
            </div>

          ))
        }
      </div>
    </div>
  );
};

export default SongList;