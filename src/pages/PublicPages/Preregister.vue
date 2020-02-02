<template>
<div class="q-pa-md">

    <div class="q-pa-md doc-container">
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
                @submit="register"
                @reset="onReset"
                class="q-gutter-md"
                >
                    <div>
                        <h4 class="row justify-center items-center" style="color: #26A69A;">Application Form</h4>

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
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
              </q-card-section>
          </q-card>
        </div>
      </div>    
    </div> 


    
  </div>
</template> 

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
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
    // onSubmit () {
    //   if (this.accept !== true) {
    //     this.Notify({
    //       color: 'red-5',
    //       textColor: 'white',
    //       icon: 'warning',
    //       message: 'You need to accept the license and terms first'
    //     })
    //   }
    //   else {
    //     this.Notify({
    //       color: 'green-4',
    //       textColor: 'white',
    //       icon: 'cloud_done',
    //       message: 'Submitted'
          
    //     })
                  
    //   }
    // },
    onReset () {
      this.FirstName = null
      this.LastName = null
      this.accept = false
    }
  }
}
</script>