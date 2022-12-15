import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//초기값
const initialState = {
  Todo: [],
  todoDesc: {},
  comments: [],
  isLoading: false,
  error: null,
};

//thunk
//본문 리스트 조회
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/Todo`);
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
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/Todo/${payload}`
      );
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
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/Todo`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 본문 삭제 하기
export const __DeleteTodo = createAsyncThunk(
  "deleteTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/Todo/${payload}`);
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/Todo`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 디테일페이지 본문 수정하기
export const __editDetail = createAsyncThunk(
  "editDetail",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${process.env.REACT_APP_URL}/Todo/${payload[0].id}`, {
        title: payload[1],
        desc: payload[2],
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/Todo/${payload[0].id}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 리스트 토글
export const __ToggleTodo = createAsyncThunk(
  "doneTodo",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`${process.env.REACT_APP_URL}/Todo/${payload.id}`, {
        isDone: !payload.isDone,
      });
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/Todo`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 댓글 조회하기
export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/Comments`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 댓글 추가 하기
export const __postComments = createAsyncThunk(
  "postComments",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/Comments`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 댓글 삭제 하기
export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/Comments/${payload}`);
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/Comments`);
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// 댓글 수정 하기
export const __retouchComment = createAsyncThunk(
  "retouchComment",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `${process.env.REACT_APP_URL}/Comments/${payload[1].id}`,
        {
          commentdesc: payload[0],
        }
      );
      const { data } = await axios.get(`${process.env.REACT_APP_URL}/Comments`);
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
  reducers: {},
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
      .addCase(__editDetail.pending, (state) => {
        state.isLoading = true;
      })
      // 로딩 완료. 성공 시
      .addCase(__editDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoDesc = action.payload;
      })
      // 로딩 완료. 실패 시
      .addCase(__editDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -------------------------------------------------------------
      // 본문 삭제하기
      .addCase(__DeleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__DeleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Todo = action.payload;
      })
      //로딩 완료. 실패 시
      .addCase(__DeleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // -------------------------------------------------------------
      // 리스트 토글
      .addCase(__ToggleTodo.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__ToggleTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Todo = action.payload;
      })
      //로딩 완료. 실패 시
      .addCase(__ToggleTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      // 댓글 추가 하기
      // 로딩 시작
      .addCase(__postComments.pending, (state) => {
        state.isLoading = true;
      })
      //로딩 완료. 성공 시
      .addCase(__postComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = [action.payload, ...state.comments];
      })
      //로딩 완료. 실패 시
      .addCase(__postComments.rejected, (state, action) => {
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
        state.comments = action.payload;
      })
      //로딩 완료. 실패 시
      .addCase(__deleteComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // -------------------------------------------------------------
      // 댓글 수정 하기
      // 로딩 시작
      .addCase(__retouchComment.pending, (state) => {
        state.isLoading = true;
      })
      // 로딩 완료. 성공 시
      .addCase(__retouchComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.comments = action.payload;
      })
      // 로딩 완료. 실패 시
      .addCase(__retouchComment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {} = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
