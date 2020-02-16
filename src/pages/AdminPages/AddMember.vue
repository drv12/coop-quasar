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
                   <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                     <div class="q-pa-md">
                          <div style=" text-align: center;">
                            <q-spinner
                              color="primary"
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
                  <div class="col-sm-8">
                    <div class="q-pa-md"></div>
                  </div>
                        <!-- End of Upload Image -->
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
                  <q-select color="teal-4" v-model="MemberData.Designation" :options="options" label="Designation">
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
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.Occupation" label="Occupation" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- End of Occupation -->
                        <!-- Start of Employer or Office -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.EmployerCompany" label="Employer or Office" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Employer or Office -->
                        <!-- Start of Other sources of Income -->
                          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md">
                              <q-input color="teal-4" v-model="MemberData.Salary" label="Other sources of Income" >
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
                          <!-- <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                              <div class="q-pa-md">
                                <q-file color="teal-4" v-model="MemberData.LicensePic" label="License Picture">
                                  <template v-slot:prepend>
                                    <q-icon name="attach_file" />
                                  </template>
                                </q-file>
                              </div>
                        </div> -->
                    <div class="row col-lg-4 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <div class="text-h6 text-center">License Details</div>
                          <q-separator color="secondary" inset />
                        </div>
                        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <div class="q-pa-md">
                          <div style=" text-align: center;">
                            <q-spinner
                              color="primary"
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
                       hint="License Picture"
                       accept="image/*"
                       @change="onFilePickedLic">
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-input>
                     </div>
                   </div>
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
                                v-model="MemberData.Expiration"
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
                                        v-model="MemberData.Expiration"
                                        @input="() => $refs.qDateProxy.hide()"
                                      />
                                    </q-popup-proxy>
                                  </q-icon>
                                </template>
                              </q-input>
                          </div>
                        </div> 
                    </div>
                        <!-- End of Expiration date of Drivers License -->
                      <div class="row col-lg-4 col-md-12 col-sm-12 col-xs-12 q-pa-md">
                        <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                          <div class="text-h6 text-center">Unit Details</div>
                          <q-separator color="secondary" inset />
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="MemberData.Designation == 'Driver'"> 
                          <div class="q-pa-md">
                            <q-input color="teal-4" label="Plate No." :loading="verifyunit">
                              <template v-slot:before>
                                <q-icon name="mdi-jeepney" />
                              </template>
                            </q-input>
                          </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-if="MemberData.Designation == 'Driver'">
                          <div class="q-pa-md">
                            <q-input color="teal-4" label="Operator" readonly>
                              <template v-slot:before>
                                <q-icon name="mdi-account" />
                              </template>
                            </q-input>
                          </div>
                        </div>

                        <div>
                          <q-btn label="Verify Unit" color="primary" v-if="MemberData.Designation == 'Driver'"/>
                        </div>
                      </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="q-pa-md" v-if="MemberData.Designation == 'Operator'">

                              <ul class="list-group">
                                <li class="list-group-item" v-for= "(unit, id) in RegUnits" :key="id">
                                  {{unit.PlateNo}} <button @click="remove(unit)" class="badge">x</button>
                                </li>
                              </ul>

                              <input class="form-control" type="text" v-model="RegUnit.PlateNo" v-on:keyup.enter="add()">
                                <br>
                              <button class="btn btn-primary" @click="add()">Add new</button>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 q-mb-lg q-pb-md">
                            <div class="q-pa-md">
                            </div>
                        </div>
                        <!-- End of Row -->
                         <div class="absolute-bottom-right">
                            <q-btn class="q-mr-md text-white" icon="cancel" type="reset" label="Reset" color="red-6" />
                            <q-btn @click="page = 2" class="text-white" icon="check" label="Register" color="teal-6" />
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
import { firebaseDb, firebaseSto, firefirestore } from 'boot/firebase';
// import VueQrcode from '@chenfengyuan/vue-qrcode'

// Vue.component(VueQrcode.name, VueQrcode);

export default {
    data(){
        return{
            choices: false,
            page: 1,
            MemberData: {
              FirstName: '',
              LastName: '',
              CivilStatus: '',
              BirthPlace: '',
              BirthDate: '',
              Address:'',
              Phone:'',
              Email:'',
              Occupation: '',
              EmployerCompany: '',
              Salary: '',
              OtherIncome: '',
              RelativeName: '',
              Relationship: '',
              NoDependents: '',
              LicenseNo:'',
              LicenseExp:'',
              Designation: '',
              imageUrlPro: null,
              imageUrlLic: 'https://www.pinoydriver.com/resources/wp-content/uploads/2019/06/foreign-drivers-license-ph.png',
              timestamp: ''
            },
            // UnitData: {
            //   PlateNo: '',
            //   Operator: '',
            //   Driver: []
            // },
            lines: [],
            blockRemoval: true,
            options: ['Operator', 'Driver'],
            unit:'',
            units:[],
            civilstatusoptions: ['Single', 'Married', 'Widow'],
            mid: '',
            loading: false,
            loading1: false,
            verifyunit: false,
            RegUnit: {
                PlateNo: '',
                Operator: ''
              },
            RegUnits: []
            }
    },
  firestore: function () {
    return {
        AddMemberData: firebaseDb.collection('MemberData'),
        RegUnits: firebaseDb.collection('RegUnits'),
        Units: firebaseDb.collection('Units'),
        MemberID: firebaseDb.collection('Counter').doc("v65AIZI2jjNN2jlEv17N"),
    }
  },
    methods: {
    add() {
      this.RegUnit.Operator = 'NGTSC'+ (this.MemberID.MemberID + 1)
      console.log(this.RegUnits)
      this.$firestore.RegUnits.add(this.RegUnit)
      .then(()=>{
        this.RegUnits.PlateNo = ""
      })
    },
    remove(e) {
      this.$firestore.RegUnits.doc(e['.key']).delete()
    },
    addtounits(){
      //lipat sa Units colletion kapag register na
      var add = this.$firestore.Units
      this.RegUnits.forEach(function(e) {
            add.add(e)
        })
    },
    deleteunits() {
      //delete ng temp units collection
      var del = this.$firestore.RegUnits
      this.RegUnits.forEach(function(e) {
            del.doc(e['.key']).delete()
        })
    },
    regMember: function () {
        // this.$firestore.AddMemberData.add(this.MemberData)
        // this.$firestore.Units.add(this.RegUnits)

        this.mid = 'NGTSC'+ (this.MemberID.MemberID + 1)
        this.MemberData.timestamp = firefirestore.FieldValue.serverTimestamp()
        this.$firestore.AddMemberData.doc(this.mid).set(this.MemberData)

        const increment = firefirestore.FieldValue.increment(1);
        this.$firestore.MemberID.update({ MemberID: increment });
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
      // log(){
      //   console.log(this.operatorprofile);
      // },
      // addrow(){
      //  this.units.push(units[0]); // what to push unto the rows array?
      // },
      // removeRow(index){
      //   this.units.splice(index,1); // why is this removing only the last row?
      // },
      Clear(){
        this.file = '',
        this.date = '',
        this.Lastname = '',
        this.phone = ''
      },
    //     addLine () {
    //   let checkEmptyLines = this.lines.filter(line => line.number === null)
    //   if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
    //   this.lines.push({
    //     number: null,
    //   })
    // },
    //  removeLine (lineId) {
    //   if (!this.blockRemoval) this.lines.splice(lineId, 1)
    // }   
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