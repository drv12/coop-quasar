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

          <q-toolbar-title>Hello! Member</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        show-if-above
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar> 
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />
          </q-list>
        </q-scroll-area>
      </q-drawer>

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
const menuList = [
  { route:'/member' ,icon: 'dashboard', label: 'Dashboard', separator: true },
  { route:'/profile' ,icon: 'account_circle', label: 'Profile', separator: false },
  { route:'/investment' ,icon: 'mdi-piggy-bank', label: 'Investment', separator: false },
  { route:'/credit' ,icon: 'mdi-credit-card', label: 'Credit', separator: false },
  { route:'/benefits' ,icon: 'mdi-gift', label: 'Benefits', separator: true },
  { route:'/contactus' ,icon: 'mdi-mail', label: 'Contact Us', separator: false },
  { route:'/aboutus' ,icon: 'info', label: 'About Us', separator: true },
  { route:'/logout' ,icon: 'exit_to_app', label: 'Log Out', separator: false }
]

  export default {
    name: 'MyLayout',
    data () {
      return {
        drawer: false,
        menuList
      }
    }
  }
</script>
