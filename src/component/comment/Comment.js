import styled from 'styled-components';
import ButtonComponent from '../button/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getComments, __getTodosDesc } from '../../redux/modules/todolist';
import { useParams } from 'react-router-dom';

const Comment = () => {
  const params = useParams().id;
  const dispatch = useDispatch();

  // 댓글 수정 input을 위한 State
  const [newCommentDesc, setNewCommentDesc] = useState('');

  // 댓글 수정 input을 위한 onChangeNewCommentHandler
  const onChangeNewCommentDescHandler = (e) => {
    let value = e.target.value;
    setNewCommentDesc(value);
  };

  // params에 맞는 todo 소환
  const { Todo, todoDesc, comments, isLoading, error } = useSelector(
    (state) => state.todolist
  );

  // 댓글의 loading이 완료되면 리렌더링하는 용도의 state
  const [commentLoad, setCommentLoad] = useState(false);

  const [commentOpen, setCommentOpen] = useState(true);

  //댓글 배열 소환
  useEffect(() => {
    dispatch(__getComments(params));
  }, [dispatch, commentLoad, commentOpen]);

  //댓글 배열에서 해당 todo에 대한 댓글만 나오도록 필터링
  const todoComments = comments.filter(
    (list) => list.postId === parseInt(params)
  );

  return (
    <div>
      {comments
        ? todoComments.map((comment) => {
            return (
              <div key={comment.id}>
                <CommentWrap isOpen={commentOpen}>
                  <p>{comment.nickname}</p>
                  <p>{comment.commentdesc}</p>
                  <ButtonWrapWrap>
                    <ButtonWrap>
                      <ButtonComponent
                        getState={commentOpen}
                        setState={setCommentOpen}
                        value="CommentRetouchOpen"
                      />
                      <ButtonComponent
                        value="CommentInDelete"
                        coLor="red"
                        getState={[comment.id, commentLoad]}
                        setState={setCommentLoad}
                      />
                    </ButtonWrap>
                  </ButtonWrapWrap>
                </CommentWrap>
                <RetouchCommentWrap isOpen={commentOpen}>
                  <p>{comment.nickname}</p>
                  <p>comment</p>
                  <RetouchInput
                    type="text"
                    value={newCommentDesc}
                    onChange={onChangeNewCommentDescHandler}
                  />
                  <RetouchButtonWrapWrap>
                    <RetouchButtonWrap>
                      <ButtonComponent
                        getState={[
                          newCommentDesc,
                          comment,
                          commentOpen,
                          commentLoad,
                        ]}
                        setState={[setCommentOpen, setCommentLoad]}
                        value="CommentRetouch"
                      />
                    </RetouchButtonWrap>
                  </RetouchButtonWrapWrap>
                </RetouchCommentWrap>
              </div>
            );
          })
        : null}
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

export default Comment;
