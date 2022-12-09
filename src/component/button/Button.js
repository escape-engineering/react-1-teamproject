import styled from "styled-components";
import "./style.css";

const ButtonComponent = ({ value }) => {
  return value === "ActiveAddBox" ? (
    <StyledButton>리스트 추가하기</StyledButton>
  ) : value === "BackPage" ? (
    <StyledButton>뒤로가기</StyledButton>
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
