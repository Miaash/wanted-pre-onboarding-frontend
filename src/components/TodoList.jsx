import { useState, useEffect } from "react";
import axios from "axios";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // todo 조회
  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get("https://pre-onboarding-selection-task.shop/todos", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
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
    console.log(e.target.value);
  };

  // todo 생성
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
        console.log(res.data);
        alert("Todo가 작성되었습니다");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.data.statusCode === 400) {
          alert(err.response.data.message);
        }
        console.log(err);
      });
  };

  // todo 삭제

  return (
    <>
      <div>
        <div>
          {todos &&
            todos.map((el) => (
              <Todo
                text={el.todo}
                key={el.id}
                id={el.id}
                isComplete={el.isComplete}
              />
            ))}
        </div>
        <form onSubmit={addNewTodoHandler}>
          <input
            type="text"
            placeholder="todo를 작성해주세요"
            onChange={newTodoHandler}
          />
          <button>추가하기</button>
        </form>
      </div>
    </>
  );
};

export default TodoList;
