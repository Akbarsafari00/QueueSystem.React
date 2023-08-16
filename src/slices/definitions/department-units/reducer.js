import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    error: "",
    success: false,
    loading: false,
    items: [],
    selectedItem: null
};

const DepartmentUnitSlice = createSlice({
    name: "DepartmentUnit",
    initialState,
    reducers: {
        loading(state) {
            state.success = false;
            state.loading = true;
        },
        fetchItemsSuccess(state, action) {
            state.success = (action.payload);
            state.items = action.payload.items
        },
        fetchItemSuccess(state, action) {
            state.success = (action.payload);
            state.loading = false;
            state.selectedItem = action.payload.item
        },
        fetchError(state, action) {
            state.success = false;
            state.loading = false;
            state.error = action.payload
        },
        resetState(state) {
            state.success = false;
            state.loading = false;
            state.selectedItem = null;
        }
    },
});

export const {
    fetchItemSuccess,
    fetchItemsSuccess,
    fetchError,
    resetState
} = DepartmentUnitSlice.actions

export default DepartmentUnitSlice.reducer;