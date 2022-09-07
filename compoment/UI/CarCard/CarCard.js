import React, {useEffect } from "react";
import Carcarditem from "./CarcardItem";

 
const Carcard = ({ cars, setShowModal }) => {

  return (
    
    <div >
 
      <Carcarditem carData= {cars}   setShowModal={setShowModal}  />
    </div>
  );
};

export default Carcard;
