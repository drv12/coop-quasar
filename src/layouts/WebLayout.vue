<template>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders ">
      <q-header elevated class="bg-teal">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu"
           :class="'lt-md'"
          />
          <q-toolbar-title>New GSIS Cooperative</q-toolbar-title>
            <div
             v-for="(menuItem, index) in menuList" :key="index"
            >
            <q-btn flat dark 
            :icon="menuItem.icon" 
            :label="menuItem.label" 
            :to="menuItem.route"
            :class="'gt-sm'"
            />
            </div>
            <q-btn flat dark 
            icon="lock" 
            label="Log In" 
            to="/login"
            :class="'gt-sm'"
            v-if="!userDetails.userId"
            />
            <q-btn flat dark 
            icon="lock" 
            label="Admin Dashboard" 
            to="/admin/dashboard"
            :class="'gt-sm'"
            v-if="userDetails.Designation == 'Admin'"
            />
            <q-btn flat dark 
            icon="lock" 
            label="Member Dashboard" 
            to="/member/dashboard"
            :class="'gt-sm'"
            v-if="userDetails.Designation == 'Driver'"
            />
            <q-btn flat dark 
            icon="lock" 
            label="Logout" 
            :class="'gt-sm'"
            v-if="userDetails.userId"
            @click="logoutUser"
            />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        overlay
        bordered
        content-class="bg-grey-3"
        class="secondary"
        :class="'lt-md'"
      >
        <q-scroll-area fit style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list>
            <div v-for="(menuItem, index) in menuList" :key="index">
               <q-item clickable
               v-ripple 
               :to="menuItem.route"
               >
                  <q-item-section avatar>
                    <q-icon :name="menuItem.icon" />
                  </q-item-section>
                  <q-item-section>
                    {{ menuItem.label }}
                  </q-item-section>
               </q-item>
            <q-separator v-if="menuItem.separator" />
            </div>
            <q-item clickable
               v-ripple 
               to="/login"
               v-if="!userDetails.userId"
               >
                  <q-item-section avatar>
                    <q-icon name="lock"/>
                  </q-item-section>
                  <q-item-section>
                    Log In
                  </q-item-section>
               </q-item>
               <q-item clickable
               v-ripple 
               to="/admin/dashboard"
               v-if="userDetails.Designation == 'Admin'"
               >
                  <q-item-section avatar>
                    <q-icon name="lock"/>
                  </q-item-section>
                  <q-item-section>
                    Admin Dashboard
                  </q-item-section>
               </q-item>

               <q-item clickable
               v-ripple 
               to="/member/dashboard"
               v-if="userDetails.Designation == 'Driver'"
               >
                  <q-item-section avatar>
                    <q-icon name="lock"/>
                  </q-item-section>
                  <q-item-section>
                    Member Dashboard
                  </q-item-section>
               </q-item>


               <q-item clickable
               v-ripple 
               @click="logoutUser"
               v-if="userDetails.userId"
               >
                  <q-item-section avatar>
                    <q-icon name="lock"/>
                  </q-item-section>
                  <q-item-section>
                    Log Out
                  </q-item-section>
               </q-item>
           
          </q-list>
        </q-scroll-area>

        
          
      </q-drawer>

      <q-page-container>
        <router-view/>
      </q-page-container>

      <q-footer elevated class="bg-teal">
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

const menuList = [
  { route:'/home' ,icon: 'home', label: 'Home', separator: true },
  { route:'/preregister' ,icon: 'mdi-face', label: 'Be a Member', separator: false },
  { route:'/services' ,icon: 'account_balance', label: 'Services', separator: false },
  { route:'/about' ,icon: 'info', label: 'About Us', separator: false }
]

export default {
  name: 'MyLayout',
  data () {
    return {
      drawer: false,
      menuList
    }
  },
  computed: {
    ...mapState('store', ['userDetails'])
  },
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
}
</script>

<style>
.q-toolbar {height: 80px;}
</style>