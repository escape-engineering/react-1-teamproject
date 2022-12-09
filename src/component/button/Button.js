import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonComponent = ({ getState, setState, value }) => {
  const navigate = useNavigate();
  //리스트 추가 컴포넌트 활성화 여부
  const ActiveAddBox = () => {
    setState(!getState);
  };
  //리스트 submit
  const todoSubmit = () => {
    const [title, desc] = getState;
    const [setTitle, setDesc, setInputError] = setState;

    if (title.trim() === "") {
      setInputError("제목을 입력해 주세요.");
    } else if (desc.trim() === "") {
      setInputError("내용을 입력해 주세요.");
    } else {
      //submit 실행
      console.log("submit");
      // input의 제목, 내용 초기화
      setTitle("");
      setDesc("");
    }
  };

  const GoBackPage = () => {
    navigate("/");
  };
  const CommentAdd = () => {
    alert(1);
  };
  const CommentDelete = () => {
    alert(1);
  };
  const CommentToggle = () => {
    alert(1);
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
      case "CommentToggle":
        CommentToggle();
        break;
      case "todoSubmit":
        todoSubmit();
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
      case "DeleteDetail":
        setBtnName("수정하기");
        break;
      case "EditDetail":
        setBtnName("삭제하기");
        break;
      case "CommentAdd":
        setBtnName("코멘트 추가하기");
        break;
      case "CommentDelete":
        setBtnName("코멘트 삭제하기");
        break;
      case "CommentToggle":
        setBtnName("코멘트 수정하기");
        break;
      default:
        break;
    }
  }, [value]);

  return <StyledButton onClick={btnBunc}>{btnName}</StyledButton>;
};

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: rgb(75, 138, 86);
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export default ButtonComponent;
