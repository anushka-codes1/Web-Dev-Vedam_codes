import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  memo,
} from "react";

// =======================
// Q1 - React.memo
// =======================

const ProfileCard = memo(({ title, city }) => {
  console.log("Profile Card Rendered");

  return (
    <div className="question">
      <h3>{title}</h3>
      <p>{city}</p>
    </div>
  );
});

// =======================
// Q3 - useCallback
// =======================

const Child = memo(({ handleClick }) => {
  console.log("Child Rendered");

  return (
    <button onClick={handleClick}>
      Child Button
    </button>
  );
});

const OptimisationLocalStorage = () => {
  // =======================
  // Q1. Profile Card with memo
  // =======================

  const [count, setCount] = useState(0);

  // =======================
  // Q2.  Filter an Expensive List
  // =======================

  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);

  const names = [
    "Anushka",
    "Rahul",
    "Aman",
    "Priya",
    "Riya",
    "John",
    "Sam",
  ];

  const filteredNames = useMemo(() => { //useMemo is for handling heavily loaded functions, while memo is used for preventing components from re-rendering
    console.log("Filtering Names");

    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // =======================
  // Q3. Keep the Same Function
  // =======================

  const [parentCount, setParentCount] = useState(0);

  const handleClick = useCallback(() => { //handleClick stops re-rendering on using useCallback
    console.log("Button Clicked");
  }, []);

  // =======================
  // Q4. Callback with a Dependency
  // =======================

  const [step, setStep] = useState(1);
  const [number, setNumber] = useState(0);

  const increase = useCallback(() => {
    setNumber((prev) => prev + step);
  }, [step]);

  // step is included in the dependency array because increase() uses step.

  // =======================
  // Q5. Remember the Input
  // =======================

  const [text, setText] = useState( // Initialize state with localStorage value
    localStorage.getItem("text") || ""
  );

  useEffect(() => { // Update localStorage whenever text changes
    localStorage.setItem("text", text);
  }, [text]);

  return (
    <div>

      {/* ================= Q1 ================= */}

      <div className="question">
        <h2>Q1. React.memo</h2>

        <ProfileCard
          title="Software Engineer"
          city="Bangalore"
        />

        <h3>{count}</h3>

        <button
          onClick={() => setCount(count + 1)}
        >
          Increase Counter
        </button>
      </div>

      {/* ================= Q2 ================= */}

      <div className="question">
        <h2>Q2. useMemo</h2>

        <input
          type="text"
          placeholder="Search Name"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <br />
        <br />

        <button
          onClick={() =>
            setCounter(counter + 1)
          }
        >
          Counter : {counter}
        </button>

        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>

      {/* ================= Q3 ================= */}

      <div className="question">
        <h2>Q3. useCallback</h2>

        <h3>{parentCount}</h3>

        <button
          onClick={() =>
            setParentCount(parentCount + 1)
          }
        >
          Increase Parent Count
        </button>

        <br />
        <br />

        <Child handleClick={handleClick} />
      </div>

      {/* ================= Q4 ================= */}

      <div className="question">
        <h2>Q4. useCallback Dependency</h2>

        <h3>Count : {number}</h3>

        <h3>Step : {step}</h3>

        <button
          onClick={() => setStep(step + 1)}
        >
          Increase Step
        </button>

        <button onClick={increase}>
          Increase Count
        </button>
      </div>

      {/* ================= Q5 ================= */}

      <div className="question">
        <h2>Q5. localStorage</h2>

        <input
          type="text"
          placeholder="Type Something"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
        />

        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default OptimisationLocalStorage;