import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/random?client_id=XTdlPAVhk_c-k2aEgsZNTujBHb_nlD5JAD7nEVCdg54&count=63'
        );
        setImages(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {images.map((image) => (
        <div key={image.id} className="p-2">
          <img src={image.urls.small} alt={image.alt_description} className="rounded-lg w-full" />
          <p className="mt-2"></p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
