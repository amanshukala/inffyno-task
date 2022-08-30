import { useRouter } from 'next/router'
import React from 'react'
import axios from 'axios'
import SingleDetail from '../compoment/UI/singledetail'

const CarDetail = ({carByVin}) => {
    const router =useRouter()
    


  return (
      <div className='max-w-[1520px] mx-auto'>
      
        <SingleDetail carByVin={carByVin[0]}  />
      
    </div>
  )
}

export default CarDetail;

export async function getServerSideProps(context){
  const {carId} = context.params;
  
  const response = await axios.get(`https://autodigg.com/ad-api/cars/list?vin=${carId}`)
  
  const carByVin = await response.data
  

  return {
    props:{
      carByVin : carByVin,
    },
  } 
}