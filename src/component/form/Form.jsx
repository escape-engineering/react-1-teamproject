import styled from "styled-components";
import ButtonComponent from "../button/Button";
import { useState } from "react";

import "./style.css";

const FormComponent = () => {
  const [boxOpen, setBoxOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //타이틀 작성
  const titleWrite = ({ target: { value } }) => {
    setTitle(value);
  };
  // 내용 작성
  const descWrite = ({ target: { value } }) => {
    setDesc(value);
  };

  return (
    <Wrap>
      <div className="Active_btn_wrap">
        <ButtonComponent
          boxOpen={boxOpen}
          setBoxOpen={setBoxOpen}
          value="ActiveAddBox"
        />
      </div>
      <ListAddBox isActive={boxOpen}>
        <div className="listAddWrap">
          <label htmlFor="listAddLabel">제목</label>
          <input
            id="listAddtitle"
            type="text"
            value={title}
            onChange={titleWrite}
          />
        </div>
        <div className="listAddWrap">
          <label htmlFor="listAddLabel">내용</label>
          <textarea
            id="listAddDesc"
            type="text"
            value={desc}
            onChange={descWrite}
          ></textarea>
        </div>
      </ListAddBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-bottom: 50px;
`;
const ListAddBox = styled.div`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  padding: 20px;
  width: 330px;
  background-color: #c29cd8;
  border-radius: 10px;
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
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 10px;
    resize: none;
  }
`;

export default FormComponent;
