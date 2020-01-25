<template>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu"
          />
          <q-toolbar-title>New GSIS Cooperative</q-toolbar-title>
            <div
             v-for="(menuItem, index) in menuList" :key="index"
            >
            <q-btn flat dark 
            :icon="menuItem.icon" 
            :label="menuItem.label" 
            :class="`col-md-3 ${$q.screen.xs ? 'hidden': ''}`"
            />
            </div>
            
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        overlay
        bordered
        content-class="bg-grey-3"
      >
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
      </q-drawer>

      

      <q-page-container>
        
      </q-page-container>
    </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'home',
    label: 'Home',
    separator: true
  },
  {
    icon: 'account_balance',
    label: 'Services',
    separator: false
  },
  {
    icon: 'info',
    label: 'About',
    separator: false
  },
  {
    icon: 'lock',
    label: 'Log In',
    separator: true
  }
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
