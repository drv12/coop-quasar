const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.setUserRole = functions.https.onCall(async (data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {

        db.collection("Users").doc(user.uid).update({
            Designation: 'Admin'
          })

        return admin.auth().setCustomUserClaims(user.uid, {
            Designation: 'Admin'
        })
        .catch(error => {
            return error
        })
    })
    
    
    // if (context.auth.token.admin) return
    // try {
    //   var _ = await admin.auth().setCustomUserClaims(data.uid, data.role)
    //   return db.collection("Users").doc(data.uid).update({
    //     Designation: data.role
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  })
