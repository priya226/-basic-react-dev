//configuring store = creating store here
const configureStore = require('@reduxjs/toolkit').configureStore

const cakeReducer = require('../features/cake/cakeSlice')

const icecreamReducer = require('../features/icecream/icecreamSlice')

const reduxLogger = require('redux-logger'); //logger support for redux

const logger = reduxLogger.createLogger();

//middleware is used to extend Redux’s behavior by 
    //intercepting actions and adding additional functionality
    //Middleware sits between the action dispatch and the reducer.

//higher order function
//1. First Function: (storeAPI) =>  it accepts storeAPI (an object with getState and dispatch methods) as an argument. But instead of doing something immediately, it returns another function:
//(next) => (action) => { ... }
//2. (next) => next refers to the next middleware in the chain, or the reducer if this is the last middleware. Once again, instead of immediately doing something, it returns another function:
//(action) => { ... }
// 3. Third Function: (action) =>action as an argument and then performs its work (logging the state and dispatching the action). This function contains the actual logic, but it was only reached after going through the first two functions.
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
        icecream:icecreamReducer
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
module.exports = store;