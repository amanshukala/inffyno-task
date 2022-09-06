import { useRouter } from 'next/router'
import React from 'react'
import axios from 'axios'
import SingleDetail from './../compoment/UI/CarDetails/SingleDetail';


const CarDetail = ({carByVin}) => {
    const router =useRouter()
    


  return (
      <div className='max-w-[1520px] mx-auto'>
        <SingleDetail carByVin={carByVin}  />
      
    </div>
  )
}

export default CarDetail;

export async function getServerSideProps(context){
  const {car} = context.params;

  
  const response = await axios.get(`https://autodigg.com/ad-api/cars/list?vin=${car}`)
  
  const carByVin = await response.data[0]
  

   return {
    props:{
      carByVin : carByVin,
    },
  } 
}













