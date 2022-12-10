import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Todo: [
    {
      TodoId: 1,
      title: "숨쉬기",
      desc: "숨을 쉬어 봅시다",
      isDone: false,
    },
  ],
  Comment: [
    {
      commentId: 1,
      createdAt: 1,
      nickname: "전상국",
      commentdesc: "숨이 잘 쉬어져요",
    },
    {
      commentId: 2,
      createdAt: 1,
      nickname: "이재정",
      commentdesc: "숨 잘 쉬고갑니다",
    },
  ],
};

const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    listAdd: (state, action) => {
      state.Todo = [...state.Todo, action.payload];
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { listAdd } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
