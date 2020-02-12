<template>
    <div class="q-pa-md">
        <q-card class="my-card" flat bordered>
        <q-card-actions align="right">
          <q-btn @click="inception = true" flat v-if="PenReg.MembershipFee">
            Membership Fee: {{ PenReg.MembershipFee }}
            </q-btn>

            <div>
              <q-dialog v-model="inception">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Membership Fee Payment</div>
                  </q-card-section>

                  <!-- <q-card-section class="q-pt-none">
                    <div class="q-pa-md">
                      <q-input v-model="Payment.MemberID" label="Member ID" readonly>
                        <template v-slot:before>
                        <q-icon name="mdi-human-handsup" />
                        </template>
                      </q-input>
                    </div>
                  </q-card-section> -->

                  <q-card-section class="q-pt-none">
                    <div class="q-pa-md">
                      <q-input v-model="Payment.OrNo" label="OR No">
                        <template v-slot:before>
                        <q-icon name="mdi-human-handsup" />
                        </template>
                      </q-input>
                    </div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    <div class="q-pa-md">
                      <q-input v-model="Payment.Amount" label="Amount">
                        <template v-slot:before>
                        <q-icon name="mdi-human-handsup" />
                        </template>
                      </q-input>
                    </div>
                  </q-card-section>

                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Pay Fee" @click="PayFee" />
                    <q-btn flat label="Close" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </div>

            <q-btn flat round icon="event"/>
            <q-btn @click="printDiv('page')" flat>
            Print Contract
            </q-btn>
            <q-btn flat color="primary">
            Print ID
            </q-btn>
            <q-btn flat>
            Update
            </q-btn>
            <q-btn flat color="primary">
            Resign
            </q-btn>
        </q-card-actions>

        <q-separator />

        <q-card-section class="row">
        <q-card-section class="col-md-4 col-sm-12 col-xs-12 q-pt-md">
            <q-img
            style="height:200px; width:200px; border-radius: 50%;"
            class="rounded-borders"
            :src="PenReg.imageUrl"
          />
            <div class="text-h5 q-mt-sm q-ma-md">Member ID: {{ penRegId }}</div>
            <div class="q-pa-md">
              <q-input v-model="PenReg.FirstName" label="First Name" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.LastName" label="Last Name" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-select v-model="PenReg.Designation" :options="['Driver', 'Operator', 'Other']" label="Designation" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-select>
            </div>

            <div class="q-pa-md">
              <q-select v-model="PenReg.CivilStatus" label="Civil Status" :options="['Single', 'Married', 'Widow']" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-select>
            </div>
        </q-card-section>

        <q-card-section class="col-md-4 q-pt-md">
            <div class="q-pa-md">
              <q-input v-model="PenReg.BirthDate" label="BirthDate" stack-label type="date" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.BirthPlace" label="BirthPlace" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

          <div class="q-pa-md">
              <q-input v-model="PenReg.Occupation" label="Occupation" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.EmployerCompany" label="Employer or Office" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.OtherIncome" label="Other Sources of Income" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.RelativeName" label="Nearest Relative" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.Relationship" label="Relationship" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.NoDependents" label="Number of Dependents" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
          
        </q-card-section>

        <q-card-section class="col-md-4 col-sm-12 col-xs-12 q-pt-md">

          <div class="col-sm-4">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
          </div>

          <div class="col-sm-4">
              <div class="q-pa-md">
              <q-input v-model="PenReg.LicenseNo" label="License No." readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
        </div>

        <div class="col-sm-4 col-sm-12 col-xs-12">
              <div class="q-pa-md">
              <q-input v-model="PenReg.LicenseExp" label="License Expiration" stack-label type="date" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
        </div>

        <div class="q-pa-md">
              <q-input v-model="PenReg.Address" label="Adress" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.Phone" label="Phone" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="PenReg.Email" label="Email" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
        </q-card-section>
      </q-card-section>
    </q-card>

        <div>
            <q-form
              class="q-gutter-md"
              id="page"
            >
              <p>&nbsp;</p>
              <h6 class="h6">APPLICATION FOR MEMBERSHIP</h6>
              
              <span style="padding-left: 150px;">I hereby apply for membership to the <strong>New GSIS Transport Service Cooperative.</strong></span>
                <br><span style="text-align: left;">&nbsp;I agree to obey faithfully its rules and regulations as set down in its Articles of Cooperation and Bylaws, the decisions of the general membership meetings and those of the Board of Directors.</span>
                <br><span style="text-align: left; padding-left: 30px;">I hereby pledge to:</span>
                <ol>
                <li style="text-align: left; padding-left: 30px;">Attend and finish the prescribed membership education courses.</li>
                <li style="text-align: left; padding-left: 30px;">Pay the membership fee of P 500.</li>
                <li style="text-align: left; padding-left: 30px;">Participate in the following savings program:
                <ol style="list-style-type: lower-alpha;">
                <li style="text-align: left; padding-left: 30px;">Subscribed fo at least 18 shares and pay for them either in lumpsum or installment, under the terms and conditions prescribed in the Membership Agreement.</li>
                <li style="text-align: left; padding-left: 30px;">Contribute daily/weekly/bi-monthly/monthly atleast 2% of my salary into the share capital; and</li>
                <li style="text-align: left; padding-left: 30px;">Contribute into the share capital at least 50% of the annual interest on capital and patronage refund due me.</li>
                </ol>
                </li>
                <li style="text-align: left; padding-left: 30px;">Comply with the membership and subscription agreement. For your consideration, I hereby attach my information sheet.</li>
                </ol>
                <br><span style="float:right"> .................................................</span>
                <p style="float:right">Signature</p>
                  
                <!-- <p style="padding-left: 90px;">&nbsp;Date</p> -->
                <p style="padding-left: 75px;"><span style="text-decoration: underline;"><span class="w8qArf">&nbsp; {{ datetodaydata }} </span><span class="LrzXr"> </span></span></p>
                <p style="padding-left: 100px;">Date</p>
                <p><span style="text-decoration: underline;"><span class="w8qArf">&nbsp;</span><span class="LrzXr">65-C Shorthorn St, Project 8, Quezon City</span></span></p>
                <p style="padding-left: 100px;">Place</p>

                <div id="personaldata">
                <strong>PERSONAL DATA</strong>
                  <br> <span style="float:left"> Name: {{ PenReg.FirstName }}  {{ PenReg.LastName }} </span> 
                      <span style="float:right">Civil Status:  {{ PenReg.CivilStatus }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                      <br><span style="float:left"> BirthPlace: {{ PenReg.BirthPlace }} </span> 
                    <span style="float:right"> Date of birth:  {{ PenReg.BirthDate }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                    <br><span style="float:left"> Present Address: {{ PenReg.Address }} </span> 
                  <br><span style="float:left"> Occupation: {{ PenReg.Occupation }} </span> 
                <br><span style="float:left"> Employer or office: {{ PenReg.EmployerCompany }} </span>
                <span style="float:right"> Salary:  {{ PenReg.Salary }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                <br><span style="float:left"> Other sources of income: {{ PenReg.OtherIncome }} </span> 
                <br><span style="float:left"> Nearest relative: {{ PenReg.RelativeName }} </span>
                <span style="float:right"> Relationship: {{ PenReg.Relationship }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                <br><span style="float:left"> Number of Dependents: {{ PenReg.NoDependents }} </span>

                <p>&nbsp;</p>
                <h6 style="text-align: center;">EARN AND SAVE THE COOPERATIVE WAY</h6>
              </div>
            </q-form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
// import Vue from 'vue';
// import VueQrcode from '@chenfengyuan/vue-qrcode'

// Vue.component(VueQrcode.name, VueQrcode);

export default {
    data(){
        return{
            datetodaydata: '',
            inception: false,
            Payment: {
              Fee: 'Membership Fee',
              MemberID: this.penRegId,
              OrNo: '',
              Amount: ''
            }
        }
    },
    methods: {
      ...mapActions('store', ['AddPayment']),
      PayFee(){
        this.AddPayment({
          Payment: this.Payment,
          Date: this.datetodaydata
        })
      },
      printDiv(divName){
        const prtHtml = document.getElementById(divName).innerHTML;
        // Get all stylesheets HTML
        let stylesHtml = '';
        for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
            stylesHtml += node.outerHTML;
        }
        // Open the print window
        const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

        WinPrint.document.write(`<!DOCTYPE html>
        <html>
            <head>
            ${stylesHtml}
            </head>
            <body>
            ${prtHtml}
            </body>
        </html>`);

        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      },
      datetoday(){
      var myDate = new Date();
      var month = ('0' + (myDate.getMonth() + 1)).slice(-2);
      var date = ('0' + myDate.getDate()).slice(-2);
      var year = myDate.getFullYear();
      var formattedDate = year + '-' + month + '-' + date;
      this.datetodaydata = formattedDate;
      },
      onFilePicked(event){
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0){
          return alter('Please add a valid file!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
      },
      log(){
        console.log(this.operatorprofile);
      },
      addrow(){
       this.units.push(units[0]); // what to push unto the rows array?
      },
      removeRow(index){
        this.units.splice(index,1); // why is this removing only the last row?
      },
      addLine () {
        let checkEmptyLines = this.lines.filter(line => line.number === null)
        if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
        this.lines.push({
            number: null,
      })
    },
     removeLine (lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1)
    }   
 },
 props: ['penRegId'],
 computed: {
    // qrvalue: function() {
    //   return this.MemberData.MemberId;
    // },
    PenReg() {
      return this.$store.state.store.MemberData[this.penRegId]
    }
  },
  mounted () {
    // this.addLine()
    this.datetoday()
  }
}
</script>

<style>
  .h6 {
    text-align: center;
    text-decoration: overline underline;
  }

  .page {
    width: 21cm;
    min-height: 29.7cm;
    padding: 2cm;
    margin: 1cm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  @page {
    size: A4;
    margin: 0;
  }
  @media print {
    html, body {
      width: 210mm;
      height: 400mm;
    }
  }
</style>