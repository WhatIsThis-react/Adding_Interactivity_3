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

  function handleAddTodo(title) {
    todos.push({
      id: nextId++,
      title: title,
      done: false
    });
  }

  function handleChangeTodo(nextTodo) {
    const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    todo.title = nextTodo.title;
    todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    const index = todos.findIndex(t =>
      t.id === todoId
    );
    todos.splice(index, 1);
  }


  return (
    <>
      <form>
        <h2>안녕하세요, 프론트엔드 개발자 고윤정<input/>입니다.</h2>
        <div className="box">
          <label>
            📎 전공 : {' '}
            창의소프트학부 디자인이노베이션
            <input/>
          </label>
          <label>
            📎 이메일 : {' '}
            jejukyj@naver.com
            <input/>
          </label>
          <label>
            📎 깃허브 : {' '}
            github.com/jejukyj
            <input/>
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
