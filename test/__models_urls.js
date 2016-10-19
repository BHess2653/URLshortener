const expect = require('chai').expect;
const url = require('../src/models/urls');
const gen = require('../src/models/genURL');
const utool2 = require('uTool2');

describe('Urls Model', () => {
  let testUrl = {
    originalUrl: 'http://www.google.com',
    newUrl: gen.shortUrl('http://www.google.com'),
  };
  let fakeId;
  let shortURL;

  // Create user
  it('CREATE Url', (done) => {
    // CREATE
    url.add(testUrl, (fail) => {
      utool2.debug('FAILED to ' + 'CREATE'.create + ' fake Url ', fail);
    }, (url) => {
      fakeId = url.id;
      shortURL = url.shortURL;
      expect(url.url).to.be.equal(testUrl.url);
      expect(url.shortURL).to.be.equal(testUrl.shortURL);
      done();
    }
    );
  });

  // GET all urls
  it('GET all Urls', (done) => {
    // READ all
    url.all((fail) => {
      utool2.debug('FAILED to' + ' READ'.read + ' all users ', fail);
    }, (urls) => {
      this.testUrls = urls;
      expect(this.testUrls.length).to.be.above(0);
      done();
    }
  );
  });

  // GET Url by id
  it('GET Url by id', (done) => {
    const testUrl = {
      id: fakeId,
    };
  // READ by id
    url.one(testUrl, (fail) => {
      utool2.debug('FAILED to ' + 'READ'.read + ' by id url ', fail);
    }, (url) => {
      expect(url.id).to.be.equal(fakeId);
      done();
    }
  );
  });

  // UPDATE a Url
  it('UPDATE Url', (done) => {
    // Load in the info for an existing user
    testUrl = {
      id: fakeId,
      originalUrl: 'http://www.reddit.com',
      newUrl: gen.shortUrl('http://www.reddit.com'),
    };
    // UPDATE
    url.update(testUrl, (fail) => {
      utool2.debug('failed to ' + 'UPDATE'.update + ' fake url ', fail);
    }, (url) => {
      expect(url.dataValues.url).to.be.equal(testUrl.url);
      done();
    }
    );
  });

  // DELETE Url
  it('DELETE Url', (done) => {
    // DELETE
    url.remove(testUrl, (fail) => {
      utool2.debug('FAILED to ' + 'DELETE '.delete + 'fake url', fail);
    }, (res) => {
      expect(res).to.be.equal(1);
      done();
    }
    );
  });

  // Redirect
  it('Redirect', (done) => {
    const testUrl = {
      newUrl: shortURL,
    };
  // READ by id
    url.go(testUrl, (fail) => {
      utool2.debug('FAILED to redirect ', fail);
    }, (url) => {
      expect(gen.newUrl).to.be.equal(shortURL);
      done();
    }
    );
  });
});
