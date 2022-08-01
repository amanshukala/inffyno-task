import axios from "axios";
import { base_url } from "../Compoment/Config";
import { api_token } from "../Compoment/Config";


const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const intialState = {

    status: "idle",

    localteam_id : null,
    visitorteam_id : null,
    localbtting_Data : null,
    localScore : null,
    vistoScore : null,
    visitorteambtting_Data : null,
    visitorteambowl_Data : null,
    localbowl_Data :null ,

    
}


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

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





const scoreSlice = createSlice({
    name: 'score',
    // intialState,
    initialState: {
        // data: [],
        intialState,
        status: STATUSES.IDLE,
        isScroll : 0
    },
    reducers: {
        cleanData: (state) => {
            state.localteam_id = null;
            state.visitorteam_id = null;
            state.localbtting_Data = null;
            state.localScore = null;
            state.vistoScore = null;
            state.visitorteambtting_Data = null;
            state.visitorteambowl_Data = null;
            state.localbowl_Data = null;
            

          },
        setScroll : (state, action) => {
            state.isScroll = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchscore.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchscore.fulfilled, (state, action) => {
                // state.data = action.payload;
                console.log("dcdcdcdcdcd" ,action.payload);
                state.localteam_id = action.payload.data?.data?.localteam_id;
                state.visitorteam_id = action.payload.data?.data?.visitorteam_id;
                
                
                state.localbtting_Data = action.payload.data?.data?.batting.filter((data) => {
                return data.team_id === action.payload.data?.data?.localteam_id;
                });

                state.localScore = action.payload.data?.data?.runs.filter((data) => {
                    if (data.team_id === action.payload.data?.data?.localteam_id) {
                      return data;
                    }
                  });

                            
                state.vistoScore = action.payload.data?.data?.runs?.filter((data) => {
                    if (data.team_id === action.payload.data?.data?.visitorteam_id) {
                    return data;
                    }
                });
                
            
                state.visitorteambtting_Data = action.payload.data?.data?.batting.filter((data) => {
                    return data.team_id === action.payload.data?.data?.visitorteam_id;
                });
            
            
                state.localbowl_Data = action.payload.data?.data?.bowling.filter((data) => {
                    return data.team_id === action.payload.data?.data?.localteam_id;
                });
            
                
                state.visitorteambowl_Data = action.payload.data?.data?.bowling.filter((data) => {
                    return data.team_id === action.payload.data?.data?.visitorteam_id;
                });
                
                state.status = STATUSES.IDLE; 


            })
            .addCase(fetchscore.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setScores, setStatus, setScroll } = scoreSlice.actions;
export default scoreSlice.reducer;

export const { cleanData } = scoreSlice.actions;









// import axios from "axios";
// import { base_url } from "../Compoment/Config";
// import { api_token } from "../Compoment/Config";


// const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');



// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });

// const scoreSlice = createSlice({
//     name: 'score',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },
//     reducers: {
      
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchscore.pending, (state, action) => {
//                 state.status = STATUSES.LOADING;
//             })
//             .addCase(fetchscore.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.status = STATUSES.IDLE;
//             })
//             .addCase(fetchscore.rejected, (state, action) => {
//                 state.status = STATUSES.ERROR;
//             });
//     },
// });

// export const { setScores, setStatus } = scoreSlice.actions;
// export default scoreSlice.reducer;

// // Thunks
// export const fetchscore = createAsyncThunk('score/fetch', async (id) => {
//     const data =  await axios.get(
//         base_url +
//           "fixtures/" +
//           id +
//           api_token +
//           "include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman"
//       );
    
//     return data;
// });


























