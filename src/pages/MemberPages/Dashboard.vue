<template>
    <q-layout>
        <div class="q-pa-md row items-start q-gutter-md">
            <q-card class="my-card">
            <q-card-section class="bg-primary text-white">
                <div class="text-h6">Total Share of Stocks</div>
                <div class="text-h5"> 14000 </div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
                <q-btn flat>View Transactions</q-btn>
            </q-card-actions>
            </q-card>

            <q-card class="my-card">
            <q-card-section class="bg-primary text-white">
                <div class="text-h6">Capital Interest</div>
                <div class="text-h5"> 280 </div>
            </q-card-section>
            </q-card>

            <q-card class="my-card">
            <q-card-section class="bg-purple text-white">
                <div class="text-h6">Savings Deposit</div>
                <div class="text-h5">5000</div>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat>View Transactions</q-btn>
            </q-card-actions>
            </q-card>

            <q-card class="my-card">
            <q-card-section class="bg-teal text-white">
                <div class="text-h6">Loan Balance</div>
                <div class="text-subtitle2">0</div>
            </q-card-section>

            <q-card-actions vertical align="right">
                <q-btn flat>View Transactions</q-btn>
            </q-card-actions>
            </q-card>

            <q-card class="my-card">
            <q-card-section class="bg-grey-8 text-white">
                <div class="text-h6">Billing</div>
                <div class="text-h5">0</div>
            </q-card-section>

            <q-card-actions vertical align="right">
                <q-btn flat>View Records</q-btn>
            </q-card-actions>
            </q-card>
        </div>
      </div>
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="q-pa-lg">
              <apexchart max-width="600" height="500" type="bar" :options="charts" :series="bars"></apexchart>
        </div>
      </div>

       <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 q-mt-xl q-pt-xl">
          <div class="q-pa-lg">
                <apexchart max-width="800" height="800" type="donut" :options="donuts" :series="payments"></apexchart>
          </div>
      </div>

       <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12
        q-mt-xl q-pt-xl">
          <div class="q-pa-lg">
             <apexchart max-width="500" type="line" :options="lines" :series="slantings"></apexchart>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        charts:{
        xaxis: {
          categories: ['January', 'February']
        }
      },
      bars: [
        {
          name: 'Management Fee',
          data: [ 96, 96]
        },
        {
          name: 'Share Capital',
          data: [ 91, 91,]
        },
        {
          name: 'Savings Deposit',
          data: [ 50, 43]
        },
        {
          name: 'Advances',
          data: [ 12, 11,]
        },
      ],
        donuts:{
            
            labels: ['Management Fee', 'Share Capital', 'Savings Deposit', 'Advances']
         }, 
         payments: [100, 55, 13, 33],
        //Line Graph
        lines:{
               xaxis: {
              categories: [2015, 2016, 2017, 2018, 2019, 2020]
              }
        },
        slantings:[
          {
            name: 'Payed',
            data: [100, 96, 99, 91, 91]
          },
          {
            name: 'Unpayed',
            data: [90, 80, 80, 85, 91]
          },
          {
            name: 'Billing',
            data: [6, 9, 3, 1, 2]
          },
        ],
    };
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>