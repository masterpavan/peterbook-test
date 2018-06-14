var chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');
const admin = require('firebase-admin');

const projectConfig= {
    databaseURL: "https://peterbook-test.firebaseio.com",
    projectId: "peterbook-test"
}

const test = require('firebase-functions-test')(projectConfig, './peterbook-test-c7f2f1bbe0cb.json' );

describe('Cloud Functions', () => {
	let myFunctions;

	before(() => {
		myFunctions = require('../index');
  })
  
  after(() => {
    test.cleanup();
  })
});

describe('Test Suite', () => {
  
})

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});