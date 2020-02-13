import {firebaseAuth, firebaseDb, firebaseSto, firefirestore} from 'boot/firebase'

const state = {
    userDetails: {},
    PendingRegs: {},
    MemberData: {},
    Designation: ''
}

const mutations = {
    preRegData (state, payload){
        state.PendingRegs.push(payload)
    },
    setUserDetails(state, payload) {
        state.userDetails = payload
    },
    addPendingReg(state, payload) {
        state.PendingRegs = payload.PendingRegData
    },
    addMemberData (state, payload){
        state.MemberData = payload.MemberData
    },
    setDesignation(state, payload) {
        state.Designation = payload.Designation
    }
}

const actions = {
    regAddMember({}, payload){
        console.log('payload: ', payload)
        const MemberData = {
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
            LicenseNo: payload.LicenseNo,
            LicenseExp: payload.LicenseExp,
            Designation: payload.Designation,
        }
        let id
        let childurl
        firebaseDb.collection("MemberData").add(MemberData)
        .then((doc) => {
            id = doc.id
            return id
        })
        .then(id => {
            payload.imageFile.forEach(function (File, key) {
                const filename = File.name
                const ext = filename.slice(filename.lastIndexOf('.'))
                childurl = id + key + '.'+ ext
                return firebaseSto.ref('MemberPics/' + childurl).put(File)
                .then(snapshot => {
                    return snapshot.ref.getDownloadURL();
                })
                .then(downloadURL => {
                    console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
                    return firebaseDb.collection("MemberData").doc(id).update({['imageUrl'+key]: downloadURL});
                })
                .catch(error => {
                    // Use to signal error if something goes wrong.
                    console.log(`Failed to upload file and get link - ${error}`);
                })
            })
        })
    },
    regPreMember({}, payload){
        firebaseDb.collection("MemberData").doc(payload.id).set(payload.PenReg)
        .then(function() {
            firebaseDb.collection("PreRegPersonalData").doc(payload.id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
        })
    },
    preRegData({}, payload){
        const PreRegPersonalData = {
            FirstName: payload.FirstName,
            LastName: payload.LastName,
            CivilStatus: payload.CivilStatus,
            BirthPlace: payload.BirthPlace,
            BirthDate: payload.BirthDate,
            Address: payload.Address,
            Phone: payload.Phone,
            Email: payload.Email,
            Occupation: payload.Occupation,
            EmployerCompany: payload.EmployerCompany,
            Salary: payload.Salary,
            OtherIncome: payload.OtherIncome,
            RelativeName: payload.RelativeName,
            Relationship: payload.Relationship,
            NoDependents: payload.NoDependents,
            LicenseNo: payload.LicenseNo,
            LicenseExp: payload.LicenseExp,
            MembershipFee: payload.MembershipFee,
            Designation: payload.Designation
        }
        let id
        let childurl
        firebaseDb.collection("PreRegPersonalData").add(PreRegPersonalData)
        .then((doc) => {
            id = doc.id
            return id
        })
        .then(id => {
            const filename = payload.LicenseImage.name
            const ext = filename.slice(filename.lastIndexOf('.'))
            childurl = id + '.'+ ext
            return firebaseSto.ref('PreReg/' + childurl).put(payload.LicenseImage)
            .then(snapshot => {
                return snapshot.ref.getDownloadURL();
            }).
            then(downloadURL => {
                console.log(`Successfully uploaded file and got download link - ${downloadURL}`);
                return firebaseDb.collection("PreRegPersonalData").doc(id).update({imageUrl0: downloadURL});
            })
            .catch(error => {
                // Use to signal error if something goes wrong.
                console.log(`Failed to upload file and get link - ${error}`);
             })
        })
    },
    rejectPreReg ({}, payload){
        firebaseDb.collection("PreRegPersonalData").doc(payload.id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
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
    handleAuthStateChanged({commit, dispatch, state}){
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
                            userId: userId})
                        
                            commit('setDesignation', {
                                Designation: userDetails.Designation
                                }
                            )
                    }
                    else 
                    {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                    
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                })
                // this.$router.push('/')
                dispatch('GetPendingReg')
                .then(function() {
                    dispatch('GetMembers')
                })
                
            }
            else {
                //userlogout
                commit('setUserDetails', {})
                // this.$router.replace('/')
            }
          })
    },
    //get pending regitrations
    GetPendingReg({ commit }){
        firebaseDb.collection('PreRegPersonalData').onSnapshot(function(querySnapshot) {
            const PendingRegData = {}
            querySnapshot.forEach(function(doc) {
            PendingRegData[doc.id] = doc.data();
            });
            commit('addPendingReg', {
                PendingRegData
            })
          });
    },
    //get members dito
    GetMembers({ commit }){
        firebaseDb.collection('MemberData').onSnapshot(function(querySnapshot) {
            const MemberData = {}
            querySnapshot.forEach(function(doc) {
            MemberData[doc.id] = doc.data();
            });
            commit('addMemberData', {
                MemberData
            })
          });
    },
    //addpayment
    AddPayment({}, payload){
        firebaseDb.collection("Transactions").doc(payload.Date).collection("Payment").doc().set(payload.Payment)
        .then(function() {
        firebaseDb.collection("MemberData").doc(payload.Payment.MemberID).update({MembershipFee: firefirestore.FieldValue.delete()})
        })
    }
          
}
const getters = {
    PendingRegs: state => {
        return state.PendingRegs
    },
    MemberData: state => {
        return state.MemberData
    },
    Designation: state => {
        return state.Designation
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}