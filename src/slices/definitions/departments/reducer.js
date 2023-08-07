import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    error: "",
    success: "",
    items: [],
    selectedItem: null
};

const DepartmentSlice = createSlice({
    name: "Department",
    initialState,
    reducers: {
        fetchItemsSuccess(state, action) {
            state.success = (action.payload);
            state.items = action.payload.items
        },
        fetchItemSuccess(state, action) {
            state.success = (action.payload);
            state.selectedItem = action.payload.item
        },
        fetchError(state, action) {
            state.success = false;
            state.error = action.payload
        },
        resetState(state) {
            state.success = null;
            state.selectedItem = null;
        }
    },
});

export const {
    fetchItemSuccess,
    fetchItemsSuccess,
    fetchError,
    resetState
} = DepartmentSlice.actions

export default DepartmentSlice.reducer;