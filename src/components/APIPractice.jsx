import { useEffect, useState } from "react";

// =====================================================
// Q1. Show Completed Todos Only
// =====================================================
function CompletedTodos({ todos }) {
  const completed = todos.filter((todo) => todo.completed);

  return (
    <div className="question">
      <h2>Q1. Show Completed Todos Only</h2>

      {completed.map((todo) => (
        <p key={todo.id}>
          {todo.id}. {todo.title}
        </p>
      ))}
    </div>
  );
}

// =====================================================
// Q2. Show First 10 Todos
// =====================================================
function FirstTenTodos({ todos }) {
  return (
    <div className="question">
      <h2>Q2. Show First 10 Todos</h2>

      {todos.slice(0, 10).map((todo) => (
        <p key={todo.id}>
          {todo.id}. {todo.title}
        </p>
      ))}
    </div>
  );
}

// =====================================================
// Q3. Filter Todos by User ID
// =====================================================
function FilterByUser({ todos }) {
  const [userId, setUserId] = useState(1);

  const filtered = todos.filter((todo) => todo.userId === userId);

  return (
    <div className="question">
      <h2>Q3. Filter Todos by User ID</h2>

      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>

      {filtered.map((todo) => (
        <p key={todo.id}>
          {todo.id}. {todo.title}
        </p>
      ))}
    </div>
  );
}

// =====================================================
// Q4. Delete Todo
// =====================================================
function DeleteTodo({ todos }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(todos);
  }, [todos]);

  const deleteTodo = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  return (
    <div className="question">
      <h2>Q4. Delete Todo</h2>

      {list.slice(0, 10).map((todo) => (
        <div key={todo.id}>
          {todo.id}. {todo.title}

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

// =====================================================
// Q5. Search + Delete Together
// =====================================================
function SearchDelete({ todos }) {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setList(todos);
  }, [todos]);

  const deleteTodo = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  const filtered = list.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="question">
      <h2>Q5. Search + Delete Together</h2>

      <input
        type="text"
        placeholder="Search Todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((todo) => (
        <div key={todo.id}>
          {todo.id}. {todo.title}

          <button onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

// =====================================================
// Main Component
// =====================================================
function APIPractice() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>API Practice Assignment</h1>

      <CompletedTodos todos={todos} />

      <FirstTenTodos todos={todos} />

      <FilterByUser todos={todos} />

      <DeleteTodo todos={todos} />

      <SearchDelete todos={todos} />
    </div>
  );
}

export default APIPractice;