<template>
  <div>
    <q-layout view="hhr lpR ffr">
      <q-header elevated>
        <q-toolbar class="glossy">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu"
           :class="'lt-md'"
          />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>

          <q-toolbar-title>Hello! {{ userDetails.FirstName + ' ' + userDetails.LastName}}</q-toolbar-title>
        </q-toolbar>
      </q-header>

    <q-drawer behavior="mobile" v-model="left" side="left" none>
      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-center bg-transparent">
          <q-avatar size="100px" class="q-mt-sm">
            <img
              src="https://i.pinimg.com/originals/02/23/25/022325055802a3b4af381fa65a8b42de.png"
            />
          </q-avatar>
          <div class="text-weight-bold">Grizzly Bear</div>
          <div>@wearebarebears</div>
        </div>
      </q-img>
      <q-scroll-area
        style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
      >
        <div style="margin-top: 100px; border-right: 1px solid #ddd"/>
          <q-list>
            <div v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable
              v-ripple 
              @click="loadPreReg(menuItem.route, userDetails.MemberID)"
              >
                <q-item-section avatar> 
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
            </div>
              <q-item clickable
              v-ripple
              @click="logoutUser"
              >
                <q-item-section avatar> 
                  <q-icon name="exit_to_app" />
                </q-item-section>
                <q-item-section>
                  Log Out 
                  <br>
                  {{userDetails.name}}
                </q-item-section>
              </q-item>
<<<<<<< HEAD
          </q-list>
      </q-drawer>
=======
          </q-expansion-item>
              <q-item
                    expand-separator 
                   :content-inset-level="0.5"
                    to="/member/loan"
                    exact
                    >
                  <q-item-section avatar>
                    <q-icon name="mdi-receipt" />
                  </q-item-section>
                    <q-item-section class="text-uppercase">Loan</q-item-section>
                </q-item>
        <q-item to="" exact >
          <q-item-section avatar>
              <q-icon name="mdi-account-card-details" />
            </q-item-section>
          <q-item-section class="text-uppercase">Profile</q-item-section>
        </q-item>

       </q-list>
      <!-- End of Sidebar Menu inside the Drawer -->
      </q-scroll-area>
    </q-drawer>
>>>>>>> f160ae8dd404812659d44474e303d1de8d287ad8

      <q-page-container>
        <router-view/>
      </q-page-container>

      <q-footer elevated>
        <q-toolbar class="glossy">
          <q-toolbar-title>2020</q-toolbar-title>
        </q-toolbar>
      </q-footer>
      
    </q-layout>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
const menuList = [
  { route:'/member/dashboard/' ,icon: 'dashboard', label: 'Dashboard', separator: true },
  { route:'/member/profile/' ,icon: 'account_circle', label: 'Profile', separator: false },
  { route:'/member/transactions/' ,icon: 'mdi-piggy-bank', label: 'Transactions', separator: false },
  // { route:'/credit' ,icon: 'mdi-credit-card', label: 'Credit', separator: false },
  { route:'/benefits/' ,icon: 'mdi-gift', label: 'Benefits', separator: true },
  { route:'/contactus/' ,icon: 'mdi-mail', label: 'Contact Us', separator: false },
  { route:'/aboutus/' ,icon: 'info', label: 'About Us', separator: true }
  // { route:'/logout' ,icon: 'exit_to_app', label: 'Log Out', separator: false }
]
  export default {
    name: 'MyLayout',
    data () {
      return {
        drawer: false,
        menuList
      }
    },
    props: ['penRegId']
    ,
    computed:{
      ...mapState('store', ['userDetails'])
    },
    methods: {
      ...mapActions('store', ['logoutUser']),
      loadPreReg(path , id) {
            this.$router.push(path + id)
        }
    }
  }
</script>