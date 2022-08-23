import axios from "axios";

// const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });

// const carSlice = createSlice({
//     name: 'car',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state, action) => {
//                 state.status = STATUSES.LOADING;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.status = STATUSES.IDLE;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.status = STATUSES.ERROR;
//             });
//     },
// });

// export const { setProducts, setStatus } = carSlice.actions;
// export default carSlice.reducer;

// // Thunks
// export const fetchProducts = createAsyncThunk('car/fetch', async () => {
//     const data = await axios.get("https://autodigg.com/ad-api/cars/list?make=Genesis&usedCar=false&car_type=Used+car,New+car,Certified+pre-owned,,,&page=1&radius=100");

//     return data;
// }

// );

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],

  count: [],
  carmake: [],
  carmodel: [],

  carStyle: [],
  carEcolur: [],
  carIcolur: [],
  carTrans: [],
  carDrive: [],
  carFuel: [],
  carFeature: []
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    addCount: (state, action) => {
      state.count = [...state.count, action.payload];
    },
    addCarMake: (state, action) => {
      state.carmake = [...state.carmake, action.payload];
    },
    addCarModel: (state, action) => {
      state.carmodel = [...state.carmodel, action.payload];
    },



    addCarStyle: (state, action) => {
      state.carStyle = [...state.carStyle, action.payload];
    },
    addCarEcolur: (state, action) => {
      state.carEcolur = [...state.carEcolur, action.payload];
    },
    addCarIcolur: (state, action) => {
      state.carIcolur = [...state.carIcolur, action.payload];
    },
    addCarTrans: (state, action) => {
      state.carTrans = [...state.carTrans, action.payload];
    },
    addCarDrive: (state, action) => {
      state.carDrive = [...state.carDrive, action.payload];
    },
    addCarFuel: (state, action) => {
      state.carFuel = [...state.carFuel, action.payload];
    },

    addCarFeature: (state, action) => {
      state.carFeature = [...state.carFeature, action.payload];
    },
  },
});

export const {
  addUser,
  addCount,
  addCarMake,
  addCarModel,
  addCarStyle,
  addCarEcolur,
  addCarIcolur,
  addCarTrans,
  addCarDrive,
  addCarFuel,
  addCarFeature,
} = usersSlice.actions;

export default usersSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: []
// };

// export const carslice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     getUser: (state, action) => {
//       console.log("action", action);
//       state.users = [...state.users, action.payload];
//     }
//   }
// });

// export const { getUser } = carslice.actions;

// export default carslice.reducer;
