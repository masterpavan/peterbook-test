var chai = require('chai');
const assert = chai.assert;
// var base_url = 'http://localhost:3000/'
const sinon = require('sinon');
const admin = require('firebase-admin');

const projectConfig= {
  apiKey: "AIzaSyBanNY22g_EVE1KzYEiAHdrZ27kJqdknys",
  authDomain: "peterbook-test.firebaseapp.com",
  databaseURL: "https://peterbook-test.firebaseio.com",
  projectId: "peterbook-test",
  storageBucket: "peterbook-test.appspot.com",
  messagingSenderId: "634273753793"
}

const test = require('firebase-functions-test')(projectConfig, '../../peterbook-test-c7f2f1bbe0cb.json' );

const functions = require('firebase-functions')
test.mockConfig({stripe: { key: '23wr42ewr34'}})
const key = functions.config().stripe.key

describe('Cloud Functions', () => {
  
  after(() => {
    test.cleanup();
  })

  describe('Test', () => {

    // let myFunctions = require('../index')

    // An example comment that we'll be trying to add to a post
    let comment = {
      score: 0,
      creationDate: 31654123,
      userDisplayName: 'Harish',
      userAvatar: '',
      userId: 'ZW9ERz0x2vYlKl5pn7pBmyuc0j73',
      postId: 'OU5Zd3bA8HIqWLDIHC3O',
      text: 'testComment'
    }
    
    // Creating a snap of the data- comment we'll be trying to insert into the database
    // const snap = test.database.makeDataSnapshot(comment, 'comments')

    // const wrappedFunction = test.wrap(myFunctions.onAddComment)

    /*return admin.database.collection('comments').where('text', '==', 'commentcheck2').get().then(snapshot => {
      assert.notEqual(snapshot, null)
    })*/

  })
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});