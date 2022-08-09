import stats from "./data/stats.json";

const Results = () => {
  console.log(stats[0].horizontal.reduce((a, b) => a + b));
  console.log(stats[0].vertical.reduce((a, b) => a + b));

  return (
    <div className="Results">
      <p>Results</p>
    </div>
  );
};

export default Results;
