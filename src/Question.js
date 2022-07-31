import data from "./data/data.json";

const Question = () => {
  return (
    <div className="Question">
      <p>{data[0].question}</p>
      <div>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
};

export default Question;
