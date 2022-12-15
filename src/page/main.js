import FormComponent from "../component/form/Form";
import styled from "styled-components";
import ButtonComponent from "../component/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { __getTodos } from "../redux/modules/todolist";
import "./style.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const { Todo, todoDesc, isLoading, error } = useSelector(
    (state) => state.todolist
  );

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {/* 재정 */}
      <FormComponent />

      {/* 진아님 */}
      {isLoading ? (
        <div className="under-title">now Loading...</div>
      ) : (
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
                      <ButtonComponent
                        value="DeleteTodo"
                        color="red"
                        getState={list.id}
                      />
                      <ButtonComponent value="DoneTodo" getState={list} />
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
                      <ButtonComponent
                        value="DeleteTodo"
                        color="red"
                        getState={list.id}
                      />
                      <ButtonComponent value="ShiftTodo" getState={list} />
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
      )}
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
