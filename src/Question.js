import data from "./data/data.json";
import { useState } from "react";

const Question = () => {
  let [i, setI] = useState(0);

  let nextQuestion = () => setI(i + 1);

  console.log(i);
  console.log(data.length);

  return (
    <div className="Question">
      <p>{data[i].question}</p>
      <div>
        <button
          onClick={() => {
            if (i < data.length - 1) {
              nextQuestion();
            } else {
            }
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            nextQuestion();
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Question;
