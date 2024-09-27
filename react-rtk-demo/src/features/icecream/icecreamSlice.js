
import {createSlice} from'@reduxjs/toolkit'

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
    }
})
export default icecreamSlice.reducer;
export const {ordered,restocked}=icecreamSlice.actions