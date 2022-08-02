import data from "./data/data.json";
import { useState } from "react";

const Question = () => {
  let i = 0;
  let [question, setQuestion] = useState(data[i].question);

  let increment = () => {
    i++;
  };

  return (
    <div className="Question">
      <p>{question}</p>
      <div>
        <button
          onClick={() => {
            increment();
            // console.log(i, data[i].question);
            setQuestion(data[i].question);
          }}
        >
          Yes
        </button>
        <button onClick={() => {}}>No</button>
      </div>
    </div>
  );
};

export default Question;
