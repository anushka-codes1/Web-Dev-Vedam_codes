import { useState } from "react";

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
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
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
      <button onClick={() => setCount((prev) => prev - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase
      </button>
    </div>
  );
}

function CounterSplit() {
  const [count, setCount] = useState(0);

  return (
    <div className="question">
      <h2>Q3. Counter Split into Two Components</h2>

      <Display count={count} />

      <Controls setCount={setCount} />
    </div>
  );
}

// =====================================================
// Q4. Todo Count Badge
// =====================================================
function Badge({ count }) {
  return <h3>Total Tasks: {count}</h3>;
}

function TodoCountBadge() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
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
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <Badge count={tasks.length} />

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
  return <h3>Likes: {likes}</h3>;
}

function LikeButton({ handleLike }) {
  return (
    <button onClick={handleLike}>
      Like 👍
    </button>
  );
}

function LikeApp() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="question">
      <h2>Q5. Like Button with Count Display</h2>

      <LikeCount likes={likes} />

      <LikeButton handleLike={handleLike} />
    </div>
  );
}

// =====================================================
// Exported Component
// =====================================================
function StatesAndProps() {
  return (
    <div>
      <h1>State & Props Assignment</h1>

      <p className="intro">
        React practice using functional components, useState, and props.
      </p>

      <CounterWithLimit />

      <StudentCards />

      <CounterSplit />

      <TodoCountBadge />

      <LikeApp />
    </div>
  );
}

export default StatesAndProps;