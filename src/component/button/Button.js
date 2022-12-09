import styled from "styled-components";
import "./style.css";

const ButtonComponent = ({ boxOpen, setBoxOpen, value }) => {
  //리스트 추가 컴포넌트 활성화 여부
  const ActiveAddBox = () => {
    setBoxOpen(!boxOpen);
  };

  return value === "ActiveAddBox" ? (
    <StyledButton onClick={ActiveAddBox}>리스트 추가하기</StyledButton>
  ) : null;
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
