import { useState } from "react";
import "./App.css";

// =====================================================
// Q1. Counter with Limit
// =====================================================
function CounterWithLimit() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Maximum limit reached! Count cannot go above 10.");
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Minimum limit reached! Count cannot go below 0.");
    }
  };

  return (
    <div className="question">
      <h2>Q1. Counter with Limit</h2>

      <h3>Count: {count}</h3>

      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>

      <button onClick={increase} disabled={count === 10}>
        Increase
      </button>

      <p>Minimum: 0 | Maximum: 10</p>
    </div>
  );
}


// =====================================================
// Q2. Reusable Student Card
// =====================================================
function StudentCard({ name, rollNo, course }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>
        <strong>Roll No:</strong> {rollNo}
      </p>
      <p>
        <strong>Course:</strong> {course}
      </p>
    </div>
  );
}

function StudentCards() {
  return (
    <div className="question">
      <h2>Q2. Reusable Student Card</h2>

      <div className="cards-container">
        <StudentCard
          name="Anushka Mukherjee"
          rollNo="101"
          course="React Development"
        />

        <StudentCard
          name="Aaryaa Newaskar"
          rollNo="102"
          course="JavaScript"
        />

        <StudentCard
          name="Manya Agrawal"
          rollNo="103"
          course="Web Development"
        />
      </div>
    </div>
  );
}


// =====================================================
// Q3. Counter Split into Two Components
// =====================================================
function Display({ count }) {
  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  );
}

function Controls({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
    </div>
  );
}

function CounterSplit() {
  // The parent owns the state
  const [count, setCount] = useState(0);

  return (
    <div className="question">
      <h2>Q3. Counter Split into Two Components</h2>

      {/* count is passed to Display as a prop */}
      <Display count={count} />

      {/* setCount is passed to Controls as a prop */}
      <Controls setCount={setCount} />
    </div>
  );
}


// =====================================================
// Q4. Todo Count Badge
// =====================================================
function Badge({ count }) {
  return (
    <div className="badge">
      Total: {count}
    </div>
  );
}

function TodoCountBadge() {
  const [tasks, setTasks] = useState(["Task1", "Task2"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <div className="question">
      <h2>Q4. Todo Count Badge</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      {/* tasks.length is passed to Badge as a prop */}
      <Badge count={tasks.length} />

      <h3>Task List</h3>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}


// =====================================================
// Q5. Like Button with Count Display
// =====================================================
function LikeCount({ likes }) {
  return (
    <h3>
      Likes: {likes}
    </h3>
  );
}

function LikeButton({ handleLike }) {
  return (
    <button onClick={handleLike}>
      Like 👍
    </button>
  );
}

function LikeApp() {
  // The parent owns the likes state
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="question">
      <h2>Q5. Like Button with Count Display</h2>

      {/* likes is passed to LikeCount */}
      <LikeCount likes={likes} />

      {/* handleLike function is passed to LikeButton */}
      <LikeButton handleLike={handleLike} />
    </div>
  );
}


// =====================================================
// Main App
// =====================================================
function App() {
  return (
    <div className="app">
      <h1>Coding Practice — State & Props</h1>

      <p className="intro">
        React practice using functional components, useState, and props.
      </p>

      {/* Q1 */}
      <CounterWithLimit />

      {/* Q2 */}
      <StudentCards />

      {/* Q3 */}
      <CounterSplit />

      {/* Q4 */}
      <TodoCountBadge />

      {/* Q5 */}
      <LikeApp />
    </div>
  );
}

export default App;
