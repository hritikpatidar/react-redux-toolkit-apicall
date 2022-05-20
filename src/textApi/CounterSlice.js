import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


export const apiAsync = createAsyncThunk(
    'counters/get',
    async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        return response.data
    }
)

export const counterSlice = createSlice({
    name :"counters",
    initialState:{
        data:[],
        status:"idle",
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(apiAsync.pending, (state)=>{
            debugger
            state.status="loading";
        })
        .addCase(apiAsync.fulfilled, (state,action)=>{
            
            state.status = "idel";
            state.data = action.payload
        })
        .addCase(apiAsync.rejected, (state)=>{
            
            state.status="error"
        });
    },
});

export const {rootReducer} = counterSlice.actions;

export default counterSlice.reducer