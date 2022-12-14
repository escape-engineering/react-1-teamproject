
import { useEffect } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../button/Button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { __getComments } from '../../redux/modules/todolist';
import useInput from '../../hooks/useInput';

const CommentInputComponent = () => {
  const dispatch = useDispatch();
  //페이지의 id값 추출
  const param = useParams().id;

  //댓글관련 State
  const [nickname, onchangeNicknameHandler, resetNickname] = useInput();
  const [comment, onchangeCommentHandler, resetComment] = useInput();

  //댓글 배열 소환
  useEffect(() => {
    dispatch(__getComments(param));
  }, [dispatch]);

  return (
    <div>
      <Wrap>
        <NickWrap>
          <h4>이름</h4>
          <NickInput
            type="text"
            value={nickname}
            onChange={onchangeNicknameHandler}
          />
        </NickWrap>
        <CommentWrap>
          <h4>코멘트</h4>
          <CommentInput
            type="text"
            value={comment}
            onChange={onchangeCommentHandler}
          />
        </CommentWrap>
        <ButtonWrapWrap>
          <ButtonWrap>
            <ButtonComponent
              getState={[nickname, comment, param]}
              setState={[resetNickname, resetComment]}
              value="CommentAdd"
            />
          </ButtonWrap>
        </ButtonWrapWrap>
      </Wrap>
    </div>
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
