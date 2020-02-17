import * as admin from 'firebase-admin';

var admin = require('firebase-admin');
var app = admin.initializeApp();

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://new-gsis-cooperative.firebaseio.com",
  });