import {createSlice} from '@reduxjs/toolkit'

/**
 * A "slice" in Redux Toolkit represents a
 *  portion of the Redux state, along with reducers and actions.
 *  It is the primary way to define your state logic.
 */
const initialState ={
    numOfCake:10
}

//prev we needed to return state object of based on action 
// in store we used to provide reducer
//created function for each action which returned action object
// store.dispatch(functionwhichreturnedactionobject())

//Create a slice using createSlice for handling state, actions, and reducers.
const cakeslice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered :(state)=>{ 
            state.numOfCake--; //internally uses immerjs
        },
        restocked: (state,action)=>{
            state.numOfCake=state.numOfCake+action.payload;
        }
    }
});

//export reducer for store configuration
 export default cakeslice.reducer

//export action for dispatching named export
export const {ordered,restocked} =cakeslice.actions 