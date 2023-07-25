import { useEffect, useReducer } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action is Unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "Error" }));
  }, []);

  return (
    <div className="app">
      <Header title="The React Quiz" />

      <Main>
        <p>1/5</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
