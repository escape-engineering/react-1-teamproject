import styled from "styled-components";
import ButtonComponent from "../button/Button";
import { useState } from "react";
import { useSelector } from "react-redux";

const Comment = () => {
  const [commentOpen, setCommentOpen] = useState(true);
  const comments = useSelector((state) => state.todolist.Comment);
  console.log(comments);
  return (
    <div>
      {comments.map((comment) => {
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
      })}
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
