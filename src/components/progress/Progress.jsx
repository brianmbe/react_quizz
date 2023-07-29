import React from "react";

export default function Progress({
  index,
  numQuestion,
  points,
  maximumPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + (+answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>
          {points} / {maximumPoints}
        </strong>
      </p>
    </header>
  );
}
