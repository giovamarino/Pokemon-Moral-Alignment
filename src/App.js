import Title from "./Title";
import Question from "./Question";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <header>
            <Title />
          </header>
          <main>
            <Question />
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
