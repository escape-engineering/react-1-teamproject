import styled from "styled-components";
import ButtonComponent from "../component/button/Button";
const DetailPage = () => {
  return (
    <div>
      {/* 학준님 */}
      <Detailbox>
        <Pagenum>page num :1</Pagenum> <div>comment: 20</div>
        <ButtonComponent value="BackPage" />
        <h1>title: </h1>
        <h1>content:</h1>
        <h2>상태: working </h2>
        <button>수정하기</button>
        <button>삭제하기</button>
      </Detailbox>

      {/* 상국님 */}
      <div>todo_comment</div>
    </div>
  );
};
export default DetailPage;

const Detailbox = styled.div`
  width: 800px;
  max-width: 1200px;
  min-width: 800px;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid rgb(171, 246, 200);
  background-color: rgb(196, 228, 195);
  border-radius: 15px;
  color: black;
  font-size: 25px;
`;
const Pagenum = styled.span`
  font-size: 15px;
  margin-left: 10px;
`;
