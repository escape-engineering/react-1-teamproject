import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getTodosDesc } from "../../redux/modules/todolist";
import ButtonComponent from "../button/Button";

const Detailcomponent = () => {
  const params = useParams().id;
  const dispatch = useDispatch();
  const { Todo, todoDesc, isLoading, error } = useSelector(
    (state) => state.todolist
  );

  useEffect(() => {
    dispatch(__getTodosDesc(params));
  }, [dispatch]);
  return (
    <div>
      {/* 학준님 */}
      <Detailbox>
        <DetailHeader>
          <Pagenum>page num :{todoDesc.id}</Pagenum>
          <CommentNum>댓글: 20</CommentNum>
          <ButtonBox>
            <ButtonComponent value="BackPage" />
          </ButtonBox>
        </DetailHeader>

        <TextBox>
          <h1>제목: {todoDesc.title}</h1>
          <h1>내용:</h1>
          <h3>상태: working </h3>
        </TextBox>

        <ButtonBox2>
          <ButtonComponent value="EditInDetail" />
          <ButtonComponent value="DelInDetail" color="red" getState={params} />
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
