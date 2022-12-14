import styled from "styled-components";
import ButtonComponent from "../button/Button";
import { useEffect, useState } from "react";

import "./style.css";
import { __getTodos } from "../../redux/modules/todolist";
import useInput from "../../hooks/useInput";

const FormComponent = () => {
  const titleLimit = 15;
  const descLimit = 200;
  const [boxOpen, setBoxOpen] = useState(false);

  const [inputError, setInputError] = useState("");

  //타이틀 작성
  const [title, onchangeTitleHandler, resetTitle] = useInput();
  // 내용 작성
  const [desc, onchangedescHandler, resetDesc] = useInput();

  //에러 메세지 삭제
  const removeError = () => {
    setInputError("");
  };
  //박스가 닫히며 랜더링
  useEffect(() => {}, [setBoxOpen]);
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
            <label htmlFor="listAddLabel">
              제목<span>({title.length})</span>
            </label>
            <input
              id="listAddtitle"
              type="text"
              maxLength={titleLimit}
              value={title}
              onChange={onchangeTitleHandler}
              onFocus={removeError}
            />
          </div>
          <div className="listAddWrap">
            <label htmlFor="listAddLabel">
              내용<span>({desc.length})</span>
            </label>
            <textarea
              id="listAddDesc"
              type="text"
              maxLength={descLimit}
              value={desc}
              onChange={onchangedescHandler}
              onFocus={removeError}
            ></textarea>
          </div>
          <div className="input_error">{inputError}</div>
          <div className="submit_btn_wrap">
            <ButtonComponent
              getState={[title, desc]}
              setState={[resetTitle, resetDesc, setInputError, setBoxOpen]}
              value="todoSubmit"
            />
          </div>
        </ListAddBox>
        <TodoAddExplainWrap>
          <li>제목은 {titleLimit}자 이하로 작성하여 주세요.</li>
          <li>내용은 {descLimit}자 이하로 작성하여 주세요.</li>
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
  span {
    font-size: 15px;
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
