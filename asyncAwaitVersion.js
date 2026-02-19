const mowYard = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${name} mowed the yard.`);
    }, 2000);
  });
};

const weedEat = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`${name} finished using the weed eater.`);
      } else {
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
};

const trimHedges = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.6) {
        resolve(`${name} finished trimming the hedges.`);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
};

const collectWood = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        resolve(`${name} finished collecting wood.`);
      } else {
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
};

const waterGarden = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        resolve(`${name} finished watering the garden.`);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
};

const doSummerChores = async (name) => {
  try {
    const freshLawn = await mowYard(name);
    console.log(freshLawn);

    const noWeeds = await weedEat(name);
    console.log(noWeeds);

    const evenHedges = await trimHedges(name);
    console.log(evenHedges);

    const woodPile = await collectWood(name);
    console.log(woodPile);

    const wateredGarden = await waterGarden(name);
    console.log(wateredGarden);
    console.log(`${name} finished all of their chores!`);
  } catch (error) {
    console.log(error);
  }
};

doSummerChores("Felix");
