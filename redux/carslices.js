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

    isAcroll : 0,

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


























// import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
// import {HYDRATE} from 'next-redux-wrapper';
// import axios from "axios";
// const initialState = {
//     isLoading: false,
//     isSuccess: false,
//     cars: [],
//     count : 0,
//     make : null,
//     model : null,
//     bodyType : null,
//     exteriorColor :null,
//     interiorColor : null,
//     transmission : null,
//     driveTrain : null,
//     fuelType : null,
//     features : null,
//     page : "1",
//     selected_drop : [],
//     model_drop : [],
//     priceRange : [0, 1000000],
//     yearRange : [2011, 2021],

    
//     bodyStyleSelec : [],
//     extriorSelec : [],
//     interiorSelec :[],

//     transmissionSelec :[],
//     driveTrainSelec :[],
//     fuelTypeSelec : [],



//     InteriorFeature :[],
//     TenchnologyFeature:[],
//     SafetyFeature :[],
//     ExtriorFeature :[],
//     others :[]

    

    



// }


// export const fetchCars = createAsyncThunk('homePage/fetch', async (stt) => {

//     console.log("stt year" ,stt.yearRange.join(","))
    
//     const url =`https://autodigg.com/ad-api/cars/list?usedCar=true&model=${stt.model_drop.join()}&car_type=${stt.selected_drop.length > 0 ? stt.selected_drop.join(",")  : stt.extriorSelec.length >0  || stt.interiorSelec.length >0  || stt.bodyStyleSelec.length >0 || stt.transmissionSelec.length >0  ||  stt.driveTrainSelec.length >0  || stt.fuelTypeSelec.length >0 ||  stt.InteriorFeature.lenght >0  || stt.priceRange.lenght >0  || stt.yearRange.lenght >0 ? "": "Used+car,New+car"}&page=${stt.page}&exterior_color=${stt.extriorSelec.join(",")}&interior_color=${stt.interiorSelec.join(",")}&body_type=${stt.bodyStyleSelec.join(",")}&transmission=${stt.transmissionSelec.join(",")}&drivetrain=${stt.driveTrainSelec.join(",")}&fuel_type=${stt.fuelTypeSelec.join(",")}&features=${stt.InteriorFeature.join(",")}&price_from=${stt.priceRange[0]}&price_to=${stt.priceRange[1]}&year_from=${stt.yearRange[0]}&year_to=${stt.yearRange[1]}&radius=100`

//     console.log(url)

//     try {
//         const response = await axios.get(url);
//         const count = await axios.get(`${url}&return=count`);
    
//         return { cars :response.data, count : count.data.count} 
//     } catch (error) {
//         console.log(error)
//     }
// }

// );



// const HomePageSlice = createSlice({
//     name: "homePage",
//     initialState,
//     reducers: {
//         selectedDrop : (state, action)=> {
//             state.selected_drop = action.payload.selected_drop ? action.payload.selected_drop : state.selected_drop ;

//             state.model_drop = action.payload.model_drop ? action.payload.model_drop : state.model_drop;

//             state.bodyStyleSelec = action.payload.bodyStyleSelec ? action.payload.bodyStyleSelec : state.bodyStyleSelec;

//             state.extriorSelec = action.payload.extriorSelec ? action.payload.extriorSelec : state.extriorSelec;

//             state.interiorSelec = action.payload.interiorSelec ? action.payload.interiorSelec : state.interiorSelec;


//             state.transmissionSelec = action.payload.transmissionSelec ? action.payload.transmissionSelec : state.transmissionSelec;

//             state.driveTrainSelec = action.payload.driveTrainSelec ? action.payload.driveTrainSelec : state.driveTrainSelec;

//             state.fuelTypeSelec = action.payload.fuelTypeSelec ? action.payload.fuelTypeSelec : state.fuelTypeSelec;

          

//             state.InteriorFeature = action.payload.InteriorFeature ? action.payload.InteriorFeature : state.InteriorFeature ;

//             state.TenchnologyFeature = action.payload.TenchnologyFeature ? action.payload.TenchnologyFeature : state.TenchnologyFeature;

//             state.SafetyFeature = action.payload.SafetyFeature ? action.payload.SafetyFeature : state.SafetyFeature;


//             state.ExtriorFeature = action.payload.ExtriorFeature ? action.payload.ExtriorFeature : state.ExtriorFeature;
            
//             state.others = action.payload.others ? action.payload.others : state.others;

//             state.priceRange = action.payload.priceRange ? action.payload.priceRange : state.priceRange;

//             state.yearRange = action.payload.yearRange ? action.payload.yearRange : state.yearRange;









//          },
      
      
//         // paginatedValue : (state, action)=> {
//         //     state.page = action.payload
//         // },
      
//         // getCars : (state , action)=>{
//         //     state.cars = action.payload
//         // },
//         // getCount : (state , action)=>{
//         //     state.count = action.payload
//         // },
//         // getMake : (state , action)=>{
//         //     state.make = action.payload
//         // },
//         // getModel : (state , action)=>{
//         //     state.model = action.payload
//         // },
//         // getBodyType : (state , action)=>{
//         //     state.bodyType = action.payload
//         // },
//         // getExteriorColor : (state , action)=>{
//         //     state.exteriorColor = action.payload
//         // },
//         // getInteriorColor : (state , action)=>{
//         //     state.interiorColor = action.payload
//         // },
//         // getTransmission : (state , action)=>{
//         //     state.transmission = action.payload
//         // },
//         // getFuelType : (state , action)=>{
//         //     state.fuelType = action.payload
//         // },
//         // getDriveTrain : (state , action)=>{
//         //     state.driveTrain = action.payload
//         // },
//         // getFeatures : (state , action)=>{
//         //     state.features = action.payload
//         // },
//       },
//     extraReducers : {
//         [HYDRATE] : (state , action)=>{
//             return {...state, ...action.payload.HomePageSlice};
//         },
//         [fetchCars.pending] :(state,action)=> {
//             state.isLoading = true
//         },
//         [fetchCars.fulfilled] :(state,action)=> {
//             state.isLoading = false
//             state.cars = action.payload.cars
//             state.count = action.payload.count
//         },
//         [fetchCars.rejected] :(state,action)=> {
//             state.isLoading = false
//         },
//     }
// });

// // export const {  make,getCars,getCount,getBodyType,getDriveTrain,getExteriorColor,getFeatures,getFuelType,getInteriorColor,getMake,getModel,getTransmission ,paginatedValue ,selected_drop  ,selectedDrop ,model_drop  ,bodyStyleSelec , extriorSelec ,interiorSelec ,transmissionSelec ,driveTrainSelec ,fuelTypeSelec ,priceRange ,yearRange } = HomePageSlice.actions
// export default HomePageSlice.reducer;














