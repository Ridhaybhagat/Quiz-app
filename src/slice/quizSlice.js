import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState:{
        quizes,
    },
    reducers: {
        addQuestion: () => {},
}
});


export const quizReducer = quizSlice.reducer;
export const { addQuestion } = quizSlice.actions;