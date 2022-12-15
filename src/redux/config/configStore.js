import { configureStore } from "@reduxjs/toolkit";

import todolist from "../modules/todolist";

const store = configureStore({
  reducer: { todolist: todolist },
  devTools: process.env.REACT_APP_URL !== "http://localhost:3000",
});

export default store;
