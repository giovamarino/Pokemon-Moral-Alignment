import { useState } from "react";
import data from "./data/questions.json";
import stats from "./data/stats.json";

const Question = ({ showResults, closeQuestion }) => {
  let [i, setI] = useState(0);
  // console.log(i);

  // increment i
  let incrementI = () => setI(i + 1);

  // decide to show question or results
  let showQuestionOrResults = () => {
    // if there are more questions
    if (i < data.length) {
      incrementI();
      if (data[i].good === 0) {
        data[i].good = 1;
        console.log(data[i]);
      }
      if (data[i].evil === 0) {
        data[i].evil = 1;
        console.log(data[i]);
      }
      if (data[i].lawful === 0) {
        data[i].lawful = 1;
        console.log(data[i]);
      }
      if (data[i].chaotic === 0) {
        data[i].chaotic = 1;
        console.log(data[i]);
      }
    }
    // if no questions
    else {
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
