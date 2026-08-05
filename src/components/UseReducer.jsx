import React, { useReducer } from "react";

function reducer(state, action) {

  // Q1. Quantity Selector
  if (action.type == "inc") {
    return {
      ...state,
      quantity: state.quantity + 1,
      message: "",
    };
  }

  else if (action.type == "dec") {
    if (state.quantity > 1) {
      return {
        ...state,
        quantity: state.quantity - 1,
        message: "",
      };
    }

    else {
      return {
        ...state,
        message: "Quantity cannot be below 1",
      };
    }
}

  // Q2. Traffic Light
  else if (action.type == "next") {

    let nextColor = "Red";

    if (state.color == "Red") {
      nextColor = "Yellow";
    }

    else if (state.color == "Yellow") {
      nextColor = "Green";
    }

    else if (state.color == "Green") {
      nextColor = "Red";
    }

    return {
      ...state,
      color: nextColor,
    };
  }

  // Q3. Shopping Cart Items
  else if (action.type == "input") {
    return {
      ...state,
      item: action.payload,
    };
  }

  else if (action.type == "add") {

    if (state.item == "") {
      return state;
    }

    return {
      ...state,
      cart: [...state.cart, state.item],
      item: "",
    };
  }

  // Q4. Like & Dislike Counter
  else if (action.type == "like") {
    return {
      ...state,
      likes: state.likes + 1,
    };
  }

  else if (action.type == "dislike") {
    return {
      ...state,
      dislikes: state.dislikes + 1,
    };
  }

  return state;
}

const data = {
  quantity: 1,
  message: "",

  color: "Red",

  item: "",
  cart: [],

  likes: 0,
  dislikes: 0,
};

const UseReducer = () => {

  const [state, dispatch] = useReducer(reducer, data);

  return (
    <div>

      {/* Q1 */}

      <div className="question">
        <h2>Q1. Quantity Selector</h2>

        <h3>{state.quantity}</h3>

        <button onClick={() => dispatch({ type: "inc" })}>+</button>

        <button onClick={() => dispatch({ type: "dec" })}>-</button>

        <p>{state.message}</p>
      </div>

      {/* Q2 */}

      <div className="question">
        <h2>Q2. Traffic Light</h2>

        <h3>{state.color}</h3>

        <button onClick={() => dispatch({ type: "next" })}>
          Next
        </button>
      </div>

      {/* Q3 */}

      <div className="question">
        <h2>Q3. Shopping Cart</h2>

        <input
          type="text"
          value={state.item}
          placeholder="Enter Item"
          onChange={(e) =>
            dispatch({
              type: "input",
              payload: e.target.value,
            })
          }
        />

        <button onClick={() => dispatch({ type: "add" })}>
          Add To Cart
        </button>

        <ul>
          {state.cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Q4 */}

      <div className="question">
        <h2>Q4. Like & Dislike Counter</h2>

        <h3>Likes : {state.likes}</h3>

        <h3>Dislikes : {state.dislikes}</h3>

        <button onClick={() => dispatch({ type: "like" })}>
          Like
        </button>

        <button onClick={() => dispatch({ type: "dislike" })}>
          Dislike
        </button>
      </div>

    </div>
  );
};

export default UseReducer;