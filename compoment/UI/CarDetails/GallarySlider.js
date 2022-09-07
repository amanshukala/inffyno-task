import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const GallarySlider = ({carByVin}) => {

    const images =   carByVin.photos ?  carByVin?.photos?.map((data) => {
      return{ 
         original : data ,
        thumbnail : data,
      }
    }) :   [
      {
          original : "http://localhost:3000/_next/image?url=%2Fcar.jpg&w=1920&q=75",
          thumbnail : "http://localhost:3000/_next/image?url=%2Fcar.jpg&w=1920&q=75"
      }
  ]

  return (
    <div className='bg-black py-[32px]'>
        <ImageGallery items={images} showPlayButton={false} />;
    </div>
  )
}

export default GallarySlider