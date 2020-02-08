<template>
<div class="q-pa-md">

    <div class = "col-xs-12 col-sm-6 col-md-6 q-pa-md">
            <q-card class="q-pa-md doc-container" style="opacity: 0.7;">
              <q-card-section>
                  <div class="text-h6">New GSIS Transport Cooperative</div>
              </q-card-section>
            
              <q-card-section class="q-pt-none text-center text-justify">
                <div class="text-subtitle2">We are New GSIS Transport Cooperative. 
                    We accept any applicant irregardless if they are transport operator or drivers of routes under the management of the transport cooperaive. 
                    Interested Apllicants can start by undergoing our online Pre-registration. Information provided will be evaluated by the cooperative.
                    However, applicants are advised to personally visit our office to properly apply for membership.
              </div>
              </q-card-section>
            </q-card>
      </div>

      <q-stepper
      v-model="step"
      color="primary"
      animated
      vertical
    >
      <q-step
        :name="1"
        title="Apply As?"
        icon="settings"
        :done="step > 1"
      >

        <div class="row justify-center">
          <q-btn class="col q-ma-md" :color="dbtn1" @click="PreRegData.Designation = 'Driver'; dbtncolor();" label="Driver"/>
          <q-btn class="col q-ma-md" :color="dbtn2" @click="PreRegData.Designation = 'Operator'; dbtncolor();" label="Operator" />
          <q-btn class="col q-ma-md" :color="dbtn3" @click="PreRegData.Designation = 'Other'; dbtncolor();" label="Other" />
        </div>
        
        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Answer the Application Form"
        icon="settings"
        :done="step > 2"
      >
        Fill the fields with the rerquired information

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
                        
                        <q-input standard v-model="PreRegData.FirstName" label="First Name"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.LastName" label="Last Name"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-select v-model="PreRegData.CivilStatus" 
                        :options="['Single', 'Married', 'Widow']" 
                        label="Civil Status" 
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Birth
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                         <q-input standard v-model="PreRegData.BirthDate" stack-label label="Birthdate"
                        type="date"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.BirthPlace" label="Birthplace"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                         <strong class="row justify-center items-center" style="color: #26A69A;">
                           Current Address
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                        
                        <q-input standard v-model="PreRegData.Address" label="Address"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Employment
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PreRegData.Occupation" label="Occupation"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.EmployerCompany" label="Employer/ Company"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Salary" label="Salary"
                        type="number"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.OtherIncome" label="Other Sources of Income"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Family Background
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PreRegData.RelativeName" label="Nearest Relative"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Relationship" label="Relationship"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.NoDependents" label="Number of Dependents"
                        type="number"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        
                        <div v-if="PreRegData.Designation == 'Driver'">
                          <strong class="row justify-center items-center" style="color: #26A69A;">
                            License Details
                          </strong>
                          <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                          <img :src="imageUrl" width='300' height='150'>

                          <q-input 
                          type="file"
                          v-model="PreRegData.LicensePic" 
                          hint="License Picture"
                          accept="image/*"
                          @change="onFilePicked">
                            <template v-slot:prepend>
                              <q-icon name="attach_file" />
                            </template>
                          </q-input>

                        <q-input standard v-model="PreRegData.LicenseNo" label="License Number"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard stack-label v-model="PreRegData.LicenseExp" label="License Expiration Date"
                        type="date"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />                    
                        </div> 
                    </div>

                    

                    
                    <div>
                        <q-btn label="Submit" type="submit" class="full-width	 justify-center items-center q-mb-md" color="primary"/>
       
                        <q-btn label="Reset" type="reset" color="primary" flat class="full-width	 justify-center items-center q-ml-sm" />                    
                    </div>
                </q-form>
              </q-card-section>
          </q-card>
        </div>
      </div>    
    </div> 

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue"></q-btn>
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Print the Application Form"
        icon="create_new_folder"
        :done="step > 3"
      >
        <div>
          <q-form
            @submit="onSubmit"
            @reset="onReset"
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
              <p style="padding-left: 75px;"><span style="text-decoration: underline;"><span class="w8qArf">&nbsp;</span><span class="LrzXr">{{datetodaydata}}</span></span></p>
              <p style="padding-left: 100px;">Date</p>
              <p><span style="text-decoration: underline;"><span class="w8qArf">&nbsp;</span><span class="LrzXr">65-C Shorthorn St, Project 8, Quezon City</span></span></p>
              <p style="padding-left: 100px;">Place</p>

              <div id="personaldata">
              <strong>PERSONAL DATA</strong>
                <br> <span style="float:left"> Name: {{ PreRegData.FirstName }} {{ PreRegData.LastName }} </span> 
                    <span style="float:right">Civil Status: {{ PreRegData.CivilStatus }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                    <br><span style="float:left"> BirthPlace: {{ PreRegData.BirthPlace }} </span> 
                  <span style="float:right"> Date of birth: {{ PreRegData.BirthDate }}  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
                  <br><span style="float:left"> Present Address: {{ PreRegData.Address }}</span> 
                <br><span style="float:left"> Occupation: {{ PreRegData.Occupation }} </span> 
              <br><span style="float:left"> Employer or office: {{ PreRegData.EmployerCompany }} </span>
              <span style="float:right"> Salary: {{ PreRegData.Salary }}  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
              <br><span style="float:left"> Other sources of income: {{ PreRegData.OtherIncome }} </span> 
              <br><span style="float:left"> Nearest relative: {{ PreRegData.RelativeName }} </span>
              <span style="float:right"> Relationship: {{ PreRegData.Relationship }} &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> 
              <br><span style="float:left"> Number of Dependents: {{ PreRegData.NoDependents }} </span>

              <p>&nbsp;</p>
              <h6 style="text-align: center;">EARN AND SAVE THE COOPERATIVE WAY</h6>
            </div>
          </q-form>
        </div>
        <q-btn @click="printDiv('page')" label="Print" class="full-width justify-center items-center q-mb-md" color="primary"/>


        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue"></q-btn>
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Wait for a Confirmation Email and Visit our Office"
        icon="add_comment"
      >
        Check your e-mail for additional instructions and supporting douments needed for the application. Our office is located at 65-C Shorthorn St, Project 8, Quezon City. 

        <q-stepper-navigation>
          <q-btn color="primary" label="Finish"></q-btn>
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>
    </q-stepper> 
  </div>
</template> 

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      step: 1,
      PreRegData: {
        FirstName: 'a',
        LastName: 'a',
        CivilStatus: 'a',
        BirthPlace: 'a',
        BirthDate: '2020-02-12',
        Address:'a',
        Occupation: 'a',
        EmployerCompany: 'a',
        Salary: '1',
        OtherIncome: 'a',
        RelativeName: 'a',
        Relationship: 'a',
        NoDependents: '1',
        LicensePic:'',
        LicenseNo:'a',
        LicenseExp:'2020-02-12',
        Designation: 'a',
        LicenseImage: null
      },
      accept: false,
      dbtn1: 'primary',
      dbtn2: 'primary',
      dbtn3: 'primary',
      datetodaydata: '',
      imageUrl: null
      
    }
  },

  methods: {
    ...mapActions('store', ['preReg']),
    register(){
      this.preReg(this.PreRegData);
    },
    dbtncolor(){
      if(this.PreRegData.Designation == 'Driver'){
        this.dbtn1 = 'secondary'
        this.dbtn2 = 'primary'
        this.dbtn3 = 'primary'
      }else if (this.PreRegData.Designation == 'Operator'){
        this.dbtn1 = 'primary'
        this.dbtn2 = 'secondary'
        this.dbtn3 = 'primary'
      }else if (this.PreRegData.Designation == 'Other'){
        this.dbtn1 = 'primary'
        this.dbtn2 = 'primary'
        this.dbtn3 = 'secondary'
      }
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
      this.PreRegData.LicenseImage = files[0]
      console.log(this.PreRegData.LicenseImage)
    },
    sastep(){
      console.log(this.step);
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
    },
    onReset () {
      this.FirstName = null
      this.LastName = null
      this.accept = false
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
  mounted(){
    this.datetoday();
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