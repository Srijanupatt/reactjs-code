import React, { useState } from 'react';
import './App.css';

const photos = [
  'https://picsum.photos/id/237/200/200',
  'https://picsum.photos/id/238/200/200',
  'https://picsum.photos/id/239/200/200',
  'https://picsum.photos/id/240/200/200',
  'https://picsum.photos/id/241/200/200',
  'https://picsum.photos/id/242/200/200',
  'https://picsum.photos/id/243/200/200',
  'https://picsum.photos/id/244/200/200',
  'https://picsum.photos/id/245/200/200',
  'https://picsum.photos/id/246/200/200',
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 2;
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const totalPages = Math.ceil(photos.length / photosPerPage);

  return (
    <div className="container">
      <h2>Photo Gallery</h2>
      <div className="gallery">
        {currentPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index}`} />
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
          
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
