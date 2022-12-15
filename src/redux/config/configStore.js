import { configureStore } from "@reduxjs/toolkit";

import todolist from "../modules/todolist";

const store = configureStore({
  reducer: { todolist: todolist },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
