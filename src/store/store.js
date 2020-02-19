import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

Vue.use(VueFirestore);

import {firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {
    userDetails: {},
    Loading: true,
    Designation: ''
}

const mutations = {
    setUserDetails(state, payload) {
        state.userDetails = payload
    },
    setLoading(state, payload){
        state.Loading = payload
    },
    setDesignation(state, payload) {
        state.Designation = payload.Designation
    }
}

const actions = {
    loginUser({commit}, payload){
        commit('setLoading', true)
        firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
        .then( response => {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error.message)
            commit('setLoading', false)
          });
    },
    logoutUser(){
        firebaseAuth.signOut();
    },
    handleAuthStateChanged({commit}){
        commit('setLoading', true)
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
                            MemberID: userDetails.MemberID,
                            userId: userId
                        })

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
                    
                }).then(() => {
                    this.$router.replace('/')
                    commit('setLoading', false)
                })
            }
            else {
                //userlogout
                commit('setUserDetails', {})
                commit('setLoading', false)
                this.$router.replace('/')
            }
          })
    }
}
const getters = {
    Loading: state => {
        return state.Loading
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