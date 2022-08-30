import { configureStore } from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import HomePageSlice from './CarSlices';

export const makeStore = ()=> configureStore({
  reducer: {
    HomePageSlice: HomePageSlice,
  }
})

export const wrapper = createWrapper(makeStore)









// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { createWrapper, HYDRATE } from "next-redux-wrapper";
// import users from './carslices'

// const combineReducer = combineReducers({
//   users: users
// });

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       users: {
//         // users: [...action.payload.users.users  ,...state.users.users  ],
//         users: [...action.payload.users.users ],

//         count : [...action.payload.users.count  ],

//         carmake  : [...action.payload.users.carmake  ] ,

//         carmodel : [...action.payload.users.carmodel  ],

//         carStyle : [...action.payload.users.carStyle  ],

//         carEcolur : [...action.payload.users.carEcolur  ],
        
//         carIcolur : [...action.payload.users.carIcolur  ],
        
//         carTrans : [...action.payload.users.carTrans  ],
        
//         carDrive : [...action.payload.users.carDrive  ],

//         carFuel : [...action.payload.users.carFuel  ],

//         carFeature : [...action.payload.users.carFeature  ],
        

//       },

      

//     };
//     return nextState;
//   } else {
//     return combineReducer(state, action);
//   }
// };

// export const makeStore = () =>
//   configureStore({
//     reducer: masterReducer
//   });

// export const wrapper = createWrapper(makeStore);
