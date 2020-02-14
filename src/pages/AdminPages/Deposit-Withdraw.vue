<template>
    <div>
        <q-page>
      <h6 class="q-ma-none q-pl-md q-pt-md text-teal-4">Savings Account <q-icon name="mdi-arrow-right-box" /> Desposit/Withdraw</h6>
       <q-separator />
        <div v-if="!tab.length" class="no-choice absolute-center">
          <q-icon name="mdi-bank" size="160px" color="teal"/>
             <div class="text-h6 text-teal text-center">
                 Withdraw/Deposit
            </div>
        </div>
       <div class="q-pa-md">
           
         <div class="q-gutter-y-md" style="max-width: 2000px">
             
                <q-card>
                    <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="teal"
                    indicator-color="teal"
                    align="justify"
                    narrow-indicator
                    >
                    <q-tab name="deposit" label="Deposit" icon="mdi-bank"/>
                    <q-tab name="withdraw" label="Withdraw" icon="mdi-cash-multiple"/>
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="deposit">
                        <!-- <div class="text-h6">Mails</div> -->
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </q-tab-panel>

                    <q-tab-panel name="withdraw">
                        <!-- <div class="text-h6">Alarms</div> -->
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </q-tab-panel>
                    </q-tab-panels>
                   
                </q-card>
            </div>
       </div>
       </q-page>
    </div>
</template>
<script>
export default {
    data(){
        return{
           tab: true,
        }
    }
}
</script>
<style scoped>
.no-choice{
    opacity: 0.6;
}
</style>