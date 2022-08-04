import data from "./data/data.json";
import { useState } from "react";

const Question = ({ showResults, closeQuestion }) => {
  let [i, setI] = useState(0);

  let nextQuestion = () => setI(i + 1);
  let showQuestionOrResults = () => {
    if (i < data.length - 1) {
      nextQuestion();
    } else {
      showResults();
      closeQuestion();
    }
  };

  return (
    <div className="Question">
      <p>{data[i].question}</p>
      <div>
        <button onClick={showQuestionOrResults}>Yes</button>
        <button onClick={showQuestionOrResults}>No</button>
      </div>
    </div>
  );
};

export default Question;
