import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//초기값
const initialState = {
  Todo: [],
  isLoading: false,
  error: null,
};

//thunk
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/Todo");
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __postTodos = createAsyncThunk(
  "postTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:3001/Todo", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//리듀서
const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    retouchComment: (state, action) => {
      return state.Comment.map((comment) =>
        comment.commentId === action.payload.id
          ? { ...comment, commentdesc: action.payload.desc }
          : comment
      );
    },
  },
  //thunk용 리듀서
  extraReducers: (builder) => {
    // ----------------------------------------------------------
    builder
      //__getTodo
      // 로딩 시작
      .addCase(__getTodos.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Todo = action.payload;
      })
      //로딩 완료. 실패 시
      .addCase(__getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -------------------------------------------------------------
      //postTodo
      // 로딩 시작
      .addCase(__postTodos.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__postTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Todo = [...state.Todo, action.payload];
      })
      //로딩 완료. 실패 시
      .addCase(__postTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { retouchComment } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
