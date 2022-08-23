import React, {useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/carslices";

import Carcarditem from "./carcarditem";

 
const Carcard = ({ setShowModal }) => {

  
  
  // const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch()

  const { users } = useSelector((state) => ({
    users: state.users.users
  }));
  

 
  


  return (
    
    <div >
 
      <Carcarditem carData= {users}   setShowModal={setShowModal}  />
    </div>
  );
};

export default Carcard;
