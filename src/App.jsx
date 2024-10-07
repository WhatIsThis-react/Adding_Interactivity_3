import { useCallback, useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import List from "./List";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "CJ올리브영 지원서 제출하기", done: true },
  { id: 1, title: "LG U+ 지원서 작성하기", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id != todoId));
  }

  const [info, setInfo] = useState({
    name: "",
    major: "",
    email: "",
    github: "",
  });

  const onChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const [isEdit, setIsEdit] = useState(false);

  const handleClickBtn = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (
        <form>
          <h2>
            안녕하세요, 프론트엔드 개발자{" "}
            <input name="name" value={info.name} onChange={onChange} />
            입니다.
          </h2>
          <div className="box">
            <label>
              📎 전공 :{" "}
              <input name="major" value={info.major} onChange={onChange} />
            </label>
            <label>
              📎 이메일 :{" "}
              <input name="email" value={info.email} onChange={onChange} />
            </label>
            <label>
              📎 깃허브 :{" "}
              <input name="github" value={info.github} onChange={onChange} />
            </label>
          </div>
          <div className="profile-edit">
            <button type="submit" onClick={handleClickBtn}>
              Save
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2>안녕하세요, 프론트엔드 개발자 {info.name}입니다.</h2>
          <div className="box">
            <label>📎 전공 : {info.major}</label>
            <label>📎 이메일 : {info.email}</label>
            <label>📎 깃허브 : {info.github}</label>
          </div>
          <div className="profile-edit">
            <button type="submit" onClick={handleClickBtn}>
              Edit Profile
            </button>
          </div>{" "}
        </>
      )}
      <div className="todo">
        <h3>오늘의 할일</h3>
        <AddTodo onAddTodo={handleAddTodo} />
        <List
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </>
  );
}
