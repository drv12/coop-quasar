import {firebaseAuth, firebaseDb, firebaseSto} from 'boot/firebase'

const state = {

}

const mutations = {

}

const actions = {
    handleAuthStateChanged({commit, dispatch}){
        firebaseAuth.onAuthStateChanged( user => {
            if (user) {
              //userlogin
              let userId = firebaseAuth.currentUser.uid
              firebaseDb.collection("Users").doc(userId).get().then(function(doc) {
                    if (doc.exists) {
                        let userDetails = doc.data()
                        commit('setUserDetails', {
                            FirstName: userDetails.FirstName,
                            LastName: userDetails.LastName,
                            Email: userDetails.Email,
                            Designation: userDetails.Designation,
                            userId: userId
                })
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                    
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
                dispatch('GetPendingReg')
                // this.$router.push('/member/dashboard')
            }
            else {
                //userlogout
                commit('setUserDetails', {})
                // this.$router.replace('/home')
            }
          })
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