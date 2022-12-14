import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//초기값
const initialState = {
  Todo: [],
  todoDesc: {},
  comments: [],
  isdone: false,
  isLoading: false,
  error: null,
};

//thunk
//본문 리스트 조회
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
//본문 조회하기
export const __getTodosDesc = createAsyncThunk(
  "getTodosDesc",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/Todo/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//본문 추가하기
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
// 본문 삭제 하기

// 본문 수정 하기
export const __DoneTodos = createAsyncThunk(
  "DoneTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3001/Todo${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 상세 삭제 하기

// 상세 수정 하기

// 리스트 토글

// 댓글 조회하기
export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 댓글 추가 하기

// 댓글 삭제 하기
export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/comments/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 댓글 수정 하기

//리듀서
const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    retouchComment: (state, action) => {
      return state.comment.map((comment) =>
        comment.commentId === action.payload.id
          ? { ...comment, commentdesc: action.payload.desc }
          : comment
      );
    },
    donetodos: (state, action) => {
      return (state.isdone = action.payload);
    },
  },
  //thunk용 리듀서
  extraReducers: (builder) => {
    builder
      // ----------------------------------------------------------
      //본문 리스트 조회
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
      //본문 조회하기
      // 로딩 시작
      .addCase(__getTodosDesc.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__getTodosDesc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoDesc = action.payload;
      })
      //로딩 완료. 실패 시
      .addCase(__getTodosDesc.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -------------------------------------------------------------
      //본문 추가하기
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
      })
      // -------------------------------------------------------------
      // 본문 수정하기
      // 로딩 시작
      .addCase(__DoneTodos.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__DoneTodos.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      //로딩 완료. 실패 시
      .addCase(__DoneTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -------------------------------------------------------------
      // 본문 삭제하기

      // -------------------------------------------------------------
      // 리스트 토글

      // -------------------------------------------------------------
      // 댓글 조회하기
      // 로딩 시작
      .addCase(__getComments.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__getComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      //로딩 완료. 실패 시
      .addCase(__getComments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -------------------------------------------------------------
      // 댓글 삭제 하기
      // 로딩 시작
      .addCase(__deleteComment.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      //로딩 완료. 실패 시
      .addCase(__deleteComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // -------------------------------------------------------------
    // 댓글 수정 하기
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { retouchComment, donetodos } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
