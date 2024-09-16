const redux = require('redux');
// import {redux} from 'redux';
const createStore = redux.createStore  //get createStore functionality step 1

//create function to return object with action type step 2
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED='CAKE_RESTOCKED'


//initialise object step 2
const initialCakestate ={ //application state should be represented by single object
    numofcakes:10,
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

// reducer function return state based on action type
const cakeReducer =(state = initialCakestate,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return { ...state, numofcakes : state.numofcakes-action.payload} //other properties should be same hence spread operator
        case CAKE_RESTOCKED:
            return {...state,numofcakes:state.numofcakes+action.payload}
        default:
             return state;
    }
}

// create store by passing reducer whichh has all functionality define
//  step3
//store for cakereducer 
const store = createStore(cakeReducer)

console.log('initial state',store.getState());

//get subscribe data , triggers whenever state change 
const unsubscribe =store.subscribe(()=>{console.log('updated state ',store.getState())});
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))
//need to unsubscribe the data after use 
unsubscribe();
// (prevstate,action)=>newstate
