exports.shortUrl = () => {
  let shortUrl = '';
  const text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 8; i++) {
    shortUrl += text.charAt(Math.floor(Math.random() * text.length));
  }

  return shortUrl;
};
