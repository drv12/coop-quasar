<template>
<div class="q-pa-md">
   <div class="q-pa-md doc-container" id="printdiv">
      <div class="row  justify-center">
        <div 
          class="col-xs-12 col-sm-12 col-md-10 q-pa-md"
          >

          <q-card
          class="my-card text-white"
          inline
          >
              <q-card-section>
                <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
                >
                    <div>
                        <h4 class="row justify-center items-center" style="color: #26A69A;">Information Sheet</h4>

                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Personal Data
                        </strong>

                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                        
                        <q-input standard v-model="PenReg.FirstName" label="First Name"
                        disable
                        />
                        <q-input standard v-model="PenReg.LastName" label="Last Name"
                        disable
                        />
                        <q-select v-model="PenReg.CivilStatus" 
                        label="Civil Status" 
                        disable
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Birth
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                         <q-input standard v-model="PenReg.BirthDate" stack-label label="Birthdate"
                        type="date"
                        disable
                        />
                        <q-input standard v-model="PenReg.BirthPlace" label="Birthplace"
                        disable
                        />
                         <strong class="row justify-center items-center" style="color: #26A69A;">
                           Current Address
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                        
                        <q-input standard v-model="PenReg.Address" label="Address"
                        disable
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Employment
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PenReg.Occupation" label="Occupation"
                        disable
                        />
                        <q-input standard v-model="PenReg.EmployerCompany" label="Employer/ Company"
                        disable
                        />
                        <q-input standard v-model="PenReg.Salary" label="Salary"
                        type="number"
                        disable
                        />
                        <q-input standard v-model="PenReg.OtherIncome" label="Other Sources of Income"
                        disable
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Family Background
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PenReg.RelativeName" label="Nearest Relative"
                        disable
                        />
                        <q-input standard v-model="PenReg.Relationship" label="Relationship"
                        disable
                        />
                        <q-input standard v-model="PenReg.NoDependents" label="Number of Dependents"
                        disable
                        type="number"
                        />
                        
                        <div v-if="PenReg.Designation == 'Driver'">
                          <strong class="row justify-center items-center" style="color: #26A69A;">
                            License Details
                          </strong>
                          <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                          <img :src="PenReg.imageUrl" width='300' height='150'>

                        <q-input standard v-model="PenReg.LicenseNo" label="License Number"
                        disable
                        />
                        <q-input standard stack-label v-model="PenReg.LicenseExp" label="License Expiration Date"
                        type="date"
                        disable
                        />                    
                        </div> 
                    </div>
                </q-form>
              </q-card-section>
          </q-card>
        </div>
      </div>    
    </div> 
 
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
                <p style="padding-left: 75px;"><span style="text-decoration: underline;"><span class="w8qArf">&nbsp;</span><span class="LrzXr"> </span></span></p>
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
        <div class="row justify-center">
          <q-btn 
          class="col q-ma-md" 
          color="primary" 
          label="Approve"
          @click="loadPreReg(penRegId)"
          />

          <q-btn class="col q-ma-md" color="primary" label="Reject"/>
        </div>

        <q-btn @click="printDiv('page')" label="Print" class="full-width justify-center items-center q-mb-md" color="primary"/>
</div>
</template> 

<script>

export default {
  data () {
    return {
      
    }
  },
  props: ['penRegId'],
  computed: {
      PenReg() {
            return this.$store.state.store.PendingRegs[this.penRegId]
        }
  },
  methods: {
    loadPreReg(id) {
            this.$router.push('/admin/addmember/' + id)
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
    onSubmit () {
     this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        })    
        this.register();
    }
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