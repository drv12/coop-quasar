<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'
import Swal from 'sweetalert2'
import * as admin from 'firebase-admin';

 
require('firebase/firestore')
Vue.use(VueFirestore)

import { mapActions } from 'vuex'


export default {
  methods: {
    ...mapActions('store',['handleAuthStateChanged'])
  },
  mounted(){
    this.handleAuthStateChanged();
  },
}
</script>
