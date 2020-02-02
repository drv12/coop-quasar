import {firebaseAuth, firebaseDb} from 'boot/firebase'



const state = {
    userDetails: {}
}

const mutations = {
    setUserDetails(state, payload) {
        state.userDetails = payload
    }
}

const actions = {
    preReg({}, payload){
        firebaseDb.collection("PreRegPersonalData").add({
                Name: {
                FirstName: payload.Name.FirstName,
                LastName: payload.Name.LastName
                },
                BirthData: {
                BirthPlace: payload.BirthData.BirthPlace,
                BirthDate: payload.BirthData.BirthDate
                },
                Address: {
                Street: payload.Address.Street,
                Barangay: payload.Address.Barangay,
                City: payload.Address.City
                },
                Employment: {
                EmployerCompany: payload.Employment.EmployerCompany,
                Salary: payload.Employment.Salary,
                OtherIncome: payload.Employment.OtherIncome
                },
                Family: {
                NearestRelative: {
                  RelativeName: payload.Family.NearestRelative.RelativeName,
                  Relationship: payload.Family.NearestRelative.Relationship
                },
                NoDependents: payload.Family.NoDependents
                }
        });
    },
    loginUser({}, payload){
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then( response => {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error.message)
          });
    },
    logoutUser(){
        firebaseAuth.signOut();
    },
    handleAuthStateChanged({commit}){
        firebaseAuth.onAuthStateChanged( user => {
            if (user) {
              //userlogin
              let userId = firebaseAuth.currentUser.uid
              firebaseDb.collection("Users").doc(userId).get().then(function(doc) {
                    if (doc.exists) {
                        let userDetails = doc.data()
                        commit('setUserDetails', {
                            name: userDetails.name,
                            email: userDetails.email,
                            designation: userDetails.designation,
                            userId: userId
                })
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                    
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
                // this.$router.push('/member/dashboard')
            }
            else {
                //userlogout
                commit('setUserDetails', {})
                // this.$router.replace('/home')
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