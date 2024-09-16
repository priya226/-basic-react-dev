const { act } = require('react');
const redux = require('redux');
// import {redux} from 'redux';
const createStore = redux.createStore  //get createStore functionality step 1
const bindActionCreator = redux.bindActionCreators; // to bind our actions function into reduce.dispatch
const combineReducers =redux.combineReducers; // to combine our multiple reducers into single so that createstore we can pass only combined reducer

//create function to return object with action type step 2
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED='CAKE_RESTOCKED'
const ICECREAM_ORDERED ='ICECREAM_ORDERED'
const ICECREAM_RESTOCKED='ICECREAM_RESTOCKED'


//initialise object step 2
const initialCakestate ={ //application state should be represented by single object
    numofcakes:10,
    // numOfIcecream:10
}

const initialIcecreamstate ={ //creating seperate reducer to handle icecream functionality
    numOfIcecream:10
}

// functionality for ordercake
function orderCake(qt=1){ //action creator return object has action
    return {
        type:CAKE_ORDERED, // action a object with type of action
        payload:qt
    }
}

//functionality for restock cake
function restockCake(qt=1){
    return {
        type: CAKE_RESTOCKED,
        payload:qt
    }
}

function orderIcecream(qt=1){
    return {
        type:ICECREAM_ORDERED,
        payload:qt
    }
}

function restockIcecream(qt=1){
    return {
        type:ICECREAM_RESTOCKED,
        payload:qt
    }
}

// reducer function return state based on action type
const cakeReducer =(state = initialCakestate,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return { ...state, numofcakes : state.numofcakes-action.payload} //other properties should be same hence spread operator
        case CAKE_RESTOCKED:
            return {...state,numofcakes:state.numofcakes+action.payload}
        case ICECREAM_ORDERED:
             return {...state,numOfIcecream:state.numOfIcecream-action.payload}
        case ICECREAM_RESTOCKED:
             return {...state,numOfIcecream:state.numOfIcecream+action.payload}
        default:
             return state;
    }
}

// reducer function return state based on action type
const iceCreamReducer =(state = initialIcecreamstate,action)=>{
    switch(action.type){
        case ICECREAM_ORDERED:
             return {...state,numOfIcecream:state.numOfIcecream-action.payload}
        case ICECREAM_RESTOCKED:
             return {...state,numOfIcecream:state.numOfIcecream+action.payload}
        default:
             return state;
    }
}

/** 
// create store by passing reducer whichh has all functionality define
//  step3
//store for cakereducer 
const store = createStore(cakeReducer) */

// craeete combinereducer and make use it in store
const rootReducer=combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer
})

const store = createStore(rootReducer)

console.log('initial state',store.getState());

//get subscribe data , triggers whenever state change 
const unsubscribe =store.subscribe(()=>{console.log('updated state ',store.getState())});

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

/**
 * But when you have multiple action creators, 
 * you might need to call dispatch for each one individually.
 *  bindActionCreators simplifies this by automatically 
 * wrapping action creators with the dispatch function, 
 * so you can call them directly.
 * 
 * Cleaner Code: Reduces boilerplate by automatically binding action creators to dispatch.
 * not necessary
 */
const action = bindActionCreator({orderCake,restockCake,orderIcecream,restockIcecream},store.dispatch);
action.orderCake(1);
action.orderCake(2);
action.restockCake(4);

action.orderIcecream(2);
action.orderIcecream(2);
action.restockIcecream(2);

//need to unsubscribe the data after use 
unsubscribe();
// (prevstate,action)=>newstate
