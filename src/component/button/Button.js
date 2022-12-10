import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { listAdd } from "../../redux/modules/todolist";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

const ButtonComponent = ({ getState, setState, coLor, value }) => {
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
      const [setTitle, setDesc, setInputError] = setState;

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
          comments: [],
        };
        //api
        axios.post(`http://localhost:3001/Todo`, newTodo);
        dispatch(listAdd(newTodo));
        // input의 제목, 내용 초기화
        setTitle("");
        setDesc("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //뒤로가기
  const GoBackPage = () => {
    navigate("/");
  };
  //리스트삭제
  const DelInDetail = () => {
    window.confirm("정말삭제할려고!?") ? alert("삭제 ㅠㅠ") : alert("살았다!");
  };

  //댓글 추가
  const CommentAdd = () => {
    const [nickname, comment] = getState;
    const [setNickname, setComment] = setState;
    if (!nickname) {
      alert("닉네임을 입력해주세요.");
    } else if (!comment) {
      alert("댓글을 입력해주세요.");
    } else {
      console.log(nickname, ",", comment);
      setNickname("");
      setComment("");
    }
  };
  //댓글 삭제
  const CommentDelete = () => {
    alert(1);
  };
  //댓글 수정
  const CommentRetouchOpen = () => {
    setState(!getState);
  };
  //댓글 수정완료
  const CommentRetouch = () => {
    alert(2);
    setState(!getState);
  };
  //Todo 삭제하기
  const DeleteTodo = () => {
    alert(1);
  };
  // Todo 완료하기
  const DoneTodo = () => {
    alert(1);
  };
  // Todo 취소하기
  const ShiftTodo = () => {
    alert(1);
  };
  // Todo 상세보기
  const DetailTodo = () => {
    navigate("/list");
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
      case "CommentDelete":
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
        ShiftTodo();
        break;
      case "DetailTodo":
        DetailTodo();
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
      case "EditInDetail":
        setBtnName("수정하기");
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
    <StyledButton btnCoLor={coLor} onClick={btnBunc}>
      {btnName}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ btnCoLor }) =>
    btnCoLor === "red" ? "rgb(231, 181, 181)" : "rgb(191, 178, 225)"};
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ btnCoLor }) =>
      btnCoLor === "red" ? "rgb(178, 84, 84)" : "rgb(122, 98, 184)"};
  }
`;

export default ButtonComponent;
