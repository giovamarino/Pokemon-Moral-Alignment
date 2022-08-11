import { useState } from "react";
import data from "./data/questions.json";
import stats from "./data/stats.json";

const Question = ({ showResults, closeQuestion }) => {
  let [i, setI] = useState(0);

  // increment i
  let incrementI = () => setI(i + 1);

  // decide to show question or results
  let showQuestionOrResults = (posOrNeg) => {
    // if there are more questions
    if (i < data.length - 1) {
      incrementI();
      if (data[i].vertical === 0 && data[i].reverse) {
        stats[0].vertical.push(posOrNeg * -1);
        console.log(stats);
      } else if (data[i].vertical === 0) {
        stats[0].vertical.push(posOrNeg);
        console.log(stats);
      }
      if (data[i].horizontal === 0 && data[i].reverse) {
        stats[0].horizontal.push(posOrNeg * -1);
        console.log(stats);
      } else if (data[i].horizontal === 0) {
        stats[0].horizontal.push(posOrNeg);
        console.log(stats);
      }
    }
    // if no questions
    if (i === data.length - 1 && data[i].vertical === 0) {
      stats[0].vertical.push(posOrNeg);
      console.log(stats);
      closeQuestion();
      showResults();
    }
  };

  return (
    <div className="Question">
      <p>{data[i].question}</p>
      <div>
        <button
          onClick={() => {
            showQuestionOrResults(1);
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            showQuestionOrResults(-1);
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Question;
