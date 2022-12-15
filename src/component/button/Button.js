import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  __deleteComment,
  __postComments,
  __postTodos,
  __retouchComment,
  __DeleteTodo,
  __ToggleTodo,
  __DetailDeleteTodo,
} from "../../redux/modules/todolist";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const ButtonComponent = ({ getState, setState, color, value }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //리스트 추가 컴포넌트 활성화 여부
  const ActiveAddBox = () => {
    setState(!getState);
  };

  //리스트 submit
  const todoSubmit = () => {
    try {
      const [title, desc] = getState;
      const [resetTitle, resetDesc, setInputError, setBoxOpen] = setState;

      if (title.trim() === "") {
        setInputError("제목을 입력해 주세요.");
      } else if (desc.trim() === "") {
        setInputError("내용을 입력해 주세요.");
      } else {
        //새로운 todo 생성
        const newTodo = {
          id: Date.now(),
          title: title,
          desc: desc,
          isDone: false,
        };
        //api
        dispatch(__postTodos(newTodo));
        // input의 제목, 내용 초기화
        resetTitle();
        resetDesc();
        setBoxOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //뒤로가기
  const GoBackPage = () => {
    navigate("/");
  };
  //상세페이지본문삭제
  const DelInDetail = () => {
    const [id] = getState;
    if (window.confirm("삭제하시겠습니까?")) {
      dispatch(__DetailDeleteTodo(id));
      navigate("/");
    }
  };
  //상세페이지 수정오픈
  const EditInDetail = () => {
    const [editOpen] = getState;
    const [seteditOpen] = setState;
    seteditOpen(!editOpen);
  };
  //상세페이지 수정완료
  const EditComlete = () => {
    const [editTitle, editDesc, todoDesc] = getState;
    const [setEditTitle, setEditDesc] = setState;
    console.log(setEditTitle);
  };

  //댓글 추가
  const CommentAdd = () => {
    const [nickname, comment, param] = getState;
    const [resetNickname, resetComment] = setState;
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
    } else if (!comment) {
      alert("댓글을 입력해주세요.");
    } else {
      //추가할 comment 생성
      const newComment = {
        id: Date.now() + Math.random() * 100,
        postId: Number(param),
        nickname: nickname,
        commentdesc: comment,
      };
      //api
      dispatch(__postComments(newComment));
      //input 초기화
      resetNickname();
      resetComment();
    }
  };
  //댓글 삭제
  const CommentDelete = () => {
    dispatch(__deleteComment(getState));
  };
  //댓글 수정
  const CommentRetouchOpen = () => {
    const [commentOpen, commentdesc] = getState;
    const [setCommentOpen, setNewCommentDesc] = setState;
    setNewCommentDesc(commentdesc);
    setCommentOpen(!commentOpen);
  };
  //댓글 수정완료
  const CommentRetouch = () => {
    try {
      const [newCommentDesc, comment, commentOpen] = getState;
      if (newCommentDesc) {
        //수정 창 닫기
        setState(!commentOpen);
        //api
        dispatch(__retouchComment([newCommentDesc, comment]));
      } else {
        alert("내용을 입력하세요.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  //Todo 삭제하기
  const DeleteTodo = () => {
    const [id, todoLoad] = getState;
    dispatch(__DeleteTodo(id));
    setState(!todoLoad);
  };
  // Todo 토글
  const DoneTodo = () => {
    const [list, todoLoad] = getState;
    dispatch(__ToggleTodo(list));
    setState(!todoLoad);
  };
  // Todo 상세보기
  const DetailTodo = () => {
    navigate(getState);
  };

  const [btnName, setBtnName] = useState("");

  //버튼 onclick 시에 적용할 함수
  const btnBunc = () => {
    switch (value) {
      case "ActiveAddBox":
        ActiveAddBox();
        break;
      case "BackPage":
        GoBackPage();
        break;
      case "CommentAdd":
        CommentAdd();
        break;
      case "CommentInDelete":
        CommentDelete();
        break;
      case "CommentRetouchOpen":
        CommentRetouchOpen();
        break;
      case "CommentRetouch":
        CommentRetouch();
        break;
      case "todoSubmit":
        todoSubmit();
        break;
      case "DelInDetail":
        DelInDetail();
        break;
      case "DeleteTodo":
        DeleteTodo();
        break;
      case "DoneTodo":
        DoneTodo();
        break;
      case "ShiftTodo":
        DoneTodo();
        break;
      case "DetailTodo":
        DetailTodo();
        break;
      case "EditInDetailOpen":
        EditInDetail();
        break;
      case "EditComlete":
        EditComlete();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // 버튼 이름
    switch (value) {
      case "ActiveAddBox":
        setBtnName("리스트 추가하기");
        break;
      case "todoSubmit":
        setBtnName("추가하기");
        break;
      case "BackPage":
        setBtnName("뒤로가기");
        break;
      case "DelInDetail":
        setBtnName("삭제하기");
        break;
      case "EditInDetailOpen":
        setBtnName("수정하기");
        break;
      case "EditComlete":
        setBtnName("수정완료!");
        break;
      case "CommentAdd":
        setBtnName("코멘트 추가하기");
        break;
      case "CommentInDelete":
        setBtnName("코멘트 삭제하기");
        break;
      case "CommentRetouchOpen":
        setBtnName("코멘트 수정하기");
        break;
      case "CommentRetouch":
        setBtnName("수정완료");
        break;
      case "DeleteTodo":
        setBtnName("삭제하기");
        break;
      case "DoneTodo":
        setBtnName("완료하기");
        break;
      case "ShiftTodo":
        setBtnName("취소하기");
        break;
      case "DetailTodo":
        setBtnName("상세보기");
        break;
      default:
        break;
    }
  }, [value]);

  return (
    <StyledButton btnColor={color} onClick={btnBunc}>
      {btnName}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ btnColor }) =>
    btnColor === "red" ? "rgb(231, 181, 181)" : "rgb(191, 178, 225)"};
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ btnColor }) =>
      btnColor === "red" ? "rgb(178, 84, 84)" : "rgb(122, 98, 184)"};
  }
`;

export default ButtonComponent;
