import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Todo = ({ text, isComplete, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // todo 삭제
  const removeTodoHandler = () => {
    let token = localStorage.getItem("token");
    axios
      .delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        alert("삭제되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.data.statusCode === 500) {
          alert(err.response.data.message);
        }
        console.log(err);
      });
  };

  // todo 수정
  const EditTodoHandler = (e) => {
    setEditedTodo(e.target.value);
  };

  const updateTodoHandler = () => {
    let token = localStorage.getItem("token");
    setIsEdit(true);
    axios
      .put(
        `https://pre-onboarding-selection-task.shop/todos/${id}`,
        {
          todo: editedTodo,
          isCompleted: isChecked,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("수정되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.data.statusCode === 500) {
          alert(err.response.data.message);
        }
        console.log(err);
      });
  };

  const exitUpdateHandler = () => {
    setIsEdit(false);
  };

  return (
    <MainWrapper>
      <TodoBox>
        {isComplete ? (
          <input type="checkbox" checked />
        ) : (
          <input type="checkbox" />
        )}
        {isEdit ? (
          <input
            type="text"
            placeholder="todo를 작성해주세요"
            onChange={EditTodoHandler}
          />
        ) : (
          <TextBox>{text}</TextBox>
        )}
        <button onClick={updateTodoHandler}>수정</button>
        {isEdit ? (
          <button onClick={exitUpdateHandler}>취소</button>
        ) : (
          <button onClick={removeTodoHandler}>삭제</button>
        )}
      </TodoBox>
    </MainWrapper>
  );
};

export default Todo;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TodoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div``;
