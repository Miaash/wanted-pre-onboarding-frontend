import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Todo = ({ text, isCompleted, id }) => {
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

  const EditCheckHandler = () => {
    setIsChecked(!false);
  };

  return (
    <MainWrapper>
      <TodoBox>
        <CheckboxBox>
          {isCompleted ? (
            <input
              type="checkbox"
              disabled={isEdit ? false : true}
              checked={isEdit ? false : true}
              onChange={EditCheckHandler}
            />
          ) : (
            <input
              type="checkbox"
              disabled={isEdit ? false : true}
              onChange={EditCheckHandler}
            />
          )}
        </CheckboxBox>
        {isEdit ? (
          <input
            type="text"
            placeholder="todo를 작성해주세요"
            onChange={EditTodoHandler}
          />
        ) : (
          <TextBox>{text}</TextBox>
        )}
        <ButtonBox>
          <button className="edit" onClick={updateTodoHandler}>
            수정
          </button>
          {isEdit ? (
            <button className="exit" onClick={exitUpdateHandler}>
              취소
            </button>
          ) : (
            <button className="remove" onClick={removeTodoHandler}>
              삭제
            </button>
          )}
        </ButtonBox>
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
  margin: 5px 0;
`;
const CheckboxBox = styled.div`
  margin: 0 5px;
`;
const TextBox = styled.div``;

const ButtonBox = styled.div`
  margin: 0 5px;
  button {
    width: 45px;
    height: 20px;
    font-size: 12px;
    font-weight: 600;
    background-color: #fff;
    border: 1px solid #b6b6b6;
    border-radius: 5px;
    margin-right: 3px;
    :hover {
      cursor: pointer;
      background-color: #2c5bf2;
      color: #fff;
    }
  }
  .exit {
    background-color: #d7d7d7;
    :hover {
      cursor: pointer;
      background-color: #929292;
      color: #000;
    }
  }
  .remove {
    background-color: #ffd2d2;
    :hover {
      cursor: pointer;
      background-color: #f98181;
      color: #fff;
    }
  }
`;
