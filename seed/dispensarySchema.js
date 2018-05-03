const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nugsAPI').then(() => {
  const dispensary = new mongoose.Schema({
    id: {
      unique: true,
      type: Number,
    },
    name: String,
    location: Array,
  });
  const Dispensary = mongoose.model('Dispensary', dispensary);

  Dispensary.init().then(() => {
    mongoose.disconnect();
  });
});
