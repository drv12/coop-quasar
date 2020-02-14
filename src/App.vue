<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
 
require('firebase/firestore')
Vue.use(VueFirestore)

import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('store',['handleAuthStateChanged'])
  },
  mounted(){
    this.handleAuthStateChanged();
  }
}
</script>
