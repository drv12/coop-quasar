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
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
                >
                    <div v-for="(item, index) in PreRegFields" :key="index">

                        <strong :class=" item.visible + ' row justify-center items-center'" style="color: #26A69A;">
                            {{item.group}}
                        </strong>

                        <q-separator :class="item.visible + ' q-mb-md q-pt-xs'" color="secondary" inset hidden = 'true'/>
                        <q-input
                        standard
                        :type="item.type"
                        v-model="item.value"
                        :label="item.label"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Please type something']"
                        />
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
const PreRegFields = [
    {group:'Name',name: 'FirstName', label: 'First Name*', value:null},
    {group:'Name',name: 'LastName', label: 'Last Name*', value:null, visible:'hidden' },
    {group:'Birth Data',name: 'Birthplace', label: 'Birthplace*', value:null},
    {group:'Birth Data',name: 'Birthdate', label: 'Birthdate*', value:null, type: 'date', visible:'hidden' },
    {group:'Address',name: 'StreetAd', label: 'Street Address*', value:null},
    {group:'Address',name: 'Barangay', label: 'Barangay*', value:null, visible:'hidden' },
    {group:'Address',name: 'City', label: 'City*', value:null, visible:'hidden' },
    {group:'Employment',name: 'EmployerCompany', label: 'Employer or Company*', value:null},
    {group:'Employment',name: 'Salary', label: 'Salary*', value:null, type:'number', visible:'hidden' },
    {group:'Employment',name: 'OtherIncome', label: 'Other Sources of Income*', value:null, visible:'hidden' },
    {group:'Family',name: 'NearestRelative', label: 'Nearest Relative*', value:null},
    {group:'Family',name: 'Relationship', label: 'Relationship*', value:null, visible:'hidden' },
    {group:'Family',name: 'NoDependents', label: 'No. of Dependents*', value:null,  visible:'hidden', type: 'number' },
]

export default {
  data () {
    return {
      PreRegFields,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.FirstName = null
      this.LastName = null
      this.accept = false
    }
  }
}
</script>