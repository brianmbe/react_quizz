import React from "react";

export default function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>
        Welcome to the{" "}
        <span>
          <strong
            style={{
              color: "orangered",
              border: "1px solid yellow",
              padding: "0 5px",
            }}
          >
            REACT QUIZZ
          </strong>
        </span>
      </h2>
      <h3>
        We have <span style={{ color: "orangered" }}>{numQuestions}</span>{" "}
        questions to test your REACT knowledge.
      </h3>
      <button className="btn btn-ui">Let's Start!</button>
    </div>
  );
}
