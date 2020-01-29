<template>
    <q-layout>
    <div class="q-pa-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab v-for="(menuItem, index) in menuList" :key="index" :name="menuItem.name" :label="menuItem.label" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated v-for="(menuItem, index) in menuList" :key="index">
          <q-tab-panel :name="menuItem.name">
            <div>
            <q-card class="my-card">
                <q-card-section class="bg-secondary text-white">
                    <div class="text-h6">{{menuItem.label}}</div>
                    <div class="text-h5">{{menuItem.total}}</div>
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                    <q-btn flat>Search</q-btn>
                </q-card-actions>
            </q-card>
            <div class="q-pa-md">
            <q-table
            title="Transaction History"
            :data="data"
            :columns="columns"
            row-key="name"
            />
        </div>
        </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      </div>

        
    </q-layout> 
</template>  

<script>
const menuList = [
  { name:'shareofstocks' ,label: 'Share of Stocks', title: 'Total Share of Stocks', total: 10000 },
  { name:'mgtfee' ,label: 'Management Fee', title: 'Total Management Fee', total: 8000 },
  { name:'savings' ,label: 'Savings', title: 'Total Savings', total: 9000 },
  { name:'loans' ,label: 'Loans', title: 'Total Loan Balance', total: 9000 }
]

export default {
  data () {
    return {
      menuList,
      tab: 'shareofstocks',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  }
}
</script>