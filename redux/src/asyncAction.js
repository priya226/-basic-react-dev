const redux = require("redux");
const axios = require('axios')
const thunk = require('redux-thunk').thunk;
const reduxLogger=require('redux-logger');

const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();

const initialState ={
    loading:false,
    users:[],
    error:''
}
const FETCH_USERS_REQUIRED ='FETCH_USERS_REQUIRED'
const FETCH_USERS_SUCCEEDED ='FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED ='FETCH_USERS_FAILED'

const fetchUserRequest=()=>{
    return{
        type:FETCH_USERS_REQUIRED
    }
}
const fetchUserSuccess=(users)=>{
    return{
        type:FETCH_USERS_SUCCEEDED,
        payload:users
    }
}

const fetchusersFailed=(error)=>{
    return {
        type:FETCH_USERS_FAILED,
        payload:error
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUIRED:
            return {...state,loading:true};
        case FETCH_USERS_SUCCEEDED:
            return {users:action.payload,loading:false,error:''};
        case FETCH_USERS_FAILED:
            return {loading:false,error:action.payload,users:[]}
    }
}

//for calling dispatch action function we used to do store.dispatc({type:,,})
//here it will be api call which is async function - here fetchuser should return async function
//In Redux, the redux-thunk middleware allows you to return a function (instead of an action object) 
//from action creators.
// These functions can contain asynchronous logic, like API calls. 
//redux-thunk will execute this function and pass in dispatch as an argument so you can dispatch actions asynchronously.
const fetchuser=()=>{
    return async (dispatch)=>{
        dispatch(fetchUserRequest()) //dispatch action for fetch request type
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data.map((user)=>user.name);
            dispatch(fetchUserSuccess(users)) //dispatch action for type success
        })
        .catch((error)=>{
            dispatch(fetchusersFailed(error.message)) //dispatch action for failed
        })
    }
}
const store =createStore(reducer,applyMiddleware(thunk,logger));
console.log(store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchuser());
unsubscribe();