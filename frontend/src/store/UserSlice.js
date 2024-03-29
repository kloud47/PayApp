import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {login: false, signup: false, profile: false, dash: false},
    reducers: {
        toggleLogin (state) {
            state.login = !state.login;
            state.signup = false;
        },
        toggleSignup (state) {
            state.signup = !state.signup;
            state.login = false;
        },
        toggleProfile (state) {
            state.profile = true
        },
        toggleDashButton (state) {
            state.dash = true;
        }
    }
})

export const UserActions = UserSlice.actions;

export default UserSlice.reducer;