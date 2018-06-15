const chai = require('chai');
const assert = chai.assert;

/*const sinon = require('sinon');

const admin = require('firebase-admin');

const test = require('firebase-functions-test')()

describe('Cloud Functions', () => {

  let myfunctions, adminInitStub

  before(() => {
    adminInitStub = sinon.stub(admin, 'initializeApp')

    myfunctions = require('../index')

  })
  
  after(() => {
    adminInitStub.restore();
    test.cleanup();
  })

  describe('Test', () => {

    myfunctions = require('../index')

    // An example comment that we'll be trying to add to a post
    let beforecomment = {
      score: 0,
      creationDate: 31654123,
      userDisplayName: 'Harish',
      userAvatar: '',
      userId: 'ZW9ERz0x2vYlKl5pn7pBmyuc0j73',
      postId: 'OU5Zd3bA8HIqWLDIHC3O',
      text: 'testComment'
    }

    let aftercomment = {
      score: 0,
      creationDate: 31654123,
      userDisplayName: 'Harish',
      userAvatar: '',
      userId: 'ZW9ERz0x2vYlKl5pn7pBmyuc0j73',
      postId: 'OU5Zd3bA8HIqWLDIHC3O',
      text: 'testedComment'
    }
    
    // Creating a snap of the data- comment we'll be trying to insert into the database
    const snap = {
      val: () => beforecomment,
    }

    const wrappedFunction = test.wrap(myfunctions.onAddComment)

    return wrappedFunction(snap).then(snapshot => {
      assert.notEqual(snapshot, null)
    })

  })
});

describe('Comment', function() {
  const req = {
    query: {
      text: 'input'}
  }
  const res = {
    redirect: (code, url) => {
      assert.equal(code, 303);
      assert.equal(url, 'new_ref');
      done();
    }
  }

  myFunctions.onAddComment()
})*/

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});