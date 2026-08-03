import { useState } from "react";
import "./App.css";

import StatesAndProps from "./components/States-and-Props";
import APIPractice from "./components/APIPractice";
import ReactRouterDOM from "./components/React-Router-DOM";
import DynamicRoutingContext from "./components/Dynamic-Routing_Context";

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

        <button onClick={() => setPage("router")}>
          React Router DOM
        </button>

        <button onClick={() => setPage("dynamic")}>
          Dynamic Routing & Context
        </button>
      </div>

      <hr />

      {page === "states" && <StatesAndProps />}
      {page === "api" && <APIPractice />}
      {page === "router" && <ReactRouterDOM />}
      {page === "dynamic" && <DynamicRoutingContext />}
    </div>
  );
}

export default App;