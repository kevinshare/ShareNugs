const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nugsAPI').then(() => {
  const weedProduct = new mongoose.Schema({
    id: Number,
    name: String,
    brand: String,
    type: String,
    amount: Number,
    indicaLevel: Number,
    sativaLevel: Number,
    cost: String,
    thcLevel: String,
    cbdLevel: String,
    dealTitle: String,
    dealDescription: String,
    deal: Boolean,
  });
  const edibleProduct = new mongoose.Schema({
    chocolates: [weedProduct],
    liquids: [weedProduct],
    bars: [weedProduct],
    mints: [weedProduct],
  });
  const glassProduct = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    amount: Number,
    cost: String,
  });
  const penProduct = new mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    amount: Number,
    cost: String,
  });
  const weight = new mongoose.Schema({
    eighth: [weedProduct],
    half: [weedProduct],
    ounce: [weedProduct],
  });
  const size = new mongoose.Schema({
    whole: [weedProduct],
    half: [weedProduct],
  });
  const mg = new mongoose.Schema({
    '100': edibleProduct,
    '60': edibleProduct,
    '50': edibleProduct,
  });
  const weedType = new mongoose.Schema({
    sativa: weight,
    indica: weight,
    hybrid: weight,
  });
  const penType = new mongoose.Schema({
    sativa: size,
    indica: size,
    hybrid: size,
  });
  const edibleType = new mongoose.Schema({
    sativa: mg,
    indica: mg,
    hybrid: mg,
  });
  const glassType = new mongoose.Schema({
    bong: [glassProduct],
    bowl: [glassProduct],
    pipe: [glassProduct],
  });
  const inventory = new mongoose.Schema({
    id: {
      unique: true,
      type: Number,
    },
    pens: [penProduct],
    flowers: weedType,
    cart: penType,
    edible: edibleType,
    glassware: glassType,
  });

  const Nug = mongoose.model('Nug', inventory);

  Nug.init().then(() => {
    mongoose.disconnect();
  });
});
