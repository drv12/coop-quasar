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
    login({commit}, payload){
        axios.post(':signInWithPassword?key=AIzaSyD0gmGQfKy8A4QKEj-rlyUNkyabzXsCMm0', {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
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