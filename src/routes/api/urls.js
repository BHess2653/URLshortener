const urls = require('../../models/urls');


module.exports = (express) => {
  const router = express.Router();

  // Create URL
  router.post('/url', (req, res) => {
    urls.add(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Find One URL
  router.get('/url/:id', (req, res) => {
    req.body.id = req.params.id;
    urls.one(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Find All URLs
  router.get('/urls', (req, res) => {
    urls.all((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete URL
  router.delete('/url/:id', (req, res) => {
  req.body.id = req.params.id;
    urls.remove(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update URL
  router.post('/url/:id', (req, res) => {
  req.body.id = req.params.id;
    urls.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
