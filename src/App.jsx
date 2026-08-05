import { useState } from "react";
import "./App.css";

import StatesAndProps from "./components/States-and-Props";
import APIPractice from "./components/APIPractice";
import ReactRouterDOM from "./components/React-Router-DOM";
import DynamicRoutingContext from "./components/Dynamic-Routing_Context";
import UseReducer from "./components/UseReducer";

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

        <button onClick={() => setPage("reducer")}>
          useReducer
        </button>
      </div>

      <hr />

      {page === "states" && <StatesAndProps />}
      {page === "api" && <APIPractice />}
      {page === "router" && <ReactRouterDOM />}
      {page === "dynamic" && <DynamicRoutingContext />}
      {page === "reducer" && <UseReducer />}
    </div>
  );
}

export default App;