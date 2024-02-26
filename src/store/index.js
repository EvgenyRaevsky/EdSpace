import { configureStore } from "@reduxjs/toolkit";
import Comments from "./Comments";

export default configureStore({
    reducer: {
        "comments": Comments
    }
})