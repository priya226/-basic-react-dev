const { cakeAction } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState={
    numOfIcecream:10
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIcecream--;
        },
        restocked:(state,action)=>{
            state.numOfIcecream=state.numOfIcecream+action.payload
        }
    },
    //Why this might be useful: If there's another slice that has a similar action 
    //(let's say a cakeSlice has an ordered action when a cake is ordered),
    // you can make this icecreamSlice also respond to that external action using extraReducers. This allows for cross-slice state updates.
    extraReducers:(builder)=>{
        // dont use own reducer action bcs it will be redundency unnecessary
        //here we give action from different slic it will tell that act on cakeAction.ordered also should trigger the callback fn provided here
        //means if cakeAction.ordered triggered then provided callback fn here will also get trigger
        builder.addCase(cakeAction.ordered,(state)=>{ 
            // state.numOfCake--; the icecreamSlice doesnt hv this key if did this then NaN gets assigne
            state.numOfIcecream--;
            // state.numOfIcecream++;
        })
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamAction=icecreamSlice.actions