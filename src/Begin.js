const Begin = ({ buttonRemover }) => {
  return (
    <div className="Begin">
      <div className="beginLeft">
        <p>
          Answer this quiz to find out where you belong on a Pokémon moral
          alignment chart
        </p>
        <button onClick={buttonRemover}>Begin</button>
      </div>
      <div className="beginRight">
        <img src="/eevee.png" alt="eevee"></img>
      </div>
    </div>
  );
};

export default Begin;
