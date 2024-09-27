import axios from 'axios'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer




// // Example 1: Fetching Data from an API

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState ={
//     user:{},
//     loading:false,
//     error :''
// }
// export const fetchuser = createAsyncThunk(
//     'fetchUserData',
//     async (userId)=>{
//         const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//         if(!resp.ok){
//             throw new Error('invalid user Id')
//         }
//         const data = await resp.json();
//         return data;
//     }
// )

//     const userSlice = createSlice({
//         name:'user',
//         initialState,
//         reducers:{

//         },
//         extraReducers:(builder)=>{
//             builder.addCase(fetchuser.pending,(state)=>{
//                 state.loading=true;
//                 state.error=null;
//             })
//             builder.addCase(fetchuser.fulfilled,(state)=>{
//                 state.loading=false;
//                 state.error=null;
//             })
//             builder.addCase(fetchuser.rejected,(state,action)=>{
//                 state.loading=false;
//                 state.error=action.error.message;
//             })
//         }
//     })
//     export default userSlice.reducer;