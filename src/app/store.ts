import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/icecream/iceCreamSlice"
import userReducer from "../features/user/userSlice"

const store = configureStore({
    reducer: {
        cake : cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer
    }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;