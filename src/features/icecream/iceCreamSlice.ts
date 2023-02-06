import { createSlice, PayloadAction } from "@reduxjs/toolkit";;

type iceCreamState = {
    numOfIceCream: number;
};


const initialState = {
    numOfIceCream: 20
} as iceCreamState;


const iceCreamSlice  = createSlice({
    name:"ice cream",
    initialState,
    reducers:{
        ordered: (state: iceCreamState) =>{
            state.numOfIceCream--;
        },
        restocked : (state:iceCreamState,action : PayloadAction<number>)=>{
            state.numOfIceCream += action.payload;
        }
    },
    extraReducers : (builder) =>{
        builder.addCase("cake/ordered",(state)=>{
            state.numOfIceCream--;
        })
    }

})

export default iceCreamSlice.reducer;
export const {ordered,restocked} = iceCreamSlice.actions;