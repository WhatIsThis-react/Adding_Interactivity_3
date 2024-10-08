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
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('고윤정');
  const [major, setMajor] = useState('창의소프트학부 디자인이노베이션');
  const [email, setEmail] = useState('jejukyj@naver.com');
  const [github, setGithub] = useState('github.com/jejukyj');

  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }


  return (
    <>
      <form onSubmit={e => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}>
        <h2>
        안녕하세요, 프론트엔드 개발자{' '}
          {isEditing ? (
            <input
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
            />
          ) : (
            <>{name}입니다.</>
          )}
        </h2>
        <div className="box">
          <label>
            📎 전공 : {' '}
            {isEditing ? (
              <input
                value={major}
                onChange={e => {
                  setMajor(e.target.value)
                }}
              />
            ) : (
              <>{major}</>
            )}
          </label>
          <label>
            📎 이메일 : {' '}
            {isEditing ? (
              <input
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
            ) : (
              <>{email}</>
            )}
          </label>
          <label>
            📎 깃허브 : {' '}
            {isEditing ? (
              <input
                value={github}
                onChange={e => {
                  setGithub(e.target.value)
                }}
              />
            ) : (
              <>{github}</>
            )}
          </label>
        </div>
        <div className="profile-edit">
          <button type="submit">
            {isEditing ? 'Save' : 'Edit'} Profile
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
