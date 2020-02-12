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

         <div class="q-pa-md doc-container">
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
                          Address and Contact Details
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                        
                        <q-input standard v-model="PreRegData.Address" label="Address"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Phone" label="Phone No."
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Email" label="Email Address"
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
                        
                        <div>
                          <strong class="row justify-center items-center" style="color: #26A69A;">
                            {{PreRegData.Designation == 'Driver' ? 'License' : 'Valid ID'}}
                          </strong>
                          <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                          <img :src="imageUrl" width='300' height='150'>

                          <q-input 
                          type="file"
                          :hint="PreRegData.Designation == 'Driver' ? 'License Picture' : 'ID Picture'"
                          accept="image/*" 
                          @change="onFilePicked"
                          @onfocus="resetimginput"
                          ref="imginput"
                          lazy-rules
                          :rules="[ val => imageUrl && imageUrl.length > 0 || 'Please attach ID']"
                          >
                            <template v-slot:prepend>
                              <q-icon name="attach_file"/>
                            </template>
                          </q-input>

                        <q-input standard v-model="PreRegData.LicenseNo" 
                        :label="PreRegData.Designation == 'Driver' ? 'License No.' : 'ID No.'"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard stack-label 
                        v-model="PreRegData.LicenseExp" 
                        label="Expiration Date"
                        type="date"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />                    
                        </div> 
                    </div>

                    <div>
                        <q-btn label="Submit" 
                        type="submit" 
                        class="full-width	justify-center items-center q-mb-md" 
                        color="primary"/>
       
                        <q-btn label="Reset" 
                        type="reset" color="primary" 
                        flat class="full-width justify-center items-center q-ml-sm" />                    
                    </div>
                </q-form>
              </q-card-section>
          </q-card>
        </div>
      </div>    
    </div> 

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" ref="stepbtn"></q-btn>
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>


      <q-step
        :name="3"
        title="Wait for a Confirmation Email"
        icon="add_comment"
      >
        Your Application will be subjected to  evaluation. 
        Upon approval an email will be sent to you. 
        In it, we will provide further instructions to complete your application.
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish"></q-btn>
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm"></q-btn>
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
        CivilStatus: 'Single',
        BirthPlace: 'a',
        BirthDate: '2020-02-12',
        Address:'a',
        Phone:'1121212',
        Email:'sasas@gmail.com',
        Occupation: 'a',
        EmployerCompany: 'a',
        Salary: '1',
        OtherIncome: 'a',
        RelativeName: 'a',
        Relationship: 'a',
        NoDependents: '1',
        LicenseNo:'',
        LicenseExp:'',
        Designation: 'a',
        MembershipFee: 'To be Paid',
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
    ...mapActions('store', ['preRegData']),
    regPre(){
      this.preRegData(this.PreRegData);
    },
    dbtncolor(){
      if(this.PreRegData.Designation == 'Driver'){
        this.dbtn1 = 'secondary'
        this.dbtn2 = 'primary'
      }else if (this.PreRegData.Designation == 'Operator'){
        this.dbtn1 = 'primary'
        this.dbtn2 = 'secondary'
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
    },
    onSubmit () {
     this.regPre()
     this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        });
        // setTimeout(this.$refs.stepbtn.click(), 3000)
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
    },
    resetimginput(){
      this.$refs.imginput.resetValidation()
    }
  },
  mounted(){
    this.datetoday();
  }
}
</script>
