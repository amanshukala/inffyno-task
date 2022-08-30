import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const GallarySlider = ({carByVin}) => {

    const images = carByVin.photos.map((data) => {
      return{  original : data ,
        thumbnail : data,
      }
    })

  return (
    <div className='bg-black py-[32px]'>
        <ImageGallery items={images} showPlayButton={false} />;
    </div>
  )
}

export default GallarySlider