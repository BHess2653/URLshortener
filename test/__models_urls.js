const expect = require('chai').expect;
const request = require('supertest');
const faker = require('faker');
const Url = require('../src/models/urls');
const utool2 = require('uTool2');

describe('Urls Model', () => {
  let server;
  let testUrls;
  let tempUrl;

  // Test for all Urls
  it('Gets All', (done) => {
    Url.all(
      (err) => {
        throw new Error(err);
      },
      (urls) => {
        this.testUrls = urls;
        expect(this.testUrls.length).to.be.above(0);
        done();
      }
    );
  });

  // Add a Url
  it('creates a new Url', (done) => {
    // Generates a fake Url
    const fakeUrl = { originalUrl: faker.internet.url() };
    Url.add(fakeUrl,
      (err) => {
        throw new Error(err);
      },
      (url) => {
        // Save the returned data for later use in tests
        this.tempUrl = url.dataValues;
        // Url.name returned from model should match url.name supplied
        expect(url.originalUrl).to.be.equal(fakeUrl.originalUrl);
        done();
      }
    );
  });

  // Find a Url
  it('Find a Url', (done) => {
    // Generate a fake Url
    const targetUrl = this.testUrls[0];
    Url.one(targetUrl,
      (err) => {
        throw new Error(err);
      },
      (url) => {
        // Url.name returned from model should match url.originalUrl supplied
        expect(url.originalUrl).to.be.equal(targetUrl.originalUrl);
        done();
      }
    );
  });

  // Update a Url
  it('Update a Url', (done) => {
    // Load in the info for an existing url
    const updateUrl = this.tempUrl;
    updateUrl.originalUrl = 'Not A Real Url';

    // Call url model for updating
    Url.update(updateUrl,
      (err) => {
        throw new Error(err);
      },
      (url) => {
        // Save the returned data for later use in tests
        this.tempUrl = url;
        // Url.name returned from model should match url.originalUrl supplied
        expect(url.originalUrl).to.be.equal(updateUrl.originalUrl);
        done();
      }
    );
  });

  // Remove a Url
  it('Remove a Url', (done) => {
    // Load in the info for an existing url
    const removeUrl = this.tempUrl;
    removeUrl.force = true;

    // Call url model for updating
    Url.remove(removeUrl,
      (err) => {
        throw new Error(err);
      },
      (response) => {
        // if successfully removed a 1 should be returned
        expect(response).to.be.equal(1);
        done();
      }
    );
  });
});
