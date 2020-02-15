<template>
    <div class="q-pa-md">
        <q-card class="my-card" flat bordered>
        <q-card-actions align="right">
          <q-btn @click="inception = true" flat v-if="MemberData.MembershipFee">
            Membership Fee: {{ MemberData.MembershipFee }}
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
            <q-btn @click="printDiv('page')" flat label="Print Contract"/>
            <q-btn @click="readonly = !readonly; updateMemberData()" color="primary" flat label="Update"/>
            <q-btn color="primary" flat label="Print ID"/>
            <q-btn color="primary" flat label="Resign"/>
            
        </q-card-actions>

        <q-separator />

        <q-card-section class="row">
        <q-card-section class="col-md-4 col-sm-12 col-xs-12 q-pt-md">
            <img
            style="height:200px; width:200px; border-radius: 50%;"
            class="rounded-borders"
            :src="MemberData.imageUrlPro"
            v-if="!loading"
            />
            <q-spinner
            color="primary"
            width='150' 
            height='150'
            v-if="loading"
            />
          <q-btn @click="onFileClick1">Change Profile Picture</q-btn>
          <input type="file" accept="image/*" ref="fileInput1" @change="onFilePickedPro" v-show="false">


            <div class="text-h5 q-mt-sm q-ma-md">Member ID: {{ penRegId }}</div>
            <div class="q-pa-md">
              <q-input 
              v-model="MemberData.FirstName" 
              label="First Name" 
              >
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.LastName" label="Last Name" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup"/>
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-select v-model="MemberData.Designation" :options="['Driver', 'Operator', 'Other']" label="Designation" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-select>
            </div>

            <div class="q-pa-md">
              <q-select v-model="MemberData.CivilStatus" label="Civil Status" :options="['Single', 'Married', 'Widow']" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-select>
            </div>
        </q-card-section>

        <q-card-section class="col-md-4 q-pt-md">
            <div class="q-pa-md">
              <q-input v-model="MemberData.BirthDate" label="BirthDate" stack-label type="date" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.BirthPlace" label="BirthPlace" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

          <div class="q-pa-md">
              <q-input v-model="MemberData.Occupation" label="Occupation" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.EmployerCompany" label="Employer or Office" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.OtherIncome" label="Other Sources of Income" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.RelativeName" label="Nearest Relative" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.Relationship" label="Relationship" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.NoDependents" label="Number of Dependents" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
          
        </q-card-section>

        <q-card-section class="col-md-4 col-sm-12 col-xs-12 q-pt-md">

          <div class="col-sm-4">
            <q-spinner
            color="primary"
            width='150' 
            height='150'
            v-if="loading1"
            />
              <q-img
                class="rounded-borders"
                :src="MemberData.imageUrlLic"
                v-if="!loading1"
            />

          <q-btn @click="onFileClick2">Change License Picture</q-btn>
          <input type="file" accept="image/*" ref="fileInput2" @change="onFilePickedLic" v-show="false">

          </div>

          <div class="col-sm-4">
              <div class="q-pa-md">
              <q-input v-model="MemberData.LicenseNo" label="License No." readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
        </div>

        <div class="col-sm-4 col-sm-12 col-xs-12">
              <div class="q-pa-md">
              <q-input v-model="MemberData.LicenseExp" label="License Expiration" stack-label type="date" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
        </div>

        <div class="q-pa-md">
              <q-input v-model="MemberData.Address" label="Adress" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.Phone" label="Phone" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>

            <div class="q-pa-md">
              <q-input v-model="MemberData.Email" label="Email" readonly>
                <template v-slot:before>
                 <q-icon name="mdi-human-handsup" />
                </template>
              </q-input>
            </div>
            <q-btn @click="log" lable="sssss" />
        </q-card-section>
      </q-card-section>
    </q-card>

        <div>
            <q-form
              class="q-gutter-md"
              id="page"
              v-show="false"
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
                  <br> <span style="float:left"> Name: {{ MemberData.FirstName }}  {{ MemberData.LastName }} </span> 
                      <span style="float:right">Civil Status:  {{ MemberData.CivilStatus }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                      <br><span style="float:left"> BirthPlace: {{ MemberData.BirthPlace }} </span> 
                    <span style="float:right"> Date of birth:  {{ MemberData.BirthDate }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                    <br><span style="float:left"> Present Address: {{ MemberData.Address }} </span> 
                  <br><span style="float:left"> Occupation: {{ MemberData.Occupation }} </span> 
                <br><span style="float:left"> Employer or office: {{ MemberData.EmployerCompany }} </span>
                <span style="float:right"> Salary:  {{ MemberData.Salary }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                <br><span style="float:left"> Other sources of income: {{ MemberData.OtherIncome }} </span> 
                <br><span style="float:left"> Nearest relative: {{ MemberData.RelativeName }} </span>
                <span style="float:right"> Relationship: {{ MemberData.Relationship }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                <br><span style="float:left"> Number of Dependents: {{ MemberData.NoDependents }} </span>

                <p>&nbsp;</p>
                <h6 style="text-align: center;">EARN AND SAVE THE COOPERATIVE WAY</h6>
              </div>
            </q-form>
        </div>
    </div>
</template>

<script>
import { firebaseDb, firebaseSto } from 'boot/firebase';

// import { mapActions } from 'vuex'
// import Vue from 'vue';
// import VueQrcode from '@chenfengyuan/vue-qrcode'

// Vue.component(VueQrcode.name, VueQrcode);

export default {
    data(){
        return{
            readonly: 'true',
            loading: false,
            loading1: false,
            datetodaydata: '',
            inception: false,
            Payment: {
              Fee: 'Membership Fee',
              MemberID: this.penRegId,
              OrNo: '',
              Amount: ''
            },
            // MemberData: {
            //   FirstName: '',
            //   LastName: '',
            //   CivilStatus: '',
            //   BirthPlace: '',
            //   BirthDate: '',
            //   Address:'',
            //   Phone:'',
            //   Email:'',
            //   Occupation: '',
            //   EmployerCompany: '',
            //   Salary: '',
            //   OtherIncome: '',
            //   RelativeName: '',
            //   Relationship: '',
            //   NoDependents: '',
            //   LicenseNo:'',
            //   LicenseExp:'',
            //   Designation: '',
            //   imageFile: []
            // },
            MemberData: [],
            MemberDataUPD: []
            // imageUrlPro: this.MemberData.imageUrl0,
            // imageUrlLic: this.MemberData.imageUrl1
        }
    },
    props: ['penRegId'],
      firestore () {
        return {
            // Doc
            MemberData: firebaseDb.collection('MemberData').doc(this.penRegId),
            MemberDataUPD: firebaseDb.collection('MemberData')

        }
      },
    methods: {
      imglog(){
        console.log(this.MemberData.imageFile)
      },
      updateMemberData () {
          // this.$firestore.MemberDataUPD.doc(memberdata[this.penRegId]).update(this.MemberData)
          this.$firestore.MemberData.set(this.MemberData);

      },
      // ...mapActions('store', ['AddPayment']),
      // PayFee(){
      //   this.AddPayment({
      //     Payment: this.Payment,
      //     Date: this.datetodaydata
      //   })
      // },
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
      onFileClick1(){
        this.$refs.fileInput1.click()
      },  
      onFileClick2(){
        this.$refs.fileInput2.click()
      },
      onFilePickedPro(e){
        this.loading = true
        let file = e.target.files[0]
        var storageRef = firebaseSto.ref('mempic/'+ file.name)
        let uploadTask = storageRef.put(file)
        uploadTask.on('state_changed', (snapshot) => {

        },(error) => {

        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.MemberData.imageUrlPro = downloadURL
            console.log('ProfilePic:', downloadURL)
          }).then(() => {
            this.loading = false
          })
        })
        this.updateMemberData()
      },
      onFilePickedLic(e){
        this.loading1 = true
        let file = e.target.files[0]
        var storageRef = firebaseSto.ref('mempic/'+ file.name)
        let uploadTask = storageRef.put(file)
        uploadTask.on('state_changed', (snapshot) => {

        },(error) => {

        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.MemberData.imageUrlLic = downloadURL
            console.log('ProfileLic:', downloadURL)
          }).then(() => {
            this.loading1 = false
          })
        })
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