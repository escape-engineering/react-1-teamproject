import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getTodosDesc } from "../../redux/modules/todolist";
import ButtonComponent from "../button/Button";

const Detailcomponent = () => {
  const params = useParams().id;
  const dispatch = useDispatch();

  const { todoDesc, comments } = useSelector((state) => state.todolist);

  // input창 open state
  const [editOpen, setEditOpen] = useState(true);
  // 제목 수정 input state
  const [editTitle, setEditTitle] = useState(todoDesc.title);
  // 내용 수정 input state
  const [editDesc, setEditDesc] = useState(todoDesc.desc);

  const [todoLoad, setTodoLoad] = useState(false);

  // 제목수정 onchange
  const onchanegeTitle = (e) => {
    let value = e.target.value;
    setEditTitle(value);
  };
  const onchanegeDesc = (e) => {
    let value = e.target.value;
    setEditDesc(value);
  };
  useEffect(() => {
    dispatch(__getTodosDesc(params));
  }, [dispatch, todoLoad]);
  return (
    <div>
      <Detailbox>
        <DetailHeader>
          <Pagenum>page num :{todoDesc.id}</Pagenum>
          <CommentNum>
            댓글:
            {comments.filter((list) => list.postId === parseInt(params)).length}
          </CommentNum>
          <ButtonBox>
            <ButtonComponent value="BackPage" />
          </ButtonBox>
        </DetailHeader>

        <TextBox>
          <h1>제목: {todoDesc.title}</h1>
          <EditInput
            type="text"
            isOpen={editOpen}
            placeholder={todoDesc.title}
          />
          <h1>내용: {todoDesc.desc}</h1>
          <EditInput
            type="text"
            isOpen={editOpen}
            placeholder={todoDesc.desc}
          />
          <h3>상태: {todoDesc.isDone ? "완료!" : "하는중~"} </h3>
        </TextBox>
        <ButtonBox2>
          <ButtonComponent
            value="EditInDetailOpen"
            getState={[editOpen]}
            setState={[setEditOpen]}
          />
          <ButtonComponent
            value="DelInDetail"
            color="red"
            getState={[todoDesc.id]}
          />
        </ButtonBox2>
        <ButtonBox3>
          <ButtonComponent
            value={todoDesc.isDone ? "ShiftTodo" : "DoneTodo"}
            getState={[todoDesc, todoLoad]}
            setState={setTodoLoad}
          />
        </ButtonBox3>
        <ButtonBox4 isOpen={editOpen}>
          <ButtonComponent value={"EditComlete"} />
        </ButtonBox4>
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
  margin-right: 200px;
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
  bottom: 65px;
`;
const ButtonBox3 = styled.div`
  width: 75px;
  height: 40px;
  gap: 5px;
  position: relative;
  bottom: 110px;
  left: 200px;
  margin-bottom: -100px;
`;
const ButtonBox4 = styled.div`
  width: 150px;
  height: 40px;
  gap: 5px;
  position: relative;
  left: 640px;
  bottom: 120px;
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
`;
const TextBox = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
`;

const EditInput = styled.input`
  width: 500px;
  height: 60px;
  font-size: 40px;
  position: relative;
  bottom: 95px;
  left: 120px;
  margin-bottom: -97px;
  background-color: rgb(196, 228, 195);
  border: none;
  border-bottom: 1px solid #078841;
  outline: none;
  display: ${({ isOpen }) => (isOpen ? "none" : "block")};
`;

export default Detailcomponent;
