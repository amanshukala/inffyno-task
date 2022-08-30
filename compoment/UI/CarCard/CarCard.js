import React, {useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Carcarditem from "./CarcardItem";

 
const Carcard = ({ setShowModal }) => {

  
 
  
  const dispatch = useDispatch()
  const { cars } = useSelector((state) => state.HomePageSlice)

 
  


  return (
    
    <div >
 
      <Carcarditem carData= {cars}   setShowModal={setShowModal}  />
    </div>
  );
};

export default Carcard;
