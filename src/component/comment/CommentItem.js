import styled from 'styled-components';
import ButtonComponent from '../button/Button';
import { useState } from 'react';

const CommentItem = ({ comment }) => {
  const [commentOpen, setCommentOpen] = useState(true);

  // 댓글 수정 input을 위한 State
  const [newCommentDesc, setNewCommentDesc] = useState('');

  // 댓글 수정 input을 위한 onChangeNewCommentHandler
  const onChangeNewCommentDescHandler = (e) => {
    let value = e.target.value;
    setNewCommentDesc(value);
  };

  return (
    <div key={comment.id}>
      <CommentWrap isOpen={commentOpen}>
        <p>닉네임:{comment.nickname}</p>
        <p>코멘트:{comment.commentdesc}</p>
        <ButtonWrapWrap>
          <ButtonWrap>
            <ButtonComponent
              getState={[commentOpen, comment.commentdesc]}
              setState={[setCommentOpen, setNewCommentDesc]}
              value="CommentRetouchOpen"
            />
            <ButtonComponent
              value="CommentInDelete"
              color="red"
              getState={comment.id}
            />
          </ButtonWrap>
        </ButtonWrapWrap>
      </CommentWrap>
      <RetouchCommentWrap isOpen={commentOpen}>
        <p>{comment.nickname}</p>
        <p>comment</p>
        <RetouchInput
          type="text"
          value={newCommentDesc || ''}
          onChange={onChangeNewCommentDescHandler}
        />
        <RetouchButtonWrapWrap>
          <RetouchButtonWrap>
            <ButtonComponent
              getState={[newCommentDesc, comment, commentOpen]}
              setState={setCommentOpen}
              value="CommentRetouch"
            />
          </RetouchButtonWrap>
        </RetouchButtonWrapWrap>
      </RetouchCommentWrap>
    </div>
  );
};

const RetouchCommentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-bottom: 1px solid green;
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
`;

const RetouchInput = styled.input`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;

const RetouchButtonWrapWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const RetouchButtonWrap = styled.div`
  display: flex;
  width: 125px;
  height: 40px;
  gap: 5px;
`;

const CommentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-bottom: 1px solid green;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 250px;
  height: 40px;
  gap: 5px;
`;

const ButtonWrapWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default CommentItem;
