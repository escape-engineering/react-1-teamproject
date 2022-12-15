import { configureStore } from "@reduxjs/toolkit";

import todolist from "../modules/todolist";

const store = configureStore({
  reducer: { todolist: todolist },
  devTools: window.location.href === "http://localhost:3000/",
});

export default store;
