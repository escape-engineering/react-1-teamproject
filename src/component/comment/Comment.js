import styled from "styled-components";
import ButtonComponent from "../button/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodosDesc } from "../../redux/modules/todolist";
import { useParams } from "react-router-dom";

const Comment = () => {
  const params = useParams().id;
  const dispatch = useDispatch();

  // params에 맞는 todo 소환
  const { Todo, todoDesc, isloading, error } = useSelector(
    (state) => state.todolist
  );
  useEffect(() => {
    dispatch(__getTodosDesc(params));
  }, [dispatch]);

  const [commentOpen, setCommentOpen] = useState(true);

  const todoComments = todoDesc.comments;
  return (
    <div>
      {todoComments
        ? todoComments.map((comment) => {
            return (
              <div key={comment.commentId}>
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
                      <ButtonComponent value="CommentInDelete" coLor="red" />
                    </ButtonWrap>
                  </ButtonWrapWrap>
                </CommentWrap>
                <RetouchCommentWrap isOpen={commentOpen}>
                  <p>{comment.nickname}</p>
                  <p>comment</p>
                  <RetouchInput />
                  <RetouchButtonWrapWrap>
                    <RetouchButtonWrap>
                      <ButtonComponent
                        getState={commentOpen}
                        setState={setCommentOpen}
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
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
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
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
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
