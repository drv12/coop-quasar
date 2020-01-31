import {firebaseAuth, firebaseDb} from 'boot/firebase'



const state = {

}

const mutations = {

}

const actions = {
    login({}, payload){
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then( response => {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error.message)
          });
    },
    handleAuthStateChanged(){
        firebaseAuth.onAuthStateChanged( User => {
            if (User) {
              //userlogin
              let userId = firebaseAuth.currentUser.uid
              firebaseDb.get('Users/' + userId).once('value', snapshot => {
                  console.log('snapshot: ',snapshot)
                  let UserDetails = snapshot.val()
                  console.log('UserDetails: ', UserDetails)
              })
            }
            else {
                //userlogout

            }
          });
    }
    
}
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}