import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios"

const initialState = {
    isLoading : false,
    cars:[],
    count:0,
    make:null,
    models:null,
    bodytypes:null,
    extcolors:null,
    intcolors:null,
    transmissions:null,
    dtrains:null,
    fuelType:null,
    features:null,
    page:1,

    newUsed:[],
    makeCars:[],
    modelData:[],
    bodyTypeData:[],

    price:[0,100000],
    year:[1990 , 2022],
    radius:100,



    bodystyleData : [],
    extcolorData : [],
    intcolorData :[],

    transmissionsData:[],
    dtrainsData:[],
    fuelTypeData:[],

    
    InteriorFeature :[],
    TenchnologyFeature:[],
    SafetyFeature :[],
    ExtriorFeature :[],
    others :[],

}



 export const fetchCars = createAsyncThunk('homePage/fetch', async (page ,{getState}) => {
    

    const state = getState().homePageSlice; 
    const newArr =[].concat.apply([],[state.InteriorFeature ,state.TenchnologyFeature,state.SafetyFeature,state.ExtriorFeature,state.others])  
    
    
    const url = `https://autodigg.com/ad-api/cars/list?${newArr.length >0 ?`&features=${newArr.join(",")}` : ""}${state.extcolorData.length>0 ? `&exterior_color=${state.extcolorData}`: ""}${state.intcolorData.length>0 ? `&interior_color=${state.intcolorData}`: ""}${state.transmissionsData.length>0 ? `&transmission=${state.transmissionsData}`: ""}${state.dtrainsData.length>0 ? `&drivetrain=${state.dtrainsData}`: ""}${state.fuelTypeData.length>0 ? `&fuel_type=${state.fuelTypeData}`: ""}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&radius=${state.radius}&body_type=${state.bodystyleData}&model=${state.modelData}&usedCar=false&car_type=Certified+pre-owned,${state.newUsed.length > 1 ? state.newUsed.join(",") : "Used+car,New+car"}&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false`
    console.log(url)
    const countUrl = `https://autodigg.com/ad-api/cars/list?${newArr.length >0 ?`&features=${newArr.join(",")}` : ""}${state.extcolorData.length>0 ? `&exterior_color=${state.extcolorData}`: ""}${state.intcolorData.length>0 ? `&interior_color=${state.intcolorData}`: ""}${state.transmissionsData.length>0 ? `&transmission=${state.transmissionsData}`: ""}${state.dtrainsData.length>0 ? `&drivetrain=${state.dtrainsData}`: ""}${state.fuelTypeData.length>0 ? `&fuel_type=${state.fuelTypeData}`: ""}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&radius=${state.radius}&body_type=${state.bodystyleData}&model=${state.modelData}&usedCar=false&car_type=Certified+pre-owned,${state.newUsed.length > 0 ? state.newUsed.join(",") : "Used+car,New+car"}&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=count`
    
    
    const bodyTypeUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=body_type`
    const extColUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=exterior_color`
    const intColUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=interior_color`
    const transUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=transmission`
    const dTrainUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=drivetrain`
    const fuelTypeUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=fuel_type`
    const featureUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=features`
    const modelUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.year[0]}&price_to=${state.price[1]}&return=model`


           
           

     try {

           
           
        const data = await axios.all([
            axios.get(url),
            axios.get(countUrl),

            axios.get(modelUrl),
            axios.get(bodyTypeUrl),
            axios.get(extColUrl),
            axios.get(intColUrl),
            axios.get(transUrl),
            axios.get(dTrainUrl),
            axios.get(fuelTypeUrl),
            axios.get(featureUrl),



           
        ])

        return data;

        
    } catch (error) {
        throw rejectWithValue(error)
        
        console.log(error)
    }
}
    
);



const homePageSlice = createSlice({
    name:"homePage",
    initialState,
    reducers:{
        paginatedValue: (state, action) => {
            state.page = action.payload
        },
      

        setNewUsed: (state, action) => {
            state.newUsed = action.payload
        },
        getCount:(state,action)=>{
            state.count = action.payload
        },
        setPrice : (state , action)=>{
            state.price = action.payload
        },
        setYears : (state , action)=>{
            state.year = action.payload
        },
        setRadius:(state,action)=>{
            state.radius = action.payload
        },
        setModelType : (state , action)=>{
            state.modelData = action.payload
        },
        setMakeCars : (state , action)=>{
            state.makeCars = action.payload
        },

        setFiterted : (state,action)=>{
        
            state.bodystyleData = action.payload.bodystyleData ? action.payload.bodystyleData : state.bodystyleData;

            state.extcolorData = action.payload.extcolorData ? action.payload.extcolorData : state.extcolorData;

            state.intcolorData = action.payload.intcolorData ? action.payload.intcolorData : state.intcolorData;


            state.transmissionsData = action.payload.transmissionsData ? action.payload.transmissionsData : state.transmissionsData;

            state.dtrainsData = action.payload.dtrainsData ? action.payload.dtrainsData : state.dtrainsData;

            state.fuelTypeData = action.payload.fuelTypeData ? action.payload.fuelTypeData : state.fuelTypeData;

          

            state.InteriorFeature = action.payload.InteriorFeature ? action.payload.InteriorFeature : state.InteriorFeature ;

            state.TenchnologyFeature = action.payload.TenchnologyFeature ? action.payload.TenchnologyFeature : state.TenchnologyFeature;

            state.SafetyFeature = action.payload.SafetyFeature ? action.payload.SafetyFeature : state.SafetyFeature;


            state.ExtriorFeature = action.payload.ExtriorFeature ? action.payload.ExtriorFeature : state.ExtriorFeature;
            
            state.others = action.payload.others ? action.payload.others : state.others;

        },
       
        setScroll : (state, action) => {
            state.isAcroll = action.payload
        }
        
        
    },
    extraReducers:{
        [fetchCars.pending]:(state , action)=>{
            state.isLoading = true
        },
        [fetchCars.fulfilled]:(state , action)=>{
            state.isLoading = false
            state.cars = action.payload[0].data
            state.count = action.payload[1].data.count


            state.models = action.payload[2].data
            state.bodytypes = action.payload[3].data

            state.extcolors = action.payload[4].data

            state.intcolors = action.payload[5].data

            state.transmissions = action.payload[6].data


            state.dtrains = action.payload[7].data

            state.fuelType = action.payload[8].data

            state.features = action.payload[9].data

        

       
    
            
            
        },
        [fetchCars.rejected]:(state , action)=>{
            state.isLoading = false
        },
    }
})

export const {setNewUsed ,getCount ,setPrice ,newUsed,price  ,modelData,year,setYears ,setFiterted ,paginatedValue ,cars ,count ,isLoading ,setModelType ,setMakeCars ,extcolors ,intcolors,transmissions,fuelType,models ,bodytypes ,setScroll,setRadius,features}  = homePageSlice.actions

export default homePageSlice.reducer

































