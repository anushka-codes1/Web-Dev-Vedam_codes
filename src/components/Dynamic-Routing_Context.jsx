import React, { createContext, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";

// ================= Q1,Q2,Q3 =================

const students = [
  { id: 1, name: "Anushka", marks: 90 },
  { id: 2, name: "Manya", marks: 84 },
  { id: 3, name: "Aaryaa", marks: 96 },
  { id: 4, name: "Aman", marks: 78 },
];

function StudentList() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <p
          key={student.id}
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => navigate(`/student/${student.id}`)}
        >
          {student.name}
        </p>
      ))}
    </div>
  );
}

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id == id);

  if (!student) {
    return <h3>Product not found</h3>;
  }

  return (
    <div>
      <h2>Student Details</h2>

      <p>Name : {student.name}</p>
      <p>Marks : {student.marks}</p>

      <button onClick={() => navigate("/")}>
        Back to List
      </button>
    </div>
  );
}

// ================= Q4 =================

function Child(props) {
  return <h3>{props.message}</h3>;
}

function Middle(props) {
  return <Child message={props.message} />;
}

function PropsDrilling() {
  const message = "Welcome to React";

  return (
    <div>
      <h2>Props Drilling</h2>
      <Middle message={message} />
    </div>
  );
}

// ================= Q5,Q6 =================

const MyContext = createContext();

function ChildContext() {
  const data = useContext(MyContext);

  return (
    <>
      <h3>{data.message}</h3>
      <h3>Current Theme: {data.theme}</h3>
    </>
  );
}

function MiddleContext() {
  return <ChildContext />;
}

function ContextExample() {
  return (
    <MyContext.Provider
      value={{
        message: "Welcome to React",
        theme: "dark",
      }}
    >
      <h2>Context API</h2>
      <MiddleContext />
    </MyContext.Provider>
  );
}

// ================= Main =================

export default function DynamicRoutingContext() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/student/:id" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>

      <hr />

      <PropsDrilling />

      <hr />

      <ContextExample />
    </div>
  );
}