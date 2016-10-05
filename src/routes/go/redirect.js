const urls = require('../../models/urls');

module.exports = (express) => {
  const router = express.Router();

  //  Redirect
  router.get('/:newUrl', (req, res) => {
    req.body.newUrl = req.params.newUrl;
    urls.go(req.body,
    // errorCallback
    (err) => {
      res.status(500).json(err);
    },
    // successCallback
    (data) => {
      res.redirect(data.originalUrl);
    });
  });

  return router;
};
