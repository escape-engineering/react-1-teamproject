import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getTodosDesc } from "../../redux/modules/todolist";
import ButtonComponent from "../button/Button";

const Detailcomponent = () => {
  const params = useParams().id;
  const dispatch = useDispatch();

  const { todoDesc, comments, isLoading } = useSelector(
    (state) => state.todolist
  );

  // input창 open state
  const [editOpen, setEditOpen] = useState(true);
  // 제목 수정 input state
  const [editTitle, setEditTitle] = useState("");
  // 내용 수정 input state
  const [editDesc, setEditDesc] = useState("");

  // 제목수정 onchange
  const onchanegeTitle = (e) => {
    setEditTitle(e.target.value);
  };
  // 내용수정 onchange
  const onchanegeDesc = (e) => {
    setEditDesc(e.target.value);
  };
  useEffect(() => {
    dispatch(__getTodosDesc(params));
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <div>now Loading...</div>
      ) : (
        <Detailbox>
          <DetailHeader>
            <Pagenum>page num :{todoDesc.id}</Pagenum>
            <CommentNum>
              댓글:
              {
                comments.filter((list) => list.postId === parseInt(params))
                  .length
              }
            </CommentNum>
            <ButtonBox>
              <ButtonComponent value="BackPage" />
            </ButtonBox>
          </DetailHeader>

          <TextBox>
            <h1>제목: {editOpen ? todoDesc.title : null}</h1>
            <EditInput
              type="text"
              isOpen={editOpen}
              value={editTitle}
              onChange={onchanegeTitle}
            />
            <h1>내용: {editOpen ? todoDesc.desc : null}</h1>
            <EditInput
              type="text"
              isOpen={editOpen}
              value={editDesc}
              onChange={onchanegeDesc}
            />
            <h3>상태: {todoDesc.isDone ? "완료!" : "하는중~"} </h3>
          </TextBox>
          <ButtonBox2>
            <ButtonComponent
              value="EditInDetailOpen"
              getState={[editOpen, todoDesc.title, todoDesc.desc]}
              setState={[setEditOpen, setEditTitle, setEditDesc]}
            />
            <ButtonComponent
              value="DelInDetail"
              color="red"
              getState={[todoDesc.id]}
            />
          </ButtonBox2>
          <ButtonBox3></ButtonBox3>
          <ButtonBox4 isOpen={editOpen}>
            <ButtonComponent
              value={"EditComlete"}
              getState={[editTitle, editDesc, todoDesc, editOpen]}
              setState={setEditOpen}
            />
          </ButtonBox4>
        </Detailbox>
      )}
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
