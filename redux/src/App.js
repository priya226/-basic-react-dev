const redux = require('redux');
// import {redux} from 'redux';
const createStore = redux.createStore  //get createStore functionality step 1

//create function to return object with action type step 2
const CAKE_ORDERED = 'CAKE_ORDERED'
function orderCake(qt=1){ //action creator return object has action
    return {
        type:CAKE_ORDERED, // action a object with type of action
        quantity:qt
    }
}

//initialise object step 2
const initialCakestate ={ //application state should be represented by single object
    numofcakes:10,
}

// reducer function return state based on action type
const cakeReducer =(state = initialCakestate,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return { ...state, numofcakes : state.numofcakes-1} //other properties should be same hence spread operator
        default:
             return state;
    }
}

// create store by passing reducer function step3
const store = createStore(cakeReducer)

console.log('initial state',store.getState());

//get subscribe data , triggers whenever state change 
const unsubscribe =store.subscribe(()=>{console.log('updated state ',store.getState())});
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

//need to unsubscribe the data after use 
unsubscribe();
// (prevstate,action)=>newstate
