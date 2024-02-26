import { createSlice } from "@reduxjs/toolkit";
import { getRandCommentsImg } from "../assets/comments";

const initialState = {
    data: []
}

const CommentsStore = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        getCommentsFromServer(state, action) {
            state.data = [...action.payload].map(el => {
                return { ...el, ...{ "image": getRandCommentsImg() } }
            });
        },
        addComments(state, action) {
            state.data = [action.payload, ...state.data];
        }
    }
})

export const { getCommentsFromServer, addComments } = CommentsStore.actions;

export default CommentsStore.reducer;