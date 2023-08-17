import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    user: null,
    error: null,
    message: null,
    loading: false,
    status: "pending",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart(state) {
            console.log("loginStart")
            return {
                ...state,
                error: null,
                message: null,
                loading: true,
            };
        },
        loginSuccess(state, action) {
            console.log("loginSuccess")
            const { accessToken } = action.payload;
            return {
                ...state,
                accessToken,
                status: "authenticated",
                message: null,
                error: null,
                loading: false,
            };
        },
        loginFailed(state, action) {
            console.log("loginFailed")
            const { message, error } = action.payload;
            return {
                ...state,
                accessToken: null,
                user: null,
                status: "unauthenticated",
                message,
                error,
                loading: false,
            };
        },
        setAuth(state, action) {
            const { accessToken, user, status } = action.payload;
            console.log(accessToken);
            return {
                ...state,
                accessToken,
                user,
                status,
            };
        },
        profileStart(state) {
            console.log("profileStart")
            return {
                ...state,
                error: null,
                message: null,
                loading: true,
            };
        },
        profileSuccess(state, action) {
            console.log("profileSuccess")
            const { user } = action.payload;
            return {
                ...state,
                user,
                message: null,
                error: null,
                loading: false,
            };
        },
        profileFailed(state, action) {
            const { message, error } = action.payload;
            return {
                ...state,
                accessToken: null,
                user: null,
                status: "unauthenticated",
                message,
                error,
                loading: false,
            };
        },
        logoutSuccess(state) {
            return {
                ...state,
                accessToken: null,
                user: null,
                status: "pending",
                message: null,
                error: null,
                loading: false,
            };
        },
        resetLoginFlag(state) {
            return {
                ...state,
                error: null,
                message: null,
                loading: false,
                isLoggedIn: false,
            };
        },
    },
});

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    profileStart,
    profileSuccess,
    profileFailed,
    logoutSuccess,
    setAuth,
    resetLoginFlag,
} = authSlice.actions;

export default authSlice.reducer;
