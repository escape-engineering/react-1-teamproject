import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const ButtonComponent = ({ boxOpen, setBoxOpen, value }) => {
  const navigate = useNavigate();
  //리스트 추가 컴포넌트 활성화 여부
  const ActiveAddBox = () => {
    setBoxOpen(!boxOpen);
  };
  const GoBackPage = () => {
    navigate('/');
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

  const [btnName, setBtnName] = useState('');

  const btnBunc = () => {
    switch (value) {
      case 'ActiveAddBox':
        ActiveAddBox();
        break;
      case 'BackPage':
        GoBackPage();
        break;
      case 'CommentAdd':
        CommentAdd();
        break;
      case 'CommentDelete':
        CommentDelete();
        break;
      case 'CommentToggle':
        CommentToggle();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (value) {
      case 'ActiveAddBox':
        setBtnName('리스트 추가하기');
        break;
      case 'BackPage':
        setBtnName('뒤로가기');
        break;
      case 'DeleteDetail':
        setBtnName('수정하기');
        break;
      case 'EditDetail':
        setBtnName('삭제하기');
        break;
      case 'CommentAdd':
        setBtnName('코멘트 추가하기');
        break;
      case 'CommentDelete':
        setBtnName('코멘트 삭제하기');
        break;
      case 'CommentToggle':
        setBtnName('코멘트 수정하기');
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
