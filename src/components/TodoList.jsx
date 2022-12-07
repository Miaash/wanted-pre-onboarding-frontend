import { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";
import styled from "styled-components";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get("https://pre-onboarding-selection-task.shop/todos", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        if (err.response.data.statusCode === 401) {
          alert("잘못된 접근입니다.");
        }
      });
  }, []);

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const addNewTodoHandler = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    axios
      .post(
        "https://pre-onboarding-selection-task.shop/todos",
        {
          todo: newTodo,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        alert("Todo가 작성되었습니다");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.data.statusCode === 400) {
          alert(err.response.data.message);
        }
      });
  };

  return (
    <MainWrapper>
      <TodoListContainer>
        <h2>Todo-List</h2>
        <TodoListArea>
          {todos &&
            todos.map((el) => (
              <Todo
                text={el.todo}
                key={el.id}
                id={el.id}
                isCompleted={el.isCompleted}
              />
            ))}
        </TodoListArea>
        <FormArea onSubmit={addNewTodoHandler}>
          <TextArea
            type="text"
            placeholder="todo를 작성해주세요"
            onChange={newTodoHandler}
          />
          <Button>추가하기</Button>
        </FormArea>
      </TodoListContainer>
    </MainWrapper>
  );
};

export default TodoList;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #cfcfcf;
  border-radius: 30px;
  width: 700px;
  min-height: 500px;
`;

const TodoListArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  margin-top: 30px;
`;

const FormArea = styled.form`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 80px;
`;

const TextArea = styled.input`
  width: 200px;
  height: 20px;
  font-size: 15px;
  padding: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  font-size: 15px;
  font-weight: 600;
  background-color: #fff;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: #2c5bf2;
    color: #fff;
  }
`;
