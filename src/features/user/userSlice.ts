import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type User = {
    id : number,
    name : string
}

type userState = {
    loading: boolean,
    users: User[],
    error: string | undefined
}

const initialState = {
    loading: false,
    users: [],
    error: ''
} as userState;


export const fetchUsers = createAsyncThunk('user/fetchUsers',async ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data.map((user: User)=>user))
})


const useSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers : builder =>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
});

export default useSlice.reducer;
