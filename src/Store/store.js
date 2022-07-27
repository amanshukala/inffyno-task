import { configureStore } from '@reduxjs/toolkit';

import productReducer from './cricketSlice';
import scoreReducer from './scoreSlice';
const store = configureStore({
    reducer: {
        
        product: productReducer,
        score : scoreReducer ,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



export default store;