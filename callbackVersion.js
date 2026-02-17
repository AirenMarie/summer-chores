let isChoreDone = false;
let allChoresDone = false;

const mowYard = (name, callback) => {
  setTimeout(() => {
    isChoreDone = true;
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
};

const weedEat = (name, callback) => {
  setTimeout(() => {
    if (isChoreDone === true) {
      console.log(`${name} finished using the weed eater.`);
      callback();
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
    }
  }, 1500);
};

const trimHedges = (name, callback) => {
  setTimeout(() => {
    if (isChoreDone === true) {
      console.log(`${name} finished trimming the hedges.`);
      callback();
    } else {
      console.log(`${name} fell asleep after weed eating the yard.`);
    }
  }, 1000);
};

const collectWood = (name, callback) => {
  setTimeout(() => {
    if (isChoreDone === true) {
      console.log(`${name} finished collecting wood.`);
      callback();
    } else {
      console.log(`${name} fell asleep after trimming the hedges.`);
    }
  }, 2500);
};

const waterGarden = (name, callback) => {
  setTimeout(() => {
    if (isChoreDone === true) {
      console.log(`${name} finished watering the garden.`);
      callback();
    } else {
      console.log(`${name} fell asleep after collecting wood.`);
    }
  }, 500);
};

const doSummerChores = (name) => {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            allChoresDone = true;
            console.log(`${name} finished all of their chores!`);
          });
        });
      });
    });
  });
};

doSummerChores("Felix");
