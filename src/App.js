import { useState } from "react";
import Title from "./Title";
import Question from "./Question";
import Begin from "./Begin";
import Results from "./Results";

function App() {
  let [begin, setBegin] = useState(true);
  let [question, setQuestion] = useState(false);
  let [results, setResults] = useState(false);

  return (
    <div className="container">
      <header>
        <Title />
      </header>
      <main>
        {begin && (
          <Begin
            closeBegin={() => {
              setBegin(false);
            }}
            showQuestion={() => {
              setQuestion(true);
            }}
          />
        )}

        {question && (
          <Question
            closeQuestion={() => {
              setQuestion(false);
            }}
            showResults={() => {
              setResults(true);
            }}
          />
        )}

        {results && (
          <Results
            closeResults={() => {
              setResults(false);
            }}
            openBegin={() => {
              setBegin(true);
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
