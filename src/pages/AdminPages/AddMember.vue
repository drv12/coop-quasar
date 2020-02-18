<template>
  <div>
    <q-page>
    <h6 class="q-ma-none q-pl-md q-pt-md text-teal">Members <q-icon name="mdi-arrow-right-box" /> Add Members</h6>
     <q-separator />
       <div class="q-pa-md">    
         <div class="q-gutter-y-md full-width">
        <q-form @reset="Clear" >
          <div class="q-pa-md">
            <q-card class="q-pa-md">
           <q-card-section horizontal class="col">
             <!-- <span class="text-uppercase text-blue">Drivers Details</span> -->
             <div class="row">

                        <!-- Start of Upload Image -->
                   <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                     <div class="q-pa-md q-mt-xl q-pt-xl">
                          <div style=" text-align: center;">
                            <q-spinner
                              color="teal"
                              width='150' 
                              height='150'
                              v-if="loading"
                            />
                            <img 
                            v-if="!loading"
                            :src="MemberData.imageUrlPro" 
                            width='150' 
                            height='150' 
                            style="border-radius: 50%;">
                          </div>
                       <q-input 
                       color="teal-4"
                       type="file"
                       hint="Profile Picture"
                       accept="image/*"
                       @change="onFilePickedPro">
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-input>
                     </div>
                   </div>
                      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <div class="q-pa-sm">
                          <div style=" text-align: center;">
                              <q-spinner
                                color="teal"
                                width='160' 
                                height='90'
                                v-if="loading1"
                              />
                                  <img 
                                  v-if="!loading1"
                                  :src="MemberData.imageUrlLic"
                                  width='368' 
                                  >
                          </div>
                                <q-input 
                                type="file"
                                hint="Unit Details"
                                accept="image/*"
                                @change="onFilePickedLic">
                                  <template v-slot:prepend>
                                    <q-icon name="attach_file" />
                                  </template>
                                </q-input>
                            </div>
                          </div>
                        </div>
                          <!-- <div class="col-sm-12">
                            <qrcode :value='qrvalue' :options="{ width: 200 }"></qrcode>
                        </div> -->
              <!-- Start of Firstname -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input color="teal" v-model="MemberData.FirstName" label="First name" >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsup" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Firstname -->
               <!-- Start of Lastname -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input color="teal-4" v-model="MemberData.LastName" label="Last name" 
                            >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsdown" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Lastname -->
               <!-- Start of Designation -->
               <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                 <div class="q-pa-md">
                  <q-select color="teal-4" v-model="MemberData.Designation" :options="options" label="Designation"
                  @popup-hide="DesignationChange">
                  <template class="q-pa-md" v-slot:before>
                      <q-icon name="account_box" />
                    </template>
                  </q-select>
                  <!-- <q-input
                  color="blue-12"
                    disable
                    v-model="driversposition"
                    label="Designation"
                  >
                    <template class="q-pa-md" v-slot:before>
                      <q-icon name="account_box" />
                    </template>
                  </q-input> -->
                   </div>
                   </div>
                   <!-- End of Designation -->
                   
                        <!-- Start of Member ID -->
                        <!-- <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.MemberId" label="Member ID" mask="####-##########">
                              <template v-slot:before>
                                <q-icon name="mdi-comment-account-outline" />
                              </template>
                            </q-input>
                          </div>
                        </div> -->
                        <!-- End of Member ID -->
                        <!-- Start of Date -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                             <!-- di ko gets -->
                            <q-input color="teal-4" label="Year/Month/Date" v-model="MemberData.BirthDate" mask="date" hint="Birthday" :rules="['date']">
                              <template class="q-pa-none q-md-none" v-slot:before>
                                <q-icon name="event" class="cursor-pointer">
                                  <q-popup-proxy
                                    ref="qDateProxy"
                                    transition-show="scale"
                                    transition-hide="scale"
                                  >
                                    <!-- <q-date v-model="driversentrydate" @input="() => $refs.qDateProxy.hide()" /> -->
                                  </q-popup-proxy>
                                </q-icon>
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Date -->
                        <!-- Start of Status -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-select
                                color="teal-4"
                                v-model="MemberData.CivilStatus"
                                :options="civilstatusoptions"
                                label="Civil Status"
                              >
                                <template class="q-pa-md" v-slot:before>
                                  <q-icon name="mdi-heart-box" />
                                </template>
                              </q-select>
                            </div>
                            </div>
                          <!-- End of Status -->
                        <!-- Start of Occupation -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="MemberData.Designation == 'Operator'">
                            <div class="q-pa-md">
                              <q-input color="teal-4" 
                              label="Occupation" 
                              v-model="MemberData.Occupation"
                              id="myInput"
                              >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- End of Occupation -->
                        <!-- Start of Employer or Office -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="MemberData.Designation == 'Driver'">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.Occupation" label="Occupation" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Employer or Office -->
                        <!-- Start of Employer or Office -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="MemberData.Designation == 'Operator'">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.EmployerCompany" label="Employer or Office" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Employer or Office -->
                        <!-- Start of Employer or Office -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="MemberData.Designation == 'Driver'">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="Operator" label="Operator" 
                              @input="verifyoperator">
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                                <q-btn @click="verifyoperator" flat>Validated</q-btn>
                              </q-input>
                               
                            </div>
                          </div>
                        <!-- Start of Employer or Office -->
                        <!-- Start of Other sources of Income -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.OtherIncome" label="Other sources of Income" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Other sources of Income -->
                        <!-- Start of Nearest Relative -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.RelativeName" label="Nearest Relative" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Nearest Relative -->
                        <!-- Start of Relationships -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.Relationship" label="Relationship" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Relationships -->
                          <!-- Start of Number of dependents -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.NoDependents" label="Number of dependents" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Number of dependents -->
                        
                        <!-- Start of Birth place -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input color="teal-4" label="Birth place" v-model="MemberData.BirthPlace">
                              <template v-slot:before>
                                <q-icon name="mdi-home-map-marker" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Birth place -->
                        <!-- Start of Address -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class=" q-pa-md">
                            <q-input color="teal-4" v-model="MemberData.CurrentAddress" label="Address" autogrow 
                            >
                            <template v-slot:before>
                              <q-icon name="mdi-home" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Address -->
                        <!-- Start of Phone -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input color="teal-4" v-model="MemberData.Phone" label="Phone" mask="(##) - (####) - (#####)" >
                              <template v-slot:before>
                                <q-icon name="mdi-cellphone" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Phone -->

                        <!-- Start of Email -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input color="teal-4" label="Email" v-model="MemberData.Email" type="email">
                              <template v-slot:before>
                                <q-icon name="mail" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Email -->
                       
                  
                  <!-- ############################################################################# -->
                        <!-- Start of License number --> 
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input color="teal-4" v-model="MemberData.LicenseNo" label="License number">
                              <template v-slot:before>
                                <q-icon name="mdi-account-card-details" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of License number -->
                        <!-- Start of Expiration date of Drivers License -->
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                              <q-input
                                color="teal-4"
                                label="Year/Month/Date"
                                v-model="MemberData.LicenseExp"
                                mask="date"
                                :rules="['date']"
                                hint="Expiration Date"
                              >
                                <template class="q-pa-none q-md-none" v-slot:before>
                                  <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy
                                      ref="qDateProxy"
                                      transition-show="scale"
                                      transition-hide="scale"
                                    >
                                      <q-date
                                        v-model="MemberData.LicenseExp"
                                        @input="() => $refs.qDateProxy.hide()"
                                      />
                                    </q-popup-proxy>
                                  </q-icon>
                                </template>
                              </q-input>
                          </div>
                        </div> 
                       
                        <!-- End of Expiration date of Drivers License -->

                        <!-- <q-dialog v-model="bar2" persistent transition-show="flip-down" transition-hide="flip-up">
                          <q-card>
                            <q-bar>

                              <q-space />

                              <q-btn dense flat icon="close" v-close-popup>
                                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                              </q-btn>
                            </q-bar>

                            <q-card-section>
                              <div class="text-h6">Driver: Unit Details</div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                              <div class="row col-lg-4 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12"> 
                          <div class="q-pa-md">
                            <q-input color="teal-4" 
                            v-model="Unit.PlateNo" 
                            label="Plate No." 
                            :loading="verifyunit"
                            >
                              <template v-slot:before>
                                <q-icon name="mdi-jeepney" />
                              </template>
                            </q-input>
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                            <q-input color="teal-4" v-model="Unit.Operator" label="Operator" readonly>
                              <template v-slot:before>
                                <q-icon name="mdi-account" />
                              </template>
                            </q-input>
                          </div>
                        </div>

                        <div>
                          <q-btn label="Verify Unit" @click="verifyifunit()" color="primary" v-if="MemberData.Designation == 'Driver'"/>
                          <button class="btn btn-primary" @click="bar2=!bar2">Save</button>
                        </div>
                      </div>
                            </q-card-section>
                          </q-card>
                        </q-dialog>

                        <q-dialog v-model="bar1" persistent transition-show="flip-down" transition-hide="flip-up">
                          <q-card> 
                            <q-bar>

                              <q-space />

                              <q-btn dense flat icon="close" v-close-popup @click="deleteunits()">
                                <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                              </q-btn>
                            </q-bar>

                            <q-card-section>
                              <div class="text-h6">Operator: Unit Details</div>
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                              <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md" v-if="MemberData.Designation == 'Operator'">

                              <ul class="list-group">
                                <li class="list-group-item" v-for= "(unit, id) in RegUnits" :key="id">
                                  {{unit['.key']}} <button @click="remove(unit)" class="badge">x</button>
                                </li>
                              </ul>


                              <q-input color="teal" outlined class="form-control" type="text" v-model="RegUnit.PlateNo" v-on:keyup.enter="add()" />
                                <br>
                              <button class="btn btn-primary" @click="add()">Add new</button>
                              <button class="btn btn-primary" @click="bar1=!bar1">Save</button>
                            </div>
                        </div>
                            </q-card-section>
                          </q-card>
                        </q-dialog>                         -->

                        
                        <!-- <q-btn label="Unit Details" @click="bar1=!bar1" v-if="MemberData.Designation == 'Operator'"></q-btn>
                        <q-btn label="Unit Details" @click="bar2=!bar2" v-if="MemberData.Designation == 'Driver'"></q-btn> -->

                      
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-mb-lg q-pb-md">
                            <div class="q-pa-md">
                            </div>
                        </div>
                        <!-- End of Row -->
                         <div class="absolute-bottom-right">
                            <q-btn class="q-mr-md text-white" icon="cancel" type="reset" label="Reset" color="red-6" />
                            <q-btn @click="regMember()" class="text-white" icon="check" label="Register" color="teal-6" />
                         </div>
                      </div>
                    </q-card-section>
                   </q-card>
                  </div>
              </q-form>
          </div>   
       </div>  
    </q-page> 
  </div>
</template>
    
<script>
import { firebaseDb, firebaseSto, firefirestore, Auth2 } from 'boot/firebase';
// import VueQrcode from '@chenfengyuan/vue-qrcode'

// Vue.component(VueQrcode.name, VueQrcode);

export default {
    data(){
        return{
            bar1: false,
            bar2: false,
            choices: false,
            page: 1,
            MemberData: {
              FirstName: '',
              LastName: '',
              CivilStatus: '',
              BirthPlace: '',
              BirthDate: '1997/11/11',
              Address:'',
              Phone:'',
              Email:'',
              Occupation: '',
              Operator: '',
              EmployerCompany: '',
              Salary: '',
              OtherIncome: '',
              RelativeName: '',
              Relationship: '',
              NoDependents: '',
              LicenseNo:'',
              LicenseExp:'1997/11/11',
              MembershipFee: 'To be Paid',
              Designation: '',
              imageUrlPro: 'https://image.shutterstock.com/image-vector/social-member-vector-icon-person-260nw-1139787308.jpg',
              imageUrlLic: 'https://www.pinoydriver.com/resources/wp-content/uploads/2019/06/foreign-drivers-license-ph.png',
              timestamp: '',
              Operator: {}
            },
            options: ['Operator', 'Driver'],
            civilstatusoptions: ['Single', 'Married', 'Widow'],
            loading: false,
            loading1: false,
            verifyunit: false,
            RegUnit: {
                PlateNo: '',
                Operator: ''
              },
            RegUnits: [],
            Unit: {
              PlateNo: '',
              Operator: '',
              Driver: {
                MemberID: '',
                FirstName: '',
                LastName: ''
              }
              },
              verify: false,
              OperatorDetails: {},
              Operator: ''
            }
    },
  firestore: function () {
    return {
        AddMemberData: firebaseDb.collection('MemberData'),
        Operators: firebaseDb.collection('MemberData').where('Designation', '==', 'Operator'),
        RegUnits: firebaseDb.collection('RegUnits'),
        Units: firebaseDb.collection('Units'),
        Users: firebaseDb.collection('Users'),
        MemberID: firebaseDb.collection('Counter').doc("v65AIZI2jjNN2jlEv17N"),
    }
  },
    methods: {
      verifyoperator(){
        var opt = this.Operator
        var optname = ''
        var MemberID= ''
        var optdetails = {}
        this.Operators.forEach(function(e) {
          optname = e.FirstName + ' ' + e.LastName
          MemberID = e['.key']

            if(optname == opt){
               optdetails = {
                MemberID: MemberID,
                Name: optname,
                verify: true
              }
              return optdetails
            }
        })
        this.OperatorDetails = optdetails

        if(optdetails.verify == true){
          this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Operator Exists',
          })
          this.verify = true
        }else {
          // this.$q.notify({
          // color: 'red-4',
          // textColor: 'white',
          // icon: 'cloud_done',
          // message: "Operator Doesn't Exist",
          // })
          this.verify = false
        }
        
      },
    // add() {
    //   //add unit operator
    //   var id = 'NGTSC'+ (this.MemberID.MemberID + 1)
    //   var fname = this.MemberData.FirstName
    //   var lname = this.MemberData.LastName
    //   this.$firestore.RegUnits.doc(this.RegUnit.PlateNo).set({
    //     Operator: {
    //       MemberID: id,
    //       FirstName: fname,
    //       LastName: lname
    //     }
    //   })
    //   .then(()=>{
    //     this.RegUnits.PlateNo = ""
    //   })
    // },
    // remove(e) {
    //   //remove unit operator
    //   this.$firestore.RegUnits.doc(e['.key']).delete()
    // },
    // deleteunits() {
    //   //delete ng temp units collection
    //   var del = this.$firestore.RegUnits
    //   this.RegUnits.forEach(function(e) {
    //         del.doc(e['.key']).delete()
    //     })
    // },
    // addtounits(){
    //   //lipat sa Units colletion kapag register na
    //   var add = this.$firestore.Units
    //   this.RegUnits.forEach(function(e) {
    //         add.doc(e['.key']).set(e)
    //     })
    // },
    // verifyifunit(){
    //   //verify unit driver
    //   var unitpltno = this.Unit.PlateNo
    //   var unitopt
    //   var verified = false
    //   this.Units.forEach(function(e) {
    //         if(e['.key'] == unitpltno){
    //           return unitopt = e.Operator.FirstName +' '+ e.Operator.LastName
    //         }
    //     })
    //     console.log('Operator: ', unitopt)
    //     this.Unit.Operator = unitopt
    // },
    // updateUnit(){
    //   //update unit sa driver registration
    //   var newdriver = {
    //       MemberID: 'NGTSC'+ (this.MemberID.MemberID + 1),
    //       FirstName:  this.MemberData.FirstName,
    //       LastName: this.MemberData.LastName
    //     }
      
    //   this.$firestore.Units.doc(this.Unit.PlateNo).update({
    //     Driver: firefirestore.FieldValue.arrayUnion(newdriver)
    //   })
    // },
    DesignationChange(){
      if(this.MemberData.Designation == 'Driver'){
        this.MemberData.Occupation = 'Driver'
      }else{
        this.MemberData.Occupation = ''
      }
    },
    adduser(email, password){
      Auth2.createUserWithEmailAndPassword(email, password)
      .then(() => {
        let userId = Auth2.currentUser.uid
        console.log("User " + userId + " created successfully!");
        Auth2.signOut();

        //ayaw gumana
        this.$firestore.Users.doc(userId).set({
          Designation: this.MemberData.Designation,
          Email: email,
          FirstName: this.MemberData.FirstName,
          LastName: this.MemberData.LastName,
          MemberID: email.substring(0,12)
        })
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      })
    },
    log(){
              console.log(this.OperatorDetails)
    },
    regMember: function () {

      if(this.MemberData.Designation == 'Driver'){
        this.verifyoperator()
        if(this.verify == false){
          this.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: "Invalid Operator",
            })
          return
        }else{
          this.MemberData.Operator = {
            MemberID: this.OperatorDetails.MemberID,
            Name: this.OperatorDetails.Name
          }
        }
      }
      
      //register member
      // var plateno = []
      // if(this.MemberData.Designation == "Driver"){
      //    plateno.push(this.Unit.PlateNo)
      // }else if (this.MemberData.Designation == "Operator"){
      //   this.RegUnits.forEach(function(e) {
      //    plateno.push(e['.key'])
      //   })
      // }

        // this.MemberData.Unit = plateno

        this.mid = 'NGTSC'+ (this.MemberID.MemberID + 1)
        this.MemberData.timestamp = firefirestore.FieldValue.serverTimestamp()
        this.$firestore.AddMemberData.doc(this.mid).set(this.MemberData)
        .then(() => {
            var id = this.mid+'@coop.com'
            console.log('Member Registered')
            this.adduser(id, 'p@ssw0rd')
        })
        .then(() => {
            const increment = firefirestore.FieldValue.increment(1)
            this.$firestore.MemberID.update({ MemberID: increment })
            .then(() => {
              console.log('MemberID Incremented')
            })
        })
        // .then(() => {

        //   if(this.MemberData.Designation == 'Operator'){
        //     this.addtounits()
        //     this.deleteunits()

        //     console.log('Unit/s Added to Collection')
        //     console.log('Temp Unit/s Deleted')
        //   }
        //   else
        //   {
        //     this.updateUnit()
        //     console.log('New Driver Added to Units')
        //   }
        // })  
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
          }).then(() => {
            this.loading = false
          })
        })
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
          }).then(() => {
            this.loading1 = false
          })
        })
      },
      Clear(){
        this.deleteunits()
        this.file = '',
        this.date = '',
        this.Lastname = '',
        this.phone = ''
      } 
 },
 computed: {
   
  },
  mounted () {
    // this.addLine()
  }
}
</script>
<style scoped>
.designationborder{
  padding:5px;
  border:.3px solid;
  margin:6px;
}
.designationborder>span{
  position:absolute;
  top:33px;
  left:40px;
  background-color: white;
}
.the-jeep{
    opacity: 0.6;
}
.q-field_control{
  color: teal;
}
</style>