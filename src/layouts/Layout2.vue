<template>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated class="primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu"
          />
          <q-toolbar-title>DASHBOARD</q-toolbar-title>
            <div
             v-for="(menuItem, index) in menuList" :key="index"
            >
            <q-btn flat dark 
            :icon="menuItem.icon" 
            :label="menuItem.label" 
            :class="`col-md-3 ${$q.screen.xs ? 'hidden': ''}`"
            :to="menuItem.route"
            />
            </div>
            
        </q-toolbar>
      </q-header>
      

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
const menuList = [
  { route:'/xx/homex' ,icon: 'home', label: 'Home', separator: true },
  { route:'/login' ,icon: 'account_balance', label: 'LogIn', separator: false }
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
