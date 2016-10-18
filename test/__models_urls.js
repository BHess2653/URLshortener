const expect = require('chai').expect;
const request = require('supertest');
const Url = require('../src/models/urls');
const gen = require('../src/models/genURL');
const util = require('../lib/util');

describe('Urls Model', () => {
  let testUrl = {
    url: 'http://www.google.com',
    shortURL: gen.genUrl('http://www.google.com'),
  };

  let fakeId;
  let shortURL;

  // Create user
  it('CREATE Url', (done) => {
    // CREATE
    Url.create(testUrl, (fail) => {
      util.debug('FAILED to ' + 'CREATE'.create + ' fake Url', fail);
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
    Url.findAll((fail) => {
      util.debug('FAILED to' + ' READ'.read + ' all users', fail);
    }, (urls) => {
      this.testUrls = urls;
      expect(this.testUrls.length).to.be.above(0);
      done();
    }
  );
  });

  // GET Url by id
  it('GET Url by id', (done) => {
    const testURL = {
      id: fakeId,
    };
  // READ by id
    Url.find(testUrl, (fail) => {
      util.debug('FAILED to ' + 'READ'.read + ' by id url', fail);
    }, (url) => {
      expect(url.id).to.be.equal(fakeId);
      done();
    }
  );
  });

  // Redirect
  it('Redirect', (done) => {
    const testUrl = {
      shortURL,
    };
  // READ by id
    Url.go(testUrl, (fail) => {
      util.debug('FAILED to redirect', fail);
    }, (url) => {
      expect(url.shortURL).to.be.equal(shortURL);
      done();
    }
    );
  });

  // UPDATE a Url
  it('UPDATE Url', (done) => {
    // Load in the info for an existing user
    testUrl = {
      id: fakeId,
      url: 'http://www.reddit.com',
      shortURL: gen.genUrl('http://www.reddit.com'),
    };
    // UPDATE
    Url.update(testUrl, (fail) => {
      util.debug('failed to ' + 'UPDATE'.update + ' fake url', fail);
    }, (url) => {
      expect(url.dataValues.url).to.be.equal(testUrl.url);
      done();
    }
    );
  });

  // DELETE Url
  it('DELETE Url', (done) => {
    // DELETE
    Url.destroy(testUrl, (fail) => {
      util.debug('FAILED to ' + 'DELETE '.delete + 'fake url', fail);
    }, (res) => {
      expect(res).to.be.equal(1);
      done();
    }
    );
  });
});
