import { useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

export default function App() {
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error"));
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
