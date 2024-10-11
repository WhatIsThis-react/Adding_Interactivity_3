import { useState } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import List from './List';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'CJ올리브영 지원서 제출하기', done: true },
  { id: 1, title: 'LG U+ 지원서 작성하기', done: false },
];

export default function App() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("고윤정");
  const [major, setMajor] = useState("창의소프트학부 디자인이노베이션");
  const [email, setEmail] = useState("jejukyj@naver.com");
  const [github, setGitHub] = useState("github.com/jejukyj")

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    const newTodos = todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  function handleDeleteTodo(todoId) {
    let newTodos = todos.filter(p => p.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        setIsEdit(!isEdit);
      }}>
        <h2>안녕하세요, 프론트엔드 개발자 {' '}
        {isEdit ? (
              <input
                value={name}
                onChange={e => {
                  setName(e.target.value)
                }}
                />
            ) : (
              <b>{name}</b>
            )}
            입니다.</h2>
        <div className="box">
          <label>
            📎 전공 : {' '}
            {isEdit ? (
              <input
                value={major}
                onChange={e => {
                  setMajor(e.target.value)
                }}
                />
            ) : (
              <b>{major}</b>
            )}
          </label>
          <label>
            📎 이메일 : {' '}
            {isEdit ? (
              <input
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                />
            ) : (
              <b>{email}</b>
            )}
          </label>
          <label>
            📎 깃허브 : {' '}
            {isEdit ? (
              <input
                value={github}
                onChange={e => {
                  setGitHub(e.target.value)
                }}
                />
            ) : (
              <b>{github}</b>
            )}
          </label>
        </div>
        <div className="profile-edit">
          <button type="submit">
            Edit Profile
          </button>
        </div>
      </form>
      <div className="todo">
        <h3>오늘의 할일</h3>
        <AddTodo
        onAddTodo={handleAddTodo}
        />
        <List
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
  </>
  );
}
