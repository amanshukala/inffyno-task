import axios from "axios";
import { base_url } from "../Compoment/Config";
import { api_token } from "../Compoment/Config";


const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');



export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const cricketSlice = createSlice({
    name: 'cricket',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProducts, setStatus } = cricketSlice.actions;
export default cricketSlice.reducer;

// Thunks
export const fetchProducts = createAsyncThunk('crickets/fetch', async () => {
    const data = await axios.get(base_url+"fixtures"+api_token+"&include=localteam,visitorteam,runs,season,league");
    
    return data;
});




