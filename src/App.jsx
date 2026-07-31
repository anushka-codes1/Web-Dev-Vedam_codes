import { useState } from "react";
import "./App.css";

import StatesAndProps from "./components/States-and-Props";
import APIPractice from "./components/APIPractice";
import ReactRouterDOM from "./components/React-Router-DOM";

function App() {
  const [page, setPage] = useState("states");

  return (
    <div className="App">
      <h1>React Class Assignments</h1>

      <div className="nav-buttons">
        <button onClick={() => setPage("states")}>
          State & Props
        </button>

        <button onClick={() => setPage("api")}>
          API Practice
        </button>

        <button onClick={() => setPage("router")}>
          React Router DOM
        </button>
      </div>

      <hr />

      {page === "states" && <StatesAndProps />}
      {page === "api" && <APIPractice />}
      {page === "router" && <ReactRouterDOM />}
    </div>
  );
}

export default App;