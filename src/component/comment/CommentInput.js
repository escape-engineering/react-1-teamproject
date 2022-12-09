import styled from 'styled-components';
import ButtonComponent from '../button/Button';

const CommentInputComponent = () => {
  return (
    <Wrap>
      <NickWrap>
        <h4>이름</h4>
        <NickInput />
      </NickWrap>
      <CommentWrap>
        <h4>코멘트</h4>
        <CommentInput />
      </CommentWrap>
      <ButtonWrapWrap>
        <ButtonWrap>
          <ButtonComponent value="CommentAdd" />
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
  background-color: blue;
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
