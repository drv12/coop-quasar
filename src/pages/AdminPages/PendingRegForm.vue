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
                        readonly
                        />
                        <q-input standard v-model="PenReg.LastName" label="Last Name"
                        readonly
                        />
                        <q-select v-model="PenReg.CivilStatus" 
                        label="Civil Status" 
                        readonly
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Birth
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                         <q-input standard v-model="PenReg.BirthDate" stack-label label="Birthdate"
                        type="date"
                        readonly
                        />
                        <q-input standard v-model="PenReg.BirthPlace" label="Birthplace"
                        readonly
                        />
                         <strong class="row justify-center items-center" style="color: #26A69A;">
                           Current Address
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>
                        
                        <q-input standard v-model="PenReg.Address" label="Address"
                        readonly
                        />

                        <q-input standard v-model="PenReg.Phone" label="Phone"
                        readonly
                        />

                        <q-input standard v-model="PenReg.Email" label="Email"
                        readonly
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Employment
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PenReg.Occupation" label="Occupation"
                        v-if="PenReg.Designation == 'Operator'"
                        readonly
                        />
                         <q-input standard v-model="PenReg.Operator.Name" label="Operator"
                         v-if="PenReg.Designation == 'Driver'"
                        readonly
                        />
                        <q-input standard v-model="PenReg.EmployerCompany" label="Employer/ Company"
                        v-if="PenReg.Designation == 'Operator'"
                        readonly
                        />
                        <q-input standard v-model="PenReg.Salary" label="Salary"
                        type="number"
                        readonly
                        />
                        <q-input standard v-model="PenReg.OtherIncome" label="Other Sources of Income"
                        readonly
                        />
                        <strong class="row justify-center items-center" style="color: #26A69A;">
                            Family Background
                        </strong>
                        <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                        <q-input standard v-model="PenReg.RelativeName" label="Nearest Relative"
                        readonly
                        />
                        <q-input standard v-model="PenReg.Relationship" label="Relationship"
                        readonly
                        />
                        <q-input standard v-model="PenReg.NoDependents" label="Number of Dependents"
                        readonly
                        type="number"
                        />
                        
                        <div v-if="PenReg.Designation == 'Driver'">
                          <strong class="row justify-center items-center" style="color: #26A69A;">
                            License Details
                          </strong>
                          <q-separator class= "q-mb-md q-pt-xs" color="secondary" inset hidden = 'true'/>

                          <img :src="PenReg.imageUrlLic" width='300' height='150'>

                        <q-input standard v-model="PenReg.LicenseNo" label="License Number"
                        readonly
                        />
                        <q-input standard stack-label v-model="PenReg.LicenseExp" label="License Expiration Date"
                        type="date"
                        readonly
                        />                    
                        </div> 
                    </div>
                </q-form>
              </q-card-section>
              <q-separator/>
              <div class="row justify-center">
                <q-btn 
                class="col q-ma-md" 
                color="teal-4" 
                label="Approve"
                @click="regMember(); loadPreReg(mid)"
                />
                <q-btn class="col q-ma-md" 
                @click="rejectMember"
                color="teal-4" 
                label="Reject"/>
                <q-btn class="col q-ma-md" 
                color="teal-4" 
                label="Send Email"/>
              </div>
          </q-card>
          
        </div>
      </div>    
    </div> 
</div>
</template> 

<script>
import { firebaseDb, firefirestore,Auth2 } from 'boot/firebase';
import Swal from 'sweetalert2'

export default {
  data () {
    return {
       newMessage: '',
       PenReg: [],
       mid: ''
    }
  },
  props: ['penRegId'],
  firestore () {
    return {
        // Doc
        PenReg: firebaseDb.collection('PreRegPersonalData').doc(this.penRegId),
        MemberData: firebaseDb.collection('MemberData'),
        MemberID: firebaseDb.collection('Counter').doc("v65AIZI2jjNN2jlEv17N"),
    }
  },
  methods: {
    adduser(email, password){
      Auth2.createUserWithEmailAndPassword(email, password)
      .then(() => {
        let userId = Auth2.currentUser.uid
        console.log("User " + userId + " created successfully!");
        Auth2.signOut();

        this.$firestore.Users.doc(userId).set({
          Designation: this.PenReg.Designation,
          Email: email,
          FirstName: this.PenReg.FirstName,
          LastName: this.PenReg.LastName,
          MemberID: email.substring(0,12)
        })
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      })
    },
    regMember(){
      this.mid = 'NGTSC'+ (this.MemberID.MemberID + 1)
      this.PenReg.timestamp = firefirestore.FieldValue.serverTimestamp()
      this.$firestore.MemberData.doc(this.mid).set(this.PenReg)

      const increment = firefirestore.FieldValue.increment(1)
      this.$firestore.MemberID.update({ MemberID: increment })

      this.$firestore.PenReg.delete()

      Swal.fire({
        icon: 'success',
        title: 'Application has been approved',
        showConfirmButton: false,
        timer: 1500
      })
    },
    rejectMember(){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, reject application!'
      }).then((result) => {
        if (result.value) {
          this.$firestore.PenReg.delete()
          this.$router.replace('/admin/pendingreg/')
          Swal.fire(
            'Rejected!',
            'Application has been deleted.',
            'success'
          )
          
        }
      })
    },
    loadPreReg(id) {
            this.$router.replace('/admin/profile/' + id)
    }
  }
}
</script>
