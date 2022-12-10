import styled from "styled-components";
import ButtonComponent from "../button/Button";
import { useEffect, useState } from "react";

import "./style.css";

import { useSelector } from "react-redux";

const FormComponent = () => {
  const [boxOpen, setBoxOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [inputError, setInputError] = useState("");

  const list = useSelector((state) => state.todolist.Todo);

  //타이틀 작성
  const titleWrite = ({ target: { value } }) => {
    setTitle(value);
  };
  // 내용 작성
  const descWrite = ({ target: { value } }) => {
    setDesc(value);
  };

  //에러 메세지 삭제
  const removeError = () => {
    setInputError("");
  };

  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <Wrap>
      <div className="Active_btn_wrap">
        <ButtonComponent
          getState={boxOpen}
          setState={setBoxOpen}
          value="ActiveAddBox"
        />
      </div>
      <ActiveWrap isActive={boxOpen}>
        <ListAddBox>
          <div className="listAddWrap">
            <label htmlFor="listAddLabel">제목</label>
            <input
              id="listAddtitle"
              type="text"
              value={title}
              onChange={titleWrite}
              onFocus={removeError}
            />
          </div>
          <div className="listAddWrap">
            <label htmlFor="listAddLabel">내용</label>
            <textarea
              id="listAddDesc"
              type="text"
              value={desc}
              onChange={descWrite}
              onFocus={removeError}
            ></textarea>
          </div>
          <div className="input_error">{inputError}</div>
          <div className="submit_btn_wrap">
            <ButtonComponent
              getState={[title, desc]}
              setState={[setTitle, setDesc, setInputError]}
              value="todoSubmit"
            />
          </div>
        </ListAddBox>
        <TodoAddExplainWrap>
          <li>제목은 15자 이하로 작성하여 주세요.</li>
          <li>내용은 200자 이하로 작성하여 주세요.</li>
        </TodoAddExplainWrap>
      </ActiveWrap>
    </Wrap>
  );
};

//styled-components
const Wrap = styled.div`
  margin-bottom: 50px;
`;
const ActiveWrap = styled.div`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
`;
const ListAddBox = styled.div`
  padding: 20px;
  width: 320px;
  background-color: #ccefcc;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  label {
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    color: #2c2c2c;
  }
  input {
    width: 300px;
    font-size: 15px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 10px;
  }
  textarea {
    width: 300px;
    padding: 10px;
    height: 70px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 10px;
    resize: none;
  }
`;
const TodoAddExplainWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 20px;
`;

export default FormComponent;
