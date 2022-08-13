import stats from "./data/stats.json";
import imageHolder from "./data/imageholder.json";

const Results = () => {
  let vertical = stats[0].vertical.reduce((a, b) => a + b);
  let horizontal = stats[0].horizontal.reduce((a, b) => a + b);

  let verticalSwitch = () => {
    switch (vertical) {
      case 2 || 3 || 4:
        return `good`;
      case -1 || 0 || 1:
        return `neutral`;
      case -5 || -4 || -3 || -2:
        return `evil`;
      default:
        console.log(`vertical switch default`);
        break;
    }
  };

  let horizontalSwitch = () => {
    switch (horizontal) {
      case 2 || 3 || 4:
        return `lawful`;
      case -1 || 0 || 1:
        return `neutral`;
      case -5 || -4 || -3 || -2:
        return `chaotic`;
      default:
        console.log(`horizontal switch default`);
        break;
    }
  };

  let imageFinder = () => {
    for (let i = 0; i < imageHolder.length; i++) {
      if (
        imageHolder[i].vertical === verticalSwitch() &&
        imageHolder[i].horizontal === horizontalSwitch()
      ) {
        return imageHolder[i].image;
      }
    }
  };

  let altTextFinder = () => {
    for (let i = 0; i < imageHolder.length; i++) {
      if (
        imageHolder[i].vertical === verticalSwitch() &&
        imageHolder[i].horizontal === horizontalSwitch()
      ) {
        return imageHolder[i].alt;
      }
    }
  };

  let pokemonNameFinder = () => {
    for (let i = 0; i < imageHolder.length; i++) {
      if (
        imageHolder[i].vertical === verticalSwitch() &&
        imageHolder[i].horizontal === horizontalSwitch()
      ) {
        return imageHolder[i].alt;
      }
    }
  };

  return (
    <div className="Results">
      <p>Results</p>
      <img src={imageFinder()} alt={altTextFinder()} />
      <p>{pokemonNameFinder()}</p>
      <p>
        Vert: {vertical} Horz: {horizontal}
      </p>
      {/* <p>{verticalSwitch()}</p> */}
      {/* <p>{horizontalSwitch()}</p> */}
    </div>
  );
};

export default Results;
