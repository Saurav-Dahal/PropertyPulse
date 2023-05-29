import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducer: {
        setCrediantials: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    }, 
})

export const {setCrediantials, logOut} = authSlice.actions;
export default authSlice.reducer;