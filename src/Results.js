import stats from "./data/stats.json";
import pokemon from "./data/pokemon.json";

const Results = ({ closeResults, openBegin }) => {
  let vertical = stats[0].vertical.reduce((a, b) => a + b);
  let horizontal = stats[0].horizontal.reduce((a, b) => a + b);

  let verticalSwitch = () => {
    switch (vertical) {
      case 8:
      case 6:
      case 4:
        return `Good`;
      case 2:
      case 0:
      case -2:
        return `Neutral`;
      case -4:
      case -6:
      case -8:
        return `Evil`;
      default:
        console.log(`vertical default`);
        break;
    }
  };

  let horizontalSwitch = () => {
    switch (horizontal) {
      case 8:
      case 6:
      case 4:
        return `Lawful`;
      case 2:
      case 0:
      case -2:
        return `Neutral`;
      case -4:
      case -6:
      case -8:
        return `Chaotic`;
      default:
        console.log(`horizontal default`);
        break;
    }
  };

  let findPokemon = () => {
    for (let i = 0; i < pokemon.length; i++) {
      if (
        pokemon[i].vertical === verticalSwitch() &&
        pokemon[i].horizontal === horizontalSwitch()
      ) {
        stats[1].currentImage = pokemon[i].image;
        stats[1].currentPokemon = pokemon[i].pokemon;
        stats[1].currentVertical = pokemon[i].vertical;
        stats[1].currentHorizontal = pokemon[i].horizontal;
      }
    }
  };
  findPokemon();

  let handleTrueNeutral = () => {
    if (
      stats[1].currentVertical === `Neutral` &&
      stats[1].currentHorizontal === `Neutral`
    ) {
      return `True Neutral`;
    } else {
      return [stats[1].currentHorizontal, stats[1].currentVertical]
        .join()
        .replace(",", " ");
    }
  };

  let reset = () => {
    console.log(stats);
    stats[0].horizontal = [];
    stats[0].vertical = [];
    stats[1].currentImage = "";
    stats[1].currentPokemon = "";
    stats[1].currentVertical = "";
    stats[1].currentHorizontal = "";
    console.log(stats);
  };

  return (
    <div className="box margin2">
      <h2>{handleTrueNeutral()}</h2>
      <img src={stats[1].currentImage} alt={stats[1].currentPokemon} />
      <h2>{stats[1].currentPokemon}</h2>
      <button
        onClick={() => {
          reset();
          closeResults();
          openBegin();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Results;
