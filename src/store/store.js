const state = {
    idToken: null,
    userId: null
}

const mutations = {

}

const actions = {
    createuser({commit}, payload){
        axios.post(':signUp?key=AIzaSyD0gmGQfKy8A4QKEj-rlyUNkyabzXsCMm0', {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
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
                    
                }).then(() => {
                   // this.$router.replace('/home')
                    commit('setLoading', false)
                })
            }
            else {
                //userlogout
                commit('setUserDetails', {})
                commit('setLoading', false)
                // this.$router.replace('/')
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