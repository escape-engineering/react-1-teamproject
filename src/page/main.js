import FormComponent from "../component/form/Form";
import styled from "styled-components";
import ButtonComponent from "../component/button/Button";
import "./style.css";

const MainPage = () => {
  return (
    <div>
      {/* 재정 */}
      <FormComponent />

      {/* 진아님 */}
      <div>todoList</div>
      <div className="list-container">
        <div className="under-title">Working</div>
        <div className="todo-container">
          <div className="todo-title">이곳은 제목입니다</div>
          <div className="todo-body">이곳은 내용입니다</div>
          <div className="button-set">
            <ButtonBox3>
              <ButtonComponent value="DeleteTodo" />
              <ButtonComponent value="DoneTodo" />
              <ButtonComponent value="DetailTodo" />
            </ButtonBox3>
          </div>
        </div>
        <div className="under-title">Done</div>
        <div className="list-wrapper">
          <div className="todo-container">
            <div className="todo-title">이곳은 제목입니다</div>
            <div className="todo-body">이곳은 내용입니다</div>
            <div className="button-set">
              <ButtonBox3>
                <ButtonComponent value="DeleteTodo" />
                <ButtonComponent value="ShiftTodo" />
                <ButtonComponent value="DetailTodo" />
              </ButtonBox3>
            </div>
          </div>
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
