import Title from "./Title";
import Question from "./Question";
import Begin from "./Begin";

function App() {
  return (
    // <body>
    <div className="container">
      <header>
        <Title />
      </header>
      <main>
        <Begin />
        <Question />
      </main>
    </div>
    // </body>
  );
}

export default App;
