<template>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders primary">
      <q-header elevated>
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
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        overlay
        bordered
        content-class="bg-grey-3"
        class="secondary"
      >
        <q-scroll-area fit style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple :to="menuItem.route">
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
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
</template>

<script>
const menuList = [
  { route:'/home' ,icon: 'home', label: 'Home', separator: true },
  { route:'/services' ,icon: 'account_balance', label: 'Services', separator: false },
  { route:'/about' ,icon: 'info', label: 'About Us', separator: false },
  { route:'/login' ,icon: 'lock', label: 'Log In', separator: true }
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

<style>
.q-toolbar {height: 80px;}
</style>