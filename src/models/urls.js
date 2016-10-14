const utool2 = require('uTool2');
const db = require('./db');

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports ADD Function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.add = (data, err, success) => {
  db.url.create(data).then(success).catch(err);
  utool2.debug('URL was ' + 'CREATED '.create + 'in Models - ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports ALL Function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.all = (err, success) => {
  db.url.findAll().then(success).catch(err);
  utool2.debug('URLs found in models ');
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports ONE Function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
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
  utool2.debug('One URL was ' + 'SEARCHED '.read + 'in Models - ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports UPDATE Function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.update = (data, err, success) => {
  db.url.find({
    where: {
      id: data.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(data).then(success).catch(err);
  }).catch(err);
  utool2.debug('URL was ' + 'UPDATED '.update + 'in Models - ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Exports REMOVE Function
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.remove = (data, err, success) => {
  db.url.destroy({
    where: {
      id: data.id,
    },
  }).then(success).catch(err);
  utool2.debug('URL was ' + 'REMOVED '.delete + 'from Models - ', data);
};

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Redirect
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
exports.go = (data, err, success) => {
  db.url.find({
    where: {
      newUrl: data.newUrl,
    },
  }).then(success).catch(err);
  utool2.debug('NewURL was ' + 'FOUND '.read + 'in Models - ', data);
};
