const url = require('../../models/urls');
const gen = require('../../models/genURL');

module.exports = (express) => {
  const router = express.Router();

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Create URL
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/urls', (req, res) => {
    const reqBody = req.body;
    reqBody.newUrl = gen.shortUrl(url);
    url.add(req.body,
    // errorCallback
    (err) => {
      res.status(500).json(err);
    },
    // successCallback
    (data) => {
      res.status(200).json(data);
    });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Find All URLs
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/urls', (req, res) => {
    url.all(
    // errorCallback
    (err) => {
      res.status(500).json(err);
    },
    // successCallback
    (data) => {
      res.status(200).json(data);
    });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Find One URL
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.get('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    url.one(req.body,
    // errorCallback
    (err) => {
      res.status(500).json(err);
    },
    // successCallback
    (data) => {
      res.status(200).json(data);
    });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Update URL
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.post('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    url.update(req.body,
    // errorCallback
    (err) => {
      res.status(500).json(err);
    },
    // successCallback
    (data) => {
      res.status(200).json(data);
    });
  });

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // Delete URL
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  router.delete('/urls/:id', (req, res) => {
    const reqBody = req.body;
    reqBody.id = req.params.id;
    url.remove(req.body,
    // errorCallback
    (err) => {
      res.status(500).json(err);
    },
    // successCallback
    (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
