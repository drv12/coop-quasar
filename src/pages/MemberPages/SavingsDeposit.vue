<template>
    <div>
      <h6 class="q-ma-none q-pl-md q-pt-md text-teal-4">My Transaction</h6>
       <q-separator />
       <div class="q-pa-md">
             <q-table 
            class="q-mt-md"
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
            :visible-columns="visibleColumns"
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
    data(){
        return{
             columns: [
        {
          name: 'desc',
          required: true,
          label: 'Transaction ID',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: false
        },
        { name: 'membersid', align: 'center', label: 'Members ID', field: 'membersid', sortable: true },
        { name: 'membersname',  align: 'center', label: 'Members name', field: 'membersname', sortable: true },
        { name: 'transactiontype',align: 'center', label: 'Transaction type', field: 'transactiontype', sortable: true },
        { name: 'date',align: 'center', label: 'Date', field: 'date', sortable: true },
        { name: 'amount', align: 'center',label: 'Amount', field: 'amount', sortable: true },   
        { name: 'total',align: 'center', label: 'Total', field: 'total', sortable: true },
      ],
      data: [
        {
          name: '2020-000001',
          membersid: '2020-000001',
          membersname: 'Lebron James',
          transactiontype: 'Desposit',
          date: Date.now(),
          amount:'26,000,000',
          total: '26,000,000'
        },
        ]

        }
    }
}
</script>
<style scoped>
.q-field{
  width: 205px;
}
</style>