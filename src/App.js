import Title from "./Title";
import Question from "./Question";
import Begin from "./Begin";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <header>
            <Title />
          </header>
          <main>
            <Begin />
            <Question />
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
