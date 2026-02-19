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

const doSummerChores = (name) => {
  mowYard(name)
    .then((chore) => {
      console.log(chore);
      return weedEat(name);
    })
    .then((chore) => {
      console.log(chore);
      return trimHedges(name);
    })
    .then((chore) => {
      console.log(chore);
      return collectWood(name);
    })
    .then((chore) => {
      console.log(chore);
      return waterGarden(name);
    })
    .then((chore) => {
      console.log(chore);
      console.log(`${name} finished all of their chores!`);
    })
    .catch((error) => {
      console.error(error);
    });
};

doSummerChores("Felix");
