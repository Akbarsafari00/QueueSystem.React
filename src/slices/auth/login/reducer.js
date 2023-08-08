import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    accessToken: "",
    error: "", // for error message
    loading: false,
    isUserLogout: false,
    errorMsg: false, // for error,
    isLoggedIn: false,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        apiError(state, action) {
            state.error = action.payload.data;
            state.loading = true;
            state.isUserLogout = false;
            state.errorMsg = true;
            state.isLoggedIn = false;
        },
        userLoggedIn(state, action) {
            state.isLoggedIn = true;
        },
        loginSuccess(state, action) {
            state.accessToken = action.payload.accessToken
            state.loading = false;
            state.errorMsg = false;
            state.isLoggedIn = true;
        },
        logoutUserSuccess(state, action) {
            state.isUserLogout = true;
            state.isLoggedIn = false;
        },
        reset_login_flag(state) {
            state.error = null
            state.loading = false;
            state.errorMsg = false;
            state.isLoggedIn = false;
        }
    },
});

export const {
    apiError,
    loginSuccess,
    logoutUserSuccess,
    reset_login_flag
} = loginSlice.actions

export default loginSlice.reducer;