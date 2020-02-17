<template>
    <div>
      <h6 class="q-ma-none q-pl-md q-pt-md text-teal-4">Payment <q-icon name="mdi-arrow-right-box" /> Add Payment</h6>
       <q-separator />
       <div class="q-pa-md">
           <q-card class="q-pa-lg">
               <div class="text-uppercase text-teal-4">Daily Payments</div>
          <q-card-section horizontal >

              

                 <div class="row">
                     <div class="col-lg-6 col-md-8 col-sm-12 col-xs-12">
                        <div class="q-pa-xs" v-if="scanner" style="height: 150px; width:150px;">
                            <qrcode-stream @decode="onDecode"></qrcode-stream>
                        </div>
                        <q-btn @click="scanner=!scanner" >QR Scanner</q-btn>
                     </div>

                    <!-- Start of Transaction ID -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="q-pa-xs">
                            <q-input color="teal-4" v-model="transactionid" label="Transaction ID" mask="2020-######" />
                        </div>
                     </div>
                     <!-- End of Transaction ID -->
                    <!-- Start of Members ID -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="q-pa-xs">
                                <q-select
                                    color="teal-4"
                                    v-model="qr"
                                    :options="membersname"
                                    label="Member's ID"
                                >
                                    <template class="q-pa-xs" v-slot:append>
                                    <q-icon name="perm_identity" />
                                    </template>
                                </q-select>
                        </div>
                     </div>
                     <!-- End of Members ID -->
                     <!-- Start of Members Name -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="q-pa-xs">
                            <q-input color="teal-4" v-model="membersname" label="Members name" />
                        </div>
                     </div>
                     <!-- End of Members Name -->
                      <!-- Start of OR number -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="q-pa-xs">
                            <q-input color="teal-4" v-model="recieptnumber" label="Official Reciept Number" mask="###########" />
                        </div>
                     </div>
                     <!-- End of OR number -->
                    <!-- Start of Management Fee -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <span class="text-uppercase text-teal-4">Fees</span>
                        <div class="q-pa-xs">
                            <q-input color="teal-4" v-model="managementfee" label="Management Fee" mask="######" />
                        </div>
                    </div>
                    <!-- End of Management Fee -->
                    <!-- Start of Share of Stocks -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <span class="text-white">ABC</span>
                    <div class="q-pa-xs">
                      <q-input color="teal-4" v-model="shareofstocks" label="Share of Stocks" mask="######" />
                    </div>
                  </div>
                    <!-- End of Share of Stocks -->
                     <!-- Start of Forfeited Share -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <span class="text-white">ABC</span>
                    <div class="q-pa-xs">
                      <q-input color="teal-4" v-model="forfeitedshare" label="Forfeited Share" mask="######" />
                    </div>
                  </div>
                    <!-- End of Share of Stocks -->
                     <!-- Start of Savings Deposit -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <span class="text-white">ABC</span>
                    <div class="q-pa-xs">
                      <q-input color="teal-4" v-model="savingsdeposit" label="Savings Deposit" mask="######" />
                    </div>
                  </div>
                    <!-- End of Savings Deposit -->
                    <!-- Start of Accounts Recievable -->
                    
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-sm">
                        <div class="q-pa-xs">
                            <q-input color="teal-4" v-model="accountsrecievable" label="Accounts Recievable" mask="######" />
                        </div>
                    </div>
                    <!-- End of Accounts Recievable -->
                     <!-- Start of Advances -->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-sm">
                        <div class="q-pa-xs">
                            <q-input color="teal-4" v-model="advances" label="Advances" mask="######" />
                        </div>
                    </div>
                    <!-- End of Advances -->
                    <!-- Start of Date -->
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-sm">
                            <div class=" q-pa-xs">
                            <q-input color="teal-4" label="Year/Month/Date" v-model="paymentdate" mask="date" hint="Date" :rules="['date']">
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
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mt-sm">
                              <div class="q-pa-xs">
                                <q-input color="teal-4" v-model="totalamount" label="Total Amount"/>
                              </div>
                        </div>
                    <!-- End of Total Amount -->
                     <!-- Start of Description-->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="q-pa-xs">
                             <span class="text-uppercase text-teal-4">Others</span>
                             <q-input color="teal-4" v-model="description" label="Description" autogrow/>
                        </div>
                    </div>
                    <!-- End of Description -->
                     <!-- Start of Amount-->
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="q-pa-xs">
                             <span class="text-white">Others</span>
                            <q-input color="teal-4" v-model="descriptionamount" label="Amount" mask="₱ ###########" />
                        </div>
                     </div>
                     <!-- End of Amount -->
                     <!-- Start of Blank Space -->
                      <div class="q-mb-lg q-pb-lg">
                        <div class="q-pa-md"></div>
                      </div>
                      <!-- End of Blank Space -->
                     <!-- Start of Add Payment button -->
                    
                     <!-- End of Add Payment button -->
                
                  <div class="absolute-bottom-right">
                        <div class="q-mt-lg">
                            <q-btn class="text-pink-4" icon-right="check" label="Add Payment" color="white" />
                        </div>
                 </div>
                </div>
          </q-card-section>
          </q-card>
       </div>
    </div>
</template>

<script>
import Vue from "vue";
import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);


export default {
    data(){
        return{
            scanner: false,
            qr: '',
            qr2: '',
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
    },
    methods: {
        PayFee(){
        this.$firestore.Transactions.doc(this.datetodaydata).collection('Payment').set(this.Payment)
        },
        onDecode (decodedString) {
            if(decodedString.substring(0,1) == 'D'){
                this.qr = decodedString.substring(9,21)
                this.qr2= decodedString.substring(32, 44)
                this.scanner = false
            }else{
                this.qr = decodedString.substring(11,23)
                this.scanner = false
            }
        },
        datetoday(){
        var myDate = new Date();
        var month = ('0' + (myDate.getMonth() + 1)).slice(-2);
        var date = ('0' + myDate.getDate()).slice(-2);
        var year = myDate.getFullYear();
        var formattedDate = year + '-' + month + '-' + date;
        this.datetodaydata = formattedDate;
        }   
        
    },
    mounted () {
        this.datetoday()
    }
    
}
</script>

<style scoped>
.q-field--focused, .q-field--standard, .q-field--float{
    color: teal;
}
</style>