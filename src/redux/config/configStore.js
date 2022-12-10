import { configureStore } from '@reduxjs/toolkit';

import todolist from '../modules/todolist';

const store = configureStore({
  reducer: { todolist: todolist },
});

export default store;
