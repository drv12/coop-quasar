import {firebaseAuth, firebaseDb, firebaseSto} from 'boot/firebase'



const state = {
    userDetails: {}
}

const mutations = {
    setUserDetails(state, payload) {
        state.userDetails = payload
    }
}

const actions = {
    preReg({commit}, payload){
        const PreRegPersonalData = {
            FirstName: payload.FirstName,
            LastName: payload.LastName,
            CivilStatus: payload.CivilStatus,
            BirthPlace: payload.BirthPlace,
            BirthDate: payload.BirthDate,
            Address: payload.Address,
            Occupation: payload.Occupation,
            EmployerCompany: payload.EmployerCompany,
            Salary: payload.Salary,
            OtherIncome: payload.OtherIncome,
            RelativeName: payload.RelativeName,
            Relationship: payload.Relationship,
            NoDependents: payload.NoDependents,
            // LicenseImage: payload.LicenseImage,
            LicenseNo: payload.LicenseNo,
            LicenseExp: payload.LicenseExp,
            Designation: payload.Designation
        }
        let imageUrl
        let id
        let childurl
        firebaseDb.collection("PreRegPersonalData").add(PreRegPersonalData)
        .then((doc) => {
            id = doc.id
            console.log(id + 'gago')
            return id
        })
        .then(id => {
            const filename = payload.LicenseImage.name
            const ext = filename.slice(filename.lastIndexOf('.'))
            childurl = id + '.'+ ext
            return firebaseSto.ref('PreReg/' + childurl).put(payload.LicenseImage)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
                // return firebaseDb.collection("PreRegPersonalData").doc(id).update({imageUrl: imageUrl})
            }).
            then(downloadURL => {
                console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
                return firebaseDb.collection("PreRegPersonalData").doc(id).update({imageUrl: downloadURL});
            })
            .catch(error => {
                // Use to signal error if something goes wrong.
                console.log(`Failed to upload file and get link - ${error}`);
             })
            .then(() => {
                commit('preReg', {
                    ...PreRegPersonalData,
                    imageUrl: imageUrl,
                    id: id
                })
            })
        })
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