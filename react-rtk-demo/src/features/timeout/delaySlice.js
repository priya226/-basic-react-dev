import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState={
    loading:true,
    message:''
}

export const simulateDelay = createAsyncThunk(
    'delay/simulateDelay', //naming slice and async name given
    async (millis)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(`message sent succefully at ${millis}`)
            })
        })
    }
)

const delaySlice = createSlice({
    name:'delay',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(simulateDelay.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(simulateDelay.resolve,(state,action)=>{
            state.loading=false;
            state.message=action.payload; //resolve() return will be added into action.payload
        })
        builder.addCase(simulateDelay.rejected,(state)=>{
            state.loading=false;
            state.message='somethimg went wrong...'
        })
    }
})

// export default delaySlice.actions; not req as no action defined in reducer

export default delaySlice.reducer;