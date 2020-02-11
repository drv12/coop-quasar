<template>
  <div>
    <h6 class="q-ma-none q-pl-md q-pt-md  text-teal-4">Dashboard</h6>
    <q-separator />
    <div class="row">
      <div class="col-xs-12 col-md-3 col-sm-6">
        <div class="q-pa-lg">
          <q-card class="my-card bg-blue text-white">
            <q-card-section>
              <div class="text-h6">
                <q-icon size="26px" name="people" />Drivers
              </div>
              <q-separator color="white" />
              <div class="text-subtitle2">
                Active
                <h6 class="q-pa-none q-ma-none text-center shadow-21">69</h6>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-xs-12 col-md-3 col-sm-6">
        <div class="q-pa-lg">
          <q-card class="my-card bg-red-14 text-white">
            <q-card-section>
              <div class="text-h6">
                <q-icon size="26px" name="people" />Drivers
              </div>
              <q-separator color="white" />
              <div class="text-subtitle2">
                Inactive
                <h6 class="q-pa-none q-ma-none text-center shadow-21">69</h6>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-xs-12 col-md-3 col-sm-6">
        <div class="q-pa-lg">
          <q-card class="my-card bg-green text-white">
            <q-card-section>
              <div class="text-h6">
                <q-icon size="26px" name="people" />Drivers
              </div>
              <q-separator color="white" />
              <div class="text-subtitle2">
                Payed
                <h6 class="q-pa-none q-ma-none text-center shadow-21">69</h6>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-xs-12 col-md-3 col-sm-6">
        <div class="q-pa-lg">
          <q-card class="my-card bg-warning text-white">
            <q-card-section>
              <div class="text-h6">
                <q-icon size="26px" name="people" />Drivers
              </div>
              <q-separator color="white" />
              <div class="text-subtitle2">
                Unpaid
                <h6 class="q-pa-none q-ma-none text-center shadow-21">69</h6>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
