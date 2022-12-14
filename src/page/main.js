import FormComponent from "../component/form/Form";
import styled from "styled-components";
import ButtonComponent from "../component/button/Button";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { __getTodos, __DoneTodos } from "../redux/modules/todolist";

const MainPage = () => {
  const dispatch = useDispatch();
  const { Todo, todoDesc, isloading, error } = useSelector(
    (state) => state.todolist
  );

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  //완료하기위한 usestate
  const [isdone, setisDone] = useState(false);

  return (
    <div>
      {/* 재정 */}
      <FormComponent />

      {/* 진아님 */}
      <div className="list-container">
        <div className="under-title">Working</div>
        <div className="list-wrapper">
          {Todo.map((list) =>
            list.isDone === false ? (
              <div className="todo-container" key={list.id}>
                <div className="todo-title">{list.title}</div>
                <div className="todo-body">{list.desc}</div>
                <div className="button-set">
                  <ButtonBox3>
                    <ButtonComponent value="DeleteTodo" getState={list.id} />
                    <ButtonComponent
                      value="DoneTodo"
                      getState={[isdone, list.id]}
                      setState={setisDone}
                    />

                    <ButtonComponent
                      value="DetailTodo"
                      getState={`/list/${list.id}`}
                    />
                  </ButtonBox3>
                </div>
              </div>
            ) : null
          )}
        </div>

        <div className="under-title">Done</div>
        <div className="list-wrapper">
          {Todo.map((list) =>
            list.isDone === true ? (
              <div className="todo-container" key={list.id}>
                <div className="todo-title">{list.title}</div>
                <div className="todo-body">{list.desc}</div>
                <div className="button-set">
                  <ButtonBox3>
                    <ButtonComponent value="DeleteTodo" getState={list.id} />
                    <ButtonComponent
                      value="CancelDoneTodo"
                      getState={list.id}
                    />
                    <ButtonComponent
                      value="DetailTodo"
                      getState={`/list/${list.id}`}
                    />
                  </ButtonBox3>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

const ButtonBox3 = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  gap: 5px;
  margin-left: 120px;
  margin-bottom: 5px;
`;
export default MainPage;
