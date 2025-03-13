import React from 'react';
import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'react-image-gallery/styles/css/image-gallery.css';
import weddingImage from '../assets/wedding.jpg';
import djImage from '../assets/dj-party.jpg';
import corporateImage from '../assets/corporate-event.jpg';

// Sample photos for the gallery
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

// Sample vertical videos (replace with your own video URLs)
const verticalVideos = [
  'https://www.youtube.com/shorts/Cm1UnCe3Kw0', // Replace with your video URL
  'https://www.youtube.com/shorts/xJ9EgAXLYyw', // Replace with your video URL
  'https://www.youtube.com/shorts/MFXyiJVQFOg', // Replace with your video URL
];

const Gallery = () => {
  return (
    <div className="page">
      <h1>Gallery</h1>

      {/* Photo Gallery Section */}
      <div style={{ margin: '2rem 0' }}>
        <h2>Photos</h2>
        <ImageGallery items={images} />
      </div>

      {/* Vertical Videos Section */}
      <div style={{ margin: '2rem 0' }}>
        <h2>Videos</h2>

        {/* Desktop: Display videos side-by-side */}
        <div className="desktop-videos" style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', flexWrap: 'wrap' }}>
          {verticalVideos.map((video, index) => (
            <div key={index} style={{ width: '30%', marginBottom: '1rem' }}>
              <ReactPlayer
                url={video}
                width="100%"
                height="auto"
                controls
                playing={false}
                light // Shows a thumbnail before playing
              />
            </div>
          ))}
        </div>

        {/* Mobile: Swipeable video carousel */}
        <div className="mobile-videos" style={{ display: 'none' }}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {verticalVideos.map((video, index) => (
              <SwiperSlide key={index}>
                <ReactPlayer
                  url={video}
                  width="100%"
                  height="auto"
                  controls
                  playing={false}
                  light
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;