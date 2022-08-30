import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';
import axios from "axios";
const initialState = {
    isLoading: false,
    isSuccess: false,
    cars: [],
    count : 0,
    make : null,
    model : null,
    bodyType : null,
    exteriorColor :null,
    interiorColor : null,
    transmission : null,
    driveTrain : null,
    fuelType : null,
    features : null,
    page : "1",
    selected_drop : [],
    model_drop : [],
    bodyStyleSelec : [],

    extriorSelec : [],
    interiorSelec :[],

    transmissionSelec :[],
    driveTrainSelec :[],
    fuelTypeSelec : [],



    InteriorFeature :[],
    TenchnologyFeature:[],
    SafetyFeature :[],
    transmissionSelec :[],
    ExtriorFeature :[],
    others :[]

    

    



}


export const fetchCars = createAsyncThunk('homePage/fetch', async (stt) => {
    console.log("stt" ,stt.transmissionSelec)

    // const url =`https://autodigg.com/ad-api/cars/list?usedCar=true&model=${stt.model_drop.join()}&car_type=${stt.selected_drop.join()}&page=${stt.page}&radius=100&newCar=false`;
    // https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&price_from=0&price_to=100000
    const url =`https://autodigg.com/ad-api/cars/list?usedCar=true&model=${stt.model_drop.join()}&car_type=${stt.selected_drop.length > 0 ? stt.selected_drop.join(",") : stt.extriorSelec.length >0  || stt.interiorSelec.length >0  || stt.bodyStyleSelec.length >0 || stt.transmissionSelec.length >0 || stt.driveTrainSelec.length >0 || stt.fuelTypeSelec.length >0  || stt.featureSelec.InteriorFeature.length >0  || stt.featureSelec.TenchnologyFeature.length >0 || stt.featureSelec.SafetyFeature.length >0  || stt.featureSelec.transmissionSelec.length >0  || stt.featureSelec.ExtriorFeature.length >0 ||  stt.featureSelec.others.length >0 ? "": "Used+car,New+car"}&page=${stt.page}&exterior_color=${stt.extriorSelec.join(",")}&interior_color=${stt.interiorSelec.join(",")}&body_type=${stt.bodyStyleSelec.join(",")}&transmission=${stt.transmissionSelec.join(",")}&drivetrain=${stt.driveTrainSelec.join(",")}&fuel_type=${stt.fuelTypeSelec.join(",")}&features=${ featureSelec.InteriorFeature.join(",") ,featureSelec.TenchnologyFeature.join(","),featureSelec.SafetyFeature.join(",") ,featureSelec.transmissionSelec.join(",") ,featureSelec.ExtriorFeature.join(",") ,featureSelec.others.join(",") }&radius=100`
    
    console.log(url)

    try {
        const response = await axios.get(url);
        const count = await axios.get(`${url}&return=count`);
    
        return { cars :response.data, count : count.data.count} 
    } catch (error) {
        console.log(error)
    }
}

);



const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        selectedDrop : (state, action)=> {
            state.selected_drop = action.payload.selected_drop ? action.payload.selected_drop : state.selected_drop ;

            state.model_drop = action.payload.model_drop ? action.payload.model_drop : state.model_drop;

            state.bodyStyleSelec = action.payload.bodyStyleSelec ? action.payload.bodyStyleSelec : state.bodyStyleSelec;

            state.extriorSelec = action.payload.extriorSelec ? action.payload.extriorSelec : state.extriorSelec;

            state.interiorSelec = action.payload.interiorSelec ? action.payload.interiorSelec : state.interiorSelec;


            state.transmissionSelec = action.payload.transmissionSelec ? action.payload.transmissionSelec : state.transmissionSelec;

            state.driveTrainSelec = action.payload.driveTrainSelec ? action.payload.driveTrainSelec : state.driveTrainSelec;

            state.fuelTypeSelec = action.payload.fuelTypeSelec ? action.payload.fuelTypeSelec : state.fuelTypeSelec;





         },
      
      
        paginatedValue : (state, action)=> {
            state.page = action.payload
        },
      
        getCars : (state , action)=>{
            state.cars = action.payload
        },
        getCount : (state , action)=>{
            state.count = action.payload
        },
        getMake : (state , action)=>{
            state.make = action.payload
        },
        getModel : (state , action)=>{
            state.model = action.payload
        },
        getBodyType : (state , action)=>{
            state.bodyType = action.payload
        },
        getExteriorColor : (state , action)=>{
            state.exteriorColor = action.payload
        },
        getInteriorColor : (state , action)=>{
            state.interiorColor = action.payload
        },
        getTransmission : (state , action)=>{
            state.transmission = action.payload
        },
        getFuelType : (state , action)=>{
            state.fuelType = action.payload
        },
        getDriveTrain : (state , action)=>{
            state.driveTrain = action.payload
        },
        getFeatures : (state , action)=>{
            state.features = action.payload
        },
      },
    extraReducers : {
        [HYDRATE] : (state , action)=>{
            return {...state, ...action.payload.HomePageSlice};
        },
        [fetchCars.pending] :(state,action)=> {
            state.isLoading = true
        },
        [fetchCars.fulfilled] :(state,action)=> {
            state.isLoading = false
            state.cars = action.payload.cars
            state.count = action.payload.count
        },
        [fetchCars.rejected] :(state,action)=> {
            state.isLoading = false
        },
    }
});

export const {  getCars,getCount,getBodyType,getDriveTrain,getExteriorColor,getFeatures,getFuelType,getInteriorColor,getMake,getModel,getTransmission ,paginatedValue ,selected_drop  ,selectedDrop ,model_drop  ,bodyStyleSelec , extriorSelec ,interiorSelec ,transmissionSelec ,driveTrainSelec ,fuelTypeSelec } = HomePageSlice.actions
export default HomePageSlice.reducer;