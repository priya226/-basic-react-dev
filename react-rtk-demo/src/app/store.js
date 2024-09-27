//configuring store = creating store here
import {configureStore} from'@reduxjs/toolkit'

import cakeReducer from '../features/cake/cakeSlice';  

import icecreamReducer from '../features/icecream/icecreamSlice'

import userReducer from '../features/users/userSlice'


const loggerMiddleware =(storeAPI)=>(next)=>(action)=>{ 
    console.log('Dispatching action..',action);
    console.log('Dispatching state..',storeAPI.getState());
    const result = next(action); //Dispatch the action
    console.log('next state:',storeAPI.getState());
    return result; //returning result in case other middleware needs it
}
const store = configureStore({
    reducer:{//insert multiple reducer here
        cake:cakeReducer,
        icecream:icecreamReducer,
        user:userReducer,
    },
    /**
     * getDefaultMiddleware() ensures that all the default middleware (like redux-thunk, immutability, and serializability checks) are included.
     .concat(logger) adds custom middleware (redux-logger in this case) to log state changes.
     */
    // middleware:getDefaultMiddleware =>{
    //    return getDefaultMiddleware().concat(logger)
    // }
    
    middleware:getDefaultMiddleware =>{
        return getDefaultMiddleware().concat(loggerMiddleware)
     }
})
export default store;