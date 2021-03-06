const fs = require('fs');

const file = fs.createWriteStream('./inventory/send.json');

const create = (i) => {
  const generateRandomCost = () => {
    const costs = ['50.00', '65.00', '35.00', '60.00'];
    const randomCost = costs[Math.floor(Math.random() * costs.length)];
    return randomCost;
  };
  const generateRandomBrand = () => {
    const brands = ['Island', 'ZenWeed', 'Fire Pack', 'Nugs4Dayz'];
    const randomBrand = brands[Math.floor(Math.random() * brands.length)];
    return randomBrand;
  };
  const generateRandomDeal = () => {
    const deals = ['20% off', '30% off', 'Free Prerolled', '2 for 1'];
    const trueOrFalse = [true, false, false, false, false, false, false];
    const dealYesOrNo = trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)];
    let randomDeal;
    if (dealYesOrNo) {
      randomDeal = {
        title: deals[Math.floor(Math.random() * deals.length)],
        description: '',
        deal: true,
      };
    } else {
      randomDeal = {
        title: '',
        description: '',
        deal: false,
      };
    }
    return randomDeal;
  };
  const generateRandomType = () => {
    const types = ['Indica', 'Sativa'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    return randomType;
  };
  const generateRandomPenType = () => {
    const types = ['Large', 'Small'];
    const randomPenType = types[Math.floor(Math.random() * types.length)];
    return randomPenType;
  };
  const generateRandomName = () => {
    const names = ['Super Silver', 'OG Kush', 'Blue Dream', 'Purple Haze'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    return randomName;
  };
  const generateRandomAmount = () => {
    const amounts = [90, 200, 60, 57];
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    return randomAmount;
  };
  const generateRandomPercentage = () => {
    const THCLevels = [90, 20, 60, 57];
    const randomTHCLevel = THCLevels[Math.floor(Math.random() * THCLevels.length)];
    return randomTHCLevel;
  };

  const generateSampleConsumptionProducts = () => {
    const consumeList = [];
    for (let piece = 0; piece < 10; piece += 1) {
      const isDeal = generateRandomDeal();
      consumeList.push({
        id: piece,
        name: generateRandomName(),
        brand: generateRandomBrand(),
        type: generateRandomType(),
        amount: generateRandomAmount(),
        indicaLevel: generateRandomAmount(),
        sativaLevel: generateRandomAmount(),
        cost: generateRandomCost(),
        thcLevel: generateRandomPercentage(),
        cbdLevel: generateRandomPercentage(),
        dealTitle: isDeal.title,
        dealDescription: isDeal.description,
        deal: isDeal.deal,
      });
    }
    return consumeList;
  };
  const generateSampleAccessoryProducts = () => {
    const accessoryList = [];
    for (let piece = 0; piece < 10; piece += 1) {
      accessoryList.push({
        id: piece,
        name: generateRandomName(),
        type: generateRandomPenType(),
        amount: generateRandomAmount(),
        cost: generateRandomCost(),
      });
    }
    return accessoryList;
  };
  const storage =
  {
    id: i,
    pens: generateSampleAccessoryProducts(),
    flowers: {
      indica: {
        eighth: generateSampleConsumptionProducts(),
        half: generateSampleConsumptionProducts(),
        ounce: generateSampleConsumptionProducts(),
      },
      sativa: {
        eighth: generateSampleConsumptionProducts(),
        half: generateSampleConsumptionProducts(),
        ounce: generateSampleConsumptionProducts(),
      },
      hybrid: {
        eighth: generateSampleConsumptionProducts(),
        half: generateSampleConsumptionProducts(),
        ounce: generateSampleConsumptionProducts(),
      },
    },
    cart: {
      indica: {
        whole: generateSampleConsumptionProducts(),
        half: generateSampleConsumptionProducts(),
      },
      sativa: {
        whole: generateSampleConsumptionProducts(),
        half: generateSampleConsumptionProducts(),
      },
      hybrid: {
        whole: generateSampleConsumptionProducts(),
        half: generateSampleConsumptionProducts(),
      },
    },
    edible: {
      indica: {
        chocolates: {
          '100': generateSampleConsumptionProducts(),
          '60': generateSampleConsumptionProducts(),
          '50': generateSampleConsumptionsProducts(),
        },
        liquids: {
          '100': generateSampleConsumptionProducts(),
          '60': generateSampleConsumptionProducts(),
          '50': generateSampleConsumptionProducts(),
        },
      },
      sativa: {
        chocolates: {
          '100': generateSampleConsumptionProducts(),
          '60': generateSampleConsumptionProducts(),
          '50': generateSampleConsumptionProducts(),
        },
        liquids: {
          '100': generateSampleConsumptionProducts(),
          '60': generateSampleConsumptionProducts(),
          '50': generateSampleConsumptionProducts(),
        },
      },
      hybrid: {
        chocolates: {
          '100': generateSampleConsumptionProducts(),
          '60': generateSampleConsumptionProducts(),
          '50': generateSampleConsumptionProducts(),
        },
        liquids: {
          '100': generateSampleConsumptionProducts(),
          '60': generateSampleConsumptionProducts(),
          '50': generateSampleConsumptionProducts(),
        },
      },
    },
    glassware: {
      bong: generateSampleAccessoryProducts(),
      bowl: generateSampleAccessoryProducts(),
      pipe: generateSampleAccessoryProducts(),
    },
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
