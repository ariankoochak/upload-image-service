import { configureStore } from "@reduxjs/toolkit";
import fileUploadCount from "./slices/fileUploadCount";

export const store = configureStore({
    reducer: {
        fileUploadCount: fileUploadCount,
    },
});
