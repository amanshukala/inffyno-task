import { configureStore } from '@reduxjs/toolkit';

import productReducer from './cricketSlice';
const store = configureStore({
    reducer: {
        
        product: productReducer,
    },
});

export default store;