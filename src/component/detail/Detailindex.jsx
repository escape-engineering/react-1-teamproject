import styled from "styled-components";
import ButtonComponent from "../button/Button";

const Detailcomponent = () => {
  return (
    <div>
      {/* 학준님 */}
      <Detailbox>
        <DetailHeader>
          <Pagenum>page num :1</Pagenum> <CommentNum>댓글: 20</CommentNum>
          <ButtonBox>
            <ButtonComponent value="BackPage" />
          </ButtonBox>
        </DetailHeader>

        <TextBox>
          <h1>제목: </h1>
          <h1>내용:</h1>
          <h3>상태: working </h3>
        </TextBox>

        <ButtonBox2>
          <ButtonComponent value="EditDetail" />
          <ButtonComponent value="DelInDetail" />
        </ButtonBox2>
      </Detailbox>
    </div>
  );
};
const Detailbox = styled.div`
  width: 800px;
  max-width: 1200px;
  min-width: 800px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid rgb(171, 246, 200);
  background-color: rgb(196, 228, 195);
  border-radius: 15px;
  color: black;
  font-size: 25px;
`;
const DetailHeader = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: 10px;
  justify-content: space-between;
`;
const Pagenum = styled.span`
  margin-left: 15px;
`;
const CommentNum = styled.span`
  margin-right: 300px;
`;
const ButtonBox = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  gap: 5px;
  margin-right: 10px;
`;
const ButtonBox2 = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  gap: 5px;
  margin-left: 640px;
  margin-bottom: 5px;
  position: relative;
  bottom: 70px;
`;
const TextBox = styled.div`
  margin-left: 10px;
`;

export default Detailcomponent;
