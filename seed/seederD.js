const fs = require('fs');

const file = fs.createWriteStream('./dispensary/send.json');

const create = (i) => {
  const randomName = () => {
    const possibleNames = ['Urban Pharm', 'KushKo', 'DankStore', 'DatFire'];
    const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
    return name;
  };
  const randomLocation = () => {
    const possibleLocations = [[-81, 40], [67, -89], [98, 56]];
    const randomPoints = possibleLocations[Math.floor(Math.random() * possibleLocations.length)];
    return randomPoints;
  };
  const storage =
  {
    id: i,
    name: randomName(),
    location: randomLocation(),
  };
  return storage;
};
const seedMongoDatabase = (creationFunction, creationLimit, i) => {
  let space = true;
  while (i < creationLimit && space) {
    const restaurant = creationFunction(i);
    space = file.write(JSON.stringify(restaurant));
    i += 1;
  }
  if (i < creationLimit) {
    file.once('drain', () => {
      seedMongoDatabase(create, creationLimit, i);
    });
  }
};
seedMongoDatabase(create, 1000, 0);
