import axios from "axios";
import { base_url } from "../Compoment/Config";
import { api_token } from "../Compoment/Config";


const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');



export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchscore.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchscore.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchscore.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setScores, setStatus } = scoreSlice.actions;
export default scoreSlice.reducer;

// Thunks
export const fetchscore = createAsyncThunk('score/fetch', async (id) => {
    const data =  await axios.get(
        base_url +
          "fixtures/" +
          id +
          api_token +
          "include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman"
      );
    
    return data;
});
