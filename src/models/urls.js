const db = require('./db');

// Exports ADD Function
exports.add = (data, err, success) => {
  db.url.create(data).then(success).catch(err);
  console.log('URL was created from models');
};

// Exports ALL Function
exports.all = (err, success) => {
  db.url.findAll().then(success).catch(err);
  console.log('URLs were found from models');
};

// Exports ONE Function
exports.one = (data, err, success) => {
  db.url.find({
    where: {
      id: data.id,
    },
    // Find all relations defined in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
  console.log('One URL was found from models');
};

// Exports UPDATE Function
exports.update = (data, err, success) => {
  db.url.find({
    where: {
      id: data.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(data).then(success).catch(err);
  }).catch(err);
  console.log('URL was updated from models');
};

// Exports REMOVE Function
exports.remove = (data, err, success) => {
  db.url.destroy({
    where: {
      id: data.id,
    },
  }).then(success).catch(err);
  console.log('URL was removed from models');
};
