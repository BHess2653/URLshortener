exports.shortURL = (link) => {
  let shortURL = '';
  const text = '_-!#$%&?0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for(var i = 0; i < 8; i++) {
    shortURL += text.charAt(Math.floor(Math.random() * text.length));
  }

  const exampleURL = 'http://bhess2653.com/';
  //const shortURL = exampleURL + urlID;
  return {
    original_URL: exampleURL + link,
    new_URL: exampleURL + shortURL
  };
};
