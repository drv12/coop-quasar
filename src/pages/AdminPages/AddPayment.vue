<template>
    <div>
      <h6 class="q-ma-none q-pl-md q-pt-md  text-teal-4">Payment <q-icon name="mdi-arrow-right-box" /> Add Payment</h6>
       <q-separator />
       <div class="q-pa-md">
           <q-card
           class="q-pa-lg"
            >
            <div class="text-uppercase text-teal">Daily Payments</div>
          <q-card-section horizontal class="col">
               
                 <div class="row">
                    <!-- Start of Transaction ID -->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs">
                            <q-input v-model="transactionid" label="Transaction ID" mask="2020-######" />
                        </div>
                     </div>
                     <!-- End of Transaction ID -->
                    <!-- Start of Members ID -->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs">
                            <div >
                                <q-select
                                    color="blue-12"
                                    v-model="membersid"
                                    :options="membersname"
                                    label="Member's ID"
                                >
                                    <template class="q-pa-xs" v-slot:append>
                                    <q-icon name="perm_identity" />
                                    </template>
                                </q-select>
                            </div>
                        </div>
                     </div>
                     <!-- End of Members ID -->
                     <!-- Start of Members Name -->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs q-mb-md">
                            <q-input v-model="membersname" label="Members name" />
                        </div>
                     </div>
                     <!-- End of Members Name -->
                      <!-- Start of OR number -->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs">
                            <q-input v-model="recieptnumber" label="Official Reciept Number" mask="###########" />
                        </div>
                     </div>
                     <!-- End of OR number -->
                    <!-- Start of Management Fee -->
                    <div class="col-lg-6 q-px-xs">
                    <span class="text-uppercase text-teal-9">Fees</span>
                        <div class="q-pa-xs">
                            <q-input v-model="managementfee" label="Management Fee" mask="######" />
                        </div>
                    </div>
                    <!-- End of Management Fee -->
                    <!-- Start of Share of Stocks -->
                    <div class="col-lg-6 q-px-xs">
                    <span class="text-white">ABC</span>
                    <div class="q-pa-xs">
                      <q-input v-model="shareofstocks" label="Share of Stocks" mask="######" />
                    </div>
                  </div>
                    <!-- End of Share of Stocks -->
                     <!-- Start of Forfeited Share -->
                    <div class="col-lg-6 q-px-xs">
                    <span class="text-white">ABC</span>
                    <div class="q-pa-xs">
                      <q-input v-model="forfeitedshare" label="Forfeited Share" mask="######" />
                    </div>
                  </div>
                    <!-- End of Share of Stocks -->
                     <!-- Start of Savings Deposit -->
                    <div class="col-lg-6 q-px-xs">
                    <span class="text-white">ABC</span>
                    <div class="q-pa-xs">
                      <q-input v-model="savingsdeposit" label="Savings Deposit" mask="######" />
                    </div>
                  </div>
                    <!-- End of Savings Deposit -->
                    <!-- Start of Accounts Recievable -->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs">
                            <q-input v-model="accountsrecievable" label="Accounts Recievable" mask="######" />
                        </div>
                    </div>
                    <!-- End of Accounts Recievable -->
                     <!-- Start of Advances -->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs">
                            <q-input v-model="advances" label="Advances" mask="######" />
                        </div>
                    </div>
                    <!-- End of Advances -->
                    <!-- Start of Date -->
                        <div class="col-lg-6 q-px-xs">
                            <div class=" q-pa-xs">
                            <q-input label="Year/Month/Date" v-model="paymentdate" mask="date" hint="Date" :rules="['date']">
                                <template class="q-pa-none q-md-none" v-slot:before>
                                <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy
                                    ref="qDateProxy"
                                    transition-show="scale"
                                    transition-hide="scale"
                                    >
                                    <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                                    </q-popup-proxy>
                                </q-icon>
                                </template>
                            </q-input>
                            </div>
                        </div>
                    <!-- End of Date -->
                    <!-- Start of Total Amount -->
                        <div class="col-lg-6 q-px-xs">
                              <div class="q-pa-xs">
                                <q-input v-model="totalamount" label="Total Amount"/>
                              </div>
                        </div>
                    <!-- End of Total Amount -->
                     <!-- Start of Description-->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs">
                             <span class="text-uppercase text-teal-9">Others</span>
                             <q-input v-model="description" label="Description" autogrow/>
                        </div>
                    </div>
                    <!-- End of Description -->
                     <!-- Start of Amount-->
                    <div class="col-lg-6 q-px-xs">
                        <div class="q-pa-xs">
                             <span class="text-white">Others</span>
                            <q-input v-model="descriptionamount" label="Amount" mask="₱ ###########" />
                        </div>
                     </div>
                     <!-- End of Amount -->
                     <!-- Start of Blank Space -->
                      <div class="col-lg-6 q-px-xs">
                        <div align="right" class="q-mt-xl">
                        </div>
                      </div>
                      <!-- End of Blank Space -->
                     <!-- Start of Add Payment button -->
                     <div class="col-lg-6 q-px-xs">
                        <div align="right" class="q-mt-xl">
                            <q-btn class="text-white" icon-right="check" label="Add Payment" color="teal" />
                        </div>
                      </div>
                     <!-- End of Add Payment button -->
                 </div>
          </q-card-section>
           </q-card>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            transactionid: '',
            membersid: '',
            membersname: [],
            recieptnumber: '',
            managementfee: '',
            shareofstocks: '',
            forfeitedshare: '',
            savingsdeposit: '',
            accountsrecievable: '',
            advances: '',
            paymentdate: new Date(),
            totalamount: '',
            description: '',
            descriptionamount: '',

        }
    }
}
</script>

<style scoped>
</style>