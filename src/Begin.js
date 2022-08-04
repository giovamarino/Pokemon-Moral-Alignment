const Begin = ({ showQuestion, closeBegin }) => {
  return (
    <div className="Begin">
      <p>
        Answer this quiz to find out where you belong on a Pokémon moral
        alignment chart
      </p>
      <button
        onClick={() => {
          showQuestion();
          closeBegin();
        }}
      >
        Begin
      </button>
    </div>
  );
};

export default Begin;
