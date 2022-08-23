import Home from "../compoment/home"
import { wrapper } from "../redux/store" 
import axios from "axios";
import { addUser, addCount,addCarMake, addCarModel ,addCarStyle , addCarEcolur ,addCarIcolur, addCarTrans ,addCarDrive,addCarFuel ,addCarFeature} from "../redux/carslices"




const index = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Home />
    </div>

  )
}

export default index


export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  
  
  const response = await fetch("https://autodigg.com/ad-api/cars/list?car_type=Used+car%2CNew+car%2CCertified+pre-owned&page=1&radius=100&year=2011%2C2021&return=count")
  const count = await response.json();
  // console.log(count)
  
  store.dispatch(addCount(count))


  
  const allcarData= await fetch(`https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100`);
  
  const data = await  allcarData.json();
  
  
  store.dispatch(addUser(data))



  
  const allCarsMakeRes = await axios.get("https://autodigg.com/ad-api/cars/list?return=make")
  const carMake = await allCarsMakeRes.data

  store.dispatch(addCarMake(carMake))

  const allCarsModelRes = await axios.get("https://autodigg.com/ad-api/cars/list?make=&return=model")
  const carModel = await allCarsModelRes.data

  store.dispatch(addCarModel(carModel))




  

  const allCarsBTypeRes = await axios.get("https://autodigg.com/ad-api/cars/list?make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=body_type")
  const carStyle = await allCarsBTypeRes.data
  store.dispatch(addCarStyle(carStyle))

  const allCarsEcolourRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=exterior_color")
  const carEcolur = await allCarsEcolourRes.data
  store.dispatch(addCarEcolur(carEcolur))

  const allCarsIcolourRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=interior_color")
  const carIcolur = await allCarsIcolourRes.data
  store.dispatch(addCarIcolur(carIcolur))




  const allCarsTransRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=transmission")
  const carTrans = await allCarsTransRes.data
  store.dispatch(addCarTrans(carTrans))

  const allCarsDriveTrainRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=drivetrain")
  const carDrive = await allCarsDriveTrainRes.data
  store.dispatch(addCarDrive(carDrive))

  const allCarsFuleTRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=fuel_type")
  const carFuel = await allCarsFuleTRes.data
  store.dispatch(addCarFuel(carFuel))

  
  
  
  const allCarsFeaturesRes = await axios.get("https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011%2C2021&zip=&return=features")
  const carFeature = await allCarsFeaturesRes.data
  store.dispatch(addCarFeature(carFeature))

  


});

