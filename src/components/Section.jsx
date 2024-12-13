import { useEffect, useState } from 'react';

const Section = ({ searchQuery }) => {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`);
        const data = await response.json();

        if (data.data.length === 0) {
          throw new Error('Track not found');
        }

        setTrack(data.data[0]); // Set the first track from the search results
      } catch (error) {
        setError(error.message);
      }
    };

    if (searchQuery) {
      fetchTrack();
    }
  }, [searchQuery]);

  if (error) {
    return <p className="text-danger">Error: {error}</p>;
  }

  return (
    <div className="container my-5 bg-white opacity-75 rounded shadow">
      <h1 className="text-center mb-4">Track Information</h1>
      {track ? (
        <div className="card mx-auto" style={{ width: '18rem' }}>
          <img 
            src={track.album.cover_big} 
            className="card-img-top" 
            alt={track.title} 
          />
          <div className="card-body text-center">
            <h5 className="card-title">{track.title}</h5>
            <p className="card-text">Artist: {track.artist.name}</p>
          </div>
        </div>
      ) : (
        <p>Loading track...</p>
      )}
    </div>
  );
};

export default Section;
