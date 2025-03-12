import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import weddingImage from '../assets/wedding.jpg';
import djImage from '../assets/dj-party.jpg';
import corporateImage from '../assets/corporate-event.jpg';

const images = [
  {
    original: weddingImage,
    thumbnail: weddingImage,
    description: 'Wedding Event',
  },
  {
    original: djImage,
    thumbnail: djImage,
    description: 'DJ Party',
  },
  {
    original: corporateImage,
    thumbnail: corporateImage,
    description: 'Corporate Event',
  },
];

const Gallery = () => {
  return (
    <div className="page">
      <h1>Gallery</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;