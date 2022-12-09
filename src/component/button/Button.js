import { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";

const ButtonComponent = ({ boxOpen, setBoxOpen, value }) => {
  //리스트 추가 컴포넌트 활성화 여부
  const ActiveAddBox = () => {
    setBoxOpen(!boxOpen);
  };

  const [btnName, setBtnName] = useState("");

  const btnBunc = () => {
    switch (value) {
      case "ActiveAddBox":
        ActiveAddBox();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (value) {
      case "ActiveAddBox":
        setBtnName("리스트 추가하기");
        break;
      default:
        break;
    }
  }, []);

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
