import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { __getComments } from '../../redux/modules/todolist';

const CommentInputComponent = () => {
  const dispatch = useDispatch();
  //페이지의 id값 추출
  const param = useParams().id;

  //댓글관련 State
  const [nickname, setNickname] = useState('');
  const [comment, setComment] = useState('');

  //Nickname input값 state설정
  const nickWrite = ({ target: { value } }) => {
    setNickname(value);
  };

  //comment input값 state설정
  const commentWrite = ({ target: { value } }) => {
    setComment(value);
  };

  //댓글 배열 소환
  useEffect(() => {
    dispatch(__getComments(param));
  }, [dispatch]);

  return (
    <Wrap>
      <NickWrap>
        <h4>이름</h4>
        <NickInput type="text" value={nickname} onChange={nickWrite} />
      </NickWrap>
      <CommentWrap>
        <h4>코멘트</h4>
        <CommentInput type="text" value={comment} onChange={commentWrite} />
      </CommentWrap>
      <ButtonWrapWrap>
        <ButtonWrap>
          <ButtonComponent
            getState={[nickname, comment, param]}
            setState={[setNickname, setComment]}
            value="CommentAdd"
          />
        </ButtonWrap>
      </ButtonWrapWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid green;
  padding: 10px;
  display: block;
  gap: 5px;
`;
const ButtonWrapWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ButtonWrap = styled.div`
  width: 125px;
  height: 40px;
`;

const NickWrap = styled.div``;

const NickInput = styled.input``;

const CommentWrap = styled.div``;

const CommentInput = styled.input`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

export default CommentInputComponent;
