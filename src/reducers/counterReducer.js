import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      let newarr = state.count - 1;
      if (newarr <= 0) return { count: 0 };
      else return { count: newarr };
  }
}

function CouterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <span id="counter"> {state.count} </span>
      <button id="increment-btn" onClick={increment}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </>
  );
}
export default CouterReducer;
