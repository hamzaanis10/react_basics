import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment_count":
      return { count: state.count + 1, showText: state.showText };
    case "setShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerPractice = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "Increment_count" });
          dispatch({ type: "setShowText" });
        }}
      >
        Increment
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerPractice;
