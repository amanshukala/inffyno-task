// import { configureStore } from '@reduxjs/toolkit'
// import {createWrapper} from 'next-redux-wrapper'
// import HomePageSlice from './CarSlices';

// export const makeStore = ()=> configureStore({
//   reducer: {
//     HomePageSlice: HomePageSlice,
//   }
// })

// export const wrapper = createWrapper(makeStore)








import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import homePageSlice from "./CarSlices"
 const store = configureStore({
    reducer:{
        homePageSlice
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:false,
    }),
    devTools:true
})


export default store;