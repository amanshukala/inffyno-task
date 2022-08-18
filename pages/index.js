import Home from "../compoment/home"
import { wrapper } from "../redux/store" 
import axios from "axios"
import { addUser } from "../redux/carslices"


const index = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Home />
    </div>

  )
}

export default index


export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  
  
  const response = await fetch(`https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100`);
  
  const data = await response.json();
  console.log(data)
  

  store.dispatch(addUser(data))

});