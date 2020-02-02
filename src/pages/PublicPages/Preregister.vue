<template>
<div class="q-pa-md">

    <div class = "col-xs-12 col-sm-6 col-md-6 q-pa-md">
            <q-card class="q-pa-md doc-container" style="opacity: 0.7;">
              <q-card-section>
                  <div class="text-h6">New GSIS Transport Cooperative</div>
              </q-card-section>
            
              <q-card-section class="q-pt-none text-center text-justify">
                <div class="text-subtitle2">We are New GSIS Transport Cooperative. 
                    Our Cooperative is duly registered with the Cooperative Development Authority (CDA), 
                    the regulatory agency of the Government of the Republic of the Philippines
                     over matters concerning the development of cooperatives in the country.
              </div>
              </q-card-section>
            </q-card>
      </div>

      <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Answer the Application Form"
        icon="settings"
        :done="step > 1"
      >
        Fill the fields with the rerquired information

         <div class="q-pa-md doc-container" id="printdiv">
      <div class="row  justify-center">
        <div 
          class="col-xs-12 col-sm-6 col-md-8 q-pa-md"
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
                            Name
                        </strong>

                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                        
                        <q-input standard v-model="PreRegData.Name.FirstName" label="First Name"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Name.LastName" label="Last Name"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Birth
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                         <q-input standard v-model="PreRegData.BirthData.BirthDate" label="Birthdate"
                        type="date"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.BirthData.BirthPlace" label="Birthplace"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                         <strong class="row justify-center items-center" style="color: #26A69A;">
                            Address
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                        
                        <q-input standard v-model="PreRegData.Address.Street" label="Street"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Address.Barangay" label="Barangay"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Address.City" label="City"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Employment
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PreRegData.Employment.EmployerCompany" label="Employer/ Company"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Employment.Salary" label="Salary"
                        type="number"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Employment.OtherIncome" label="Other Sources of Income"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Family
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PreRegData.Family.NearestRelative.RelativeName" label="Nearest Relative"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Family.NearestRelative.Relationship" label="Relationship"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-input standard v-model="PreRegData.Family.NoDependents" label="Number of Dependents"
                        type="number"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                    </div>
                    
                    <q-toggle v-model="accept" label="I accept the license and terms" />

                    <div>
                        <q-btn label="Submit" type="submit" class="full-width	 justify-center items-center q-mb-md" color="primary"/>
       
                        <q-btn label="Reset" type="reset" color="primary" flat class="full-width	 justify-center items-center q-ml-sm" />                    
                    </div>
                </q-form>
                <button @click="printDiv('printdiv')">Print this component</button>
              </q-card-section>
          </q-card>
        </div>
      </div>    
    </div> 

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Print the Application Form"
        icon="create_new_folder"
        :done="step > 2"
      >
        Print the accomplished form and sign it

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue"></q-btn>
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Personally Pass the Signed Application to our Office"
        icon="add_comment"
      >
        Our office is located at "doon dito rito". 

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
        Name: {
        FirstName: '',
        LastName: ''
        },
        BirthData: {
        BirthPlace: '',
        BirthDate: ''
        },
        Address: {
        Street: '',
        Barangay: '',
        City: ''
        },
        Employment: {
        EmployerCompany: '',
        Salary: '',
        OtherIncome: ''
        },
        Family: {
        NearestRelative: {
          RelativeName: '',
          Relationship: ''
        },
        NoDependents: ''
        },
      },
      accept: false
    }
  },

  methods: {
    ...mapActions('store', ['preReg']),
    register(){
      this.preReg(this.PreRegData);
    },
    printDiv(divName){
			var printContents = document.getElementById(divName).innerHTML;
			var originalContents = document.body.innerHTML;

			document.body.innerHTML = printContents;

			window.print();

			document.body.innerHTML = originalContents;

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
    }
  }
}
</script>