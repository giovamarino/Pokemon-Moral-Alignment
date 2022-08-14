import stats from "./data/stats.json";
import pokemon from "./data/pokemon.json";

const Results = () => {
  let vertical = stats[0].vertical.reduce((a, b) => a + b);
  let horizontal = stats[0].horizontal.reduce((a, b) => a + b);

  let verticalSwitch = () => {
    switch (vertical) {
      case 5:
      case 4:
      case 3:
      case 2:
        return `Good`;
      case 1:
      case 0:
      case -1:
        return `Neutral`;
      case -2:
      case -3:
      case -4:
      case -5:
        return `Evil`;
      default:
        console.log(`vertical default`);
        break;
    }
  };

  let horizontalSwitch = () => {
    switch (horizontal) {
      case 5:
      case 4:
      case 3:
      case 2:
        return `Lawful`;
      case 1:
      case 0:
      case -1:
        return `Neutral`;
      case -2:
      case -3:
      case -4:
      case -5:
        return `chaotic`;
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

        console.log(stats[1].currentVertical, pokemon[i].vertical);
        console.log(stats[1].currentHorizontal, pokemon[i].horizontal);
      }
    }
  };
  findPokemon();

  // let handleTrueNeutral = () => {
  //   if (
  //     stats[1].currentVertical === `Neutral` &&
  //     stats[1].currentHorizontal === `Neutral`
  //   ) {
  //     return `True Neutral`;
  //   }
  // };

  // console.log(handleTrueNeutral());

  return (
    <div className="box margin2">
      <h2>Results</h2>
      <p>
        {stats[1].currentHorizontal} {stats[1].currentVertical}
      </p>
      <img src={stats[1].currentImage} alt={stats[1].currentPokemon} />
      <p>{stats[1].currentPokemon}</p>
      <p>
        Vert: {vertical} Horz: {horizontal}
      </p>
    </div>
  );
};

export default Results;
