import Home from "../compoment/UI/Home/Home"
import { wrapper } from "../redux/store" 
import axios from "axios";
import { getCars, getCount, getBodyType,getExteriorColor,getInteriorColor,getTransmission,getDriveTrain ,getFuelType ,getFeatures ,getMake ,getModel} from '../redux/carslices'





const index = (props) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Home  carData={props}/>
    </div>

  )
}

export default index




export async function getServerSideProps() {
  // const cars = `https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false`;
 
  const cars =`https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false`;
  
  const count =
    "https://autodigg.com/ad-api/cars/list?car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&year=2011,2021&return=count";

  const make = "https://autodigg.com/ad-api/cars/list?return=make";

  const model = "https://autodigg.com/ad-api/cars/list?make=&return=model";

  const bodytype = "https://autodigg.com/ad-api/cars/list?return=body_type";

  const excolor =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=exterior_color";

  const intcolor =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=interior_color";

  const transmission =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=transmission";

  const dtrain =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=drivetrain";

  const fuel =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=fuel_type";

  const feature =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=features";

  const data = await axios.all([
    axios.get(cars),
    axios.get(count),
    axios.get(make),
    axios.get(model),
    axios.get(bodytype),
    axios.get(excolor),
    axios.get(intcolor),
    axios.get(transmission),
    axios.get(dtrain),
    axios.get(fuel),
    axios.get(feature),
  ]);


  return {
    props: {
      cars: data[0].data,
      count: data[1].data.count,
      makes: data[2].data,
      models: data[3].data,
      bodyType: data[4].data,
      extColors: data[5].data,
      intColors: data[6].data,
      transmissions: data[7].data,
      dtrains: data[8].data,
      fuelType: data[9].data,
      features: data[10].data,
    },
  };




}
















// export const getServerSideProps = wrapper.getServerSideProps(
//    (store) => async (context) => {

//     const init_url = "https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&price_from=0&price_to=100000";

//     const data = await axios.all([
//       axios.get(init_url),
//       axios.get(`${init_url}&return=count`),


//       axios.get(`${init_url}&return=body_type`),
//       axios.get(`${init_url}&return=exterior_color`),
//       axios.get(`${init_url}&return=interior_color`),
//       axios.get(`${init_url}&return=transmission`),
//       axios.get(`${init_url}&return=drivetrain`),
//       axios.get(`${init_url}&return=fuel_type`),
//       axios.get(`${init_url}&return=features`),

//       axios.get(`https://autodigg.com/ad-api/cars/list?return=make`),
//       axios.get(`https://autodigg.com/ad-api/cars/list?make=&return=model`),

//     ])

//     store.dispatch(getCars(data[0].data));
//     store.dispatch(getCount(data[1].data.count))

//     store.dispatch(getBodyType(data[2].data ? data[2].data : null))
//     store.dispatch(getExteriorColor(data[3].data))
    
//     store.dispatch(getInteriorColor(data[4].data))
//     store.dispatch(getTransmission(data[5].data))
//     store.dispatch(getDriveTrain(data[6].data))
//     store.dispatch(getFuelType(data[7].data))
//     store.dispatch(getFeatures(data[8].data))

//     store.dispatch(getMake(data[9].data))
//     store.dispatch(getModel(data[10].data))


  
//     }

    
// )


