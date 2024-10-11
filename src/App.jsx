//eslint-disabled- vite
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
  const [todos, setTodos] = useState(initialTodos);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "이지수",
    major: "정보통신공학과",
    email: "leeland21@naver.com ",
    github: "jisssu.github",
  });

  function handleAddTodo(title) {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: nextId++, title: title, done: false }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === nextTodo.id ? nextTodo : todo
      )
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <h2>안녕하세요, 프론트엔드 개발자{' '}
          {isEditing ? (
            <input
              value={profile.name}
              onChange={handleProfileChange}
            />
          ) : (
            <>{profile.name}입니다.</>
          )}
       </h2>
        <div className="box">
          <label>
            📎 전공 : {' '}
            {isEditing ? (
              <input
                type="text"
                name="major"
                value={profile.major}
                onChange={handleProfileChange}
              />
            ) : (
              profile.major
            )}
          </label>
          <label>
            📎 이메일 : {' '}
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
              />
            ) : (
              profile.email
            )}
          </label>
          <label>
            📎 깃허브 : {' '}
            {isEditing ? (
              <input
                type="text"
                name="github"
                value={profile.github}
                onChange={handleProfileChange}
              />
            ) : (
              profile.github
            )}
          </label>
        </div>
        <div className="profile-edit">
          <button type="button" onClick={handleEditProfile}>
            {isEditing ? '저장' : 'Edit Profile'}
          </button>
        </div>
      </form>
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
