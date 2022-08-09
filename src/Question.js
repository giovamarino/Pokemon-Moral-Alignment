import { useState } from "react";
import data from "./data/questions.json";
import stats from "./data/stats.json";

const Question = ({ showResults, closeQuestion }) => {
  let [i, setI] = useState(0);

  // increment i
  let incrementI = () => setI(i + 1);

  // decide to show question or results
  let showQuestionOrResults = () => {
    // if there are more questions
    if (i < data.length - 1) {
      incrementI();
      if (data[i].vertical === 0) {
        stats[0].vertical.push(i);
        console.log(stats);
      }
      if (data[i].horizontal === 0) {
        stats[0].horizontal.push(i);
        console.log(stats);
      }
    } else if (i === data.length - 1 && data[i].horizontal === 0) {
      stats[0].horizontal.push(i);
      console.log(stats);
      closeQuestion();
      showResults();
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
