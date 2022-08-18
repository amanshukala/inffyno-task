// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from "./carslices";
// const store = configureStore({
//     reducer: {
        
//         product: productReducer,
        
//     },
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });



// export default store;


// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import users from './carslices'


// const combinedReducer = combineReducers({

//   users,
// });

// const masterReducer = combineReducers({
//   users,
// });

// export const makeStore = () =>
//   configureStore({
//     reducer: masterReducer,
//   });

// export const wrapper = createWrapper(makeStore, { debug: true });








// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import users from './carslices'




// const combinedReducer = combineReducers({
  
//   users:users,
// })

// const masterReducer = (state, action) => {
  
//     return combinedReducer(state, action);
//   }

// const initStore = () => {
//   return createStore(masterReducer, composeWithDevTools(
//     applyMiddleware()
//   ))
// }

// export const wrapper = createWrapper(initStore)















import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import users from './carslices'

const combineReducer = combineReducers({
  users: users
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      users: {
        users: [...action.payload.users.users, ...state.users.users]
      }
    };
    return nextState;
  } else {
    return combineReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer
  });

export const wrapper = createWrapper(makeStore);
