import styled from "styled-components";
import ButtonComponent from "../button/Button";

const Comment = () => {
  return (
    <CommentWrap>
      <p>nickname</p>
      <p>comment</p>
      <ButtonWrapWrap>
        <ButtonWrap>
          <ButtonComponent value="CommentToggle" />
          <ButtonComponent value="CommentDelete" />
        </ButtonWrap>
      </ButtonWrapWrap>
    </CommentWrap>
  );
};

const CommentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-bottom: 1px solid green;
  display: block;
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
