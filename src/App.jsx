import { useState } from "react";
import "./App.css";

import StatesAndProps from "./components/States-and-Props";
import APIPractice from "./components/APIPractice";

function App() {
  const [page, setPage] = useState("states");

  return (
    <div className="app">
      <h1>React Class Assignments</h1>

      <div className="nav-buttons">
        <button onClick={() => setPage("states")}>
          State & Props
        </button>

        <button onClick={() => setPage("api")}>
          API Practice
        </button>
      </div>

      <hr />

      {page === "states" && <StatesAndProps />}
      {page === "api" && <APIPractice />}
    </div>
  );
}

export default App;