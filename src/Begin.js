const Begin = ({ buttonRemover }) => {
  return (
    <div className="Begin">
      <p>
        Answer this quiz to find out where you belong on a Pokémon moral
        alignment chart
      </p>
      <button onClick={buttonRemover}>Begin</button>
    </div>
  );
};

export default Begin;
