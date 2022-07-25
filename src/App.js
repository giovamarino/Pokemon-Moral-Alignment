import { useState } from "react";
import Title from "./Title";
import Question from "./Question";
import Begin from "./Begin";

function App() {
  let [beginbutton, setBeginbutton] = useState(true);

  return (
    <div className="container">
      <header>
        <Title />
      </header>
      <main>
        {beginbutton && (
          <Begin
            buttonRemover={() => {
              setBeginbutton(false);
            }}
          />
        )}
        {!beginbutton && <Question />}
      </main>
    </div>
  );
}

export default App;
