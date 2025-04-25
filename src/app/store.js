import { configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "../slice/quizSlice";

const store = configureStore({
  reducer: {
    quize: quizReducer
  },  

});

export default store;