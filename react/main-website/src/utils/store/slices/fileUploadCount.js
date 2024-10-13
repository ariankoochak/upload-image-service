import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fileUploadCount: 0,
};

export const fileUploadCountSlice = createSlice({
    name: "fileUploadCount",
    initialState,
    reducers: {
        addedNewFile: (state) => {
                state.fileUploadCount++;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addedNewFile } = fileUploadCountSlice.actions;

export default fileUploadCountSlice.reducer;
