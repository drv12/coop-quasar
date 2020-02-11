<template>
  <div>
    <h6 class="q-ma-none q-pl-md q-pt-md  text-teal-4">Payment <q-icon name="mdi-arrow-right-box" /> All Payment</h6>
     <q-separator />
     <div class="q-pa-md">
        <!-- <q-toolbar class="bg-white text-blue">
          <q-space/>
          
        </q-toolbar> -->
        
        <q-table 
            class="q-mt-md"
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
            :visible-columns="visibleFilters"
          >

            
            <template v-slot:top>
                <q-input  
                  class="q-mt-xs"
                  color="blue-8" 
                  :v-model="inputValue" 
                  label="Enter start & end dates" 
                  mask="####-##-## - ####-##-##"
                  hint="Year/Month/Day">
            <template v-slot:append>
              <q-icon name="date_range" class="cursor-pointer">
                <q-popup-proxy v-model="daterange" anchor="top right" self="bottom middle">
                  <q-scroller
                    v-model="value"
                    view="date-range"
                    no-header
                    rounded-borders
                    :style="scrollerPopupStyle240"
                    @close="() => { daterange = false }"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
           </q-input>

              <q-space />

              <q-select
                  v-model="visibleFilters"
                  multiple
                  dense
                  options-dense
                  :display-value="$q.lang.table.columns"
                  emit-value
                  map-options
                  :options="columns"
                  option-value="name"
                  label="Filter the table"
                  options-cover
                  style="min-width: 150px"
              >
              </q-select>
              <q-input class="q-mt-xs q-ml-md" bottom-slots label="Search" >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            </template>

          </q-table>
     </div>
  </div>
</template>

<script>

export default {
  name: 'DateQInput',

  data () {
    return {
      daterange: false,
      value: '',
      inputValue: '',
      visibleFilters:['desc','membersid','membersname','orno','managementfee','shareofstocks','loans','savingsdeposit','accountsrecievable','forfeitedshare'],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Transaction ID',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'membersid', align: 'center', label: 'Members ID', field: 'membersid', sortable: true },
        { name: 'membersname',  align: 'center', label: 'Members name', field: 'membersname', sortable: true },
        { name: 'orno',align: 'center', label: 'OR No.', field: 'orno' },
        { name: 'managementfee', align: 'center',label: 'Management Fee', field: 'managementfee' },
        { name: 'shareofstocks',align: 'center', label: 'Share of Stocks', field: 'shareofstocks' },
        { name: 'loans', align: 'center',label: 'Loans', field: 'loans', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'savingsdeposit', align: 'center', label: 'Savings Deposit', field: 'savingsdeposit', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'accountsrecievable' ,align: 'center', label: 'Accounts Recievable', field: 'accountsrecievable' },
        { name: 'forfeitedshare',align: 'center', label: 'Forfeited Share', field: 'forfeitedshare' },
      ],
      data: [
        {
          name: '2020-000001',
          membersid: 159,
          membersname: 6.0,
          orno: 24,
          managementfee: 4.0,
          shareofstocks: 87,
          loans: '14%',
          accountsrecievable: '1%',
          savingsdeposit: '1%',
          forfeitedshare: '1%'
        },
        ]

    }
  },

  computed: {
    scrollerPopupStyle240 () {
      if (this.$q.screen.lt.sm) {
        return {
          width: '90vw',
          height: '70vh'
        }
      } else {
        return {
          maxHeight: '200px',
          height: '200px',
          width: '240px'
        }
      }
    }
  },
  watch: {
    value (val) {
      const type = Object.prototype.toString.call(this.value)
      if (type === '[object Array]') {
        this.inputValue = `${val[0]} - ${val[1]}`
      }
    },

    inputValue (val) {
      const parts = val.split(' - ')
      if (parts[0] !== this.value[0] || parts[1] !== this.value[1]) {
        this.value[0] = parts[0]
        this.value[1] = parts[1]
      }
    }
  }
}
</script>

<style scoped>
.q-field{
  width: 205px;
}
</style>