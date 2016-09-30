const generateLink = require('../shortenURL');

module.exports = (express) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.json({Hello: 'World'});
  });

  router.get('/status', (req, res) => {
    res.json({Health: 'True'});
  });

  router.post('/url', (req, res) => {
    res.json(generateLink.shortURL(req.body.link));
  });

  return router;
}
