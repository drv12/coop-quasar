<template>
  <div>
    <q-page>
    <h6 class="q-ma-none q-pl-md q-pt-md text-blue">Members <q-icon name="mdi-arrow-right-box" /> Add Members</h6>
     <q-separator />
       <div class="q-pa-md">    
         <div class="q-gutter-y-md full-width">
        <q-form @reset="Clear" >
          <div >
           <q-card-section horizontal class="col">
             <!-- <span class="text-uppercase text-blue">Drivers Details</span> -->
             <div class="row">

                        <div class="col-sm-12">
                            <qrcode :value='qrvalue' :options="{ width: 200 }"></qrcode>
                        </div>

              <!-- Start of Firstname -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.AccountData.FirstName" label="First name" >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsup" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Firstname -->
               <!-- Start of Lastname -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.AccountData.LastName" label="Last name" 
                            >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsdown" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Lastname -->
               <!-- Start of Designation -->
               <div class="col-sm-4">
                 <div class="q-pa-md">
                  <q-select v-model="MemberData.AccountData.Designation" :options="options" label="Designation">
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
                   <!-- Start of Upload Image -->
                   <div class="col-sm-4">
                     <div class="q-pa-md">
                       <q-file v-model="MemberData.AccountData.ProfilePic" label="Profile Picture">
                        <template v-slot:prepend>
                          <q-icon name="attach_file" />
                        </template>
                      </q-file>
                     </div>
                   </div>
                        <!-- End of Upload Image -->
                        <!-- Start of Member ID -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.AccountData.MemberId" label="Member ID" mask="####-##########">
                              <template v-slot:before>
                                <q-icon name="mdi-comment-account-outline" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Member ID -->
                        <!-- Start of Date -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                             <!-- di ko gets -->
                            <q-input label="Year/Month/Date" v-model="MemberData.BirthData.BirthDate" mask="date" hint="Birthday" :rules="['date']">
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
                          <div class="col-sm-4">
                            <div class="q-pa-md">
                              <q-select
                                color="blue-12"
                                v-model="MemberData.AccountData.CivilStatus"
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
                          <div class="col-sm-4">
                            <div class="q-pa-md">
                              <q-input v-model="MemberData.Employment.Occupation" label="Occupation" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- End of Occupation -->
                        <!-- Start of Employer or Office -->
                          <div class="col-sm-4">
                            <div class="q-pa-md">
                              <q-input v-model="MemberData.Employment.EmployerCompany" label="Employer or Office" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Employer or Office -->
                        <!-- Start of Other sources of Income -->
                          <div class="col-sm-4">
                            <div class="q-pa-md">
                              <q-input v-model="MemberData.Employment.Salary" label="Other sources of Income" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Other sources of Income -->
                        <!-- Start of Nearest Relative -->
                          <div class="col-sm-4">
                            <div class="q-pa-md">
                              <q-input v-model="MemberData.Family.NearestRelative.RelativeName" label="Nearest Relative" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Nearest Relative -->
                          <!-- Start of Number of dependents -->
                          <div class="col-sm-4">
                            <div class="q-pa-md">
                              <q-input v-model="MemberData.Family.NoDependents" label="Number of dependents" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Number of dependents -->
                        <!-- Start of Relationships -->
                          <div class="col-sm-4">
                            <div class="q-pa-md">
                              <q-input v-model="MemberData.Family.NearestRelative.Relationship" label="Relationships" >
                                <template v-slot:before>
                                  <q-icon name="mdi-briefcase" />
                                </template>
                              </q-input>
                            </div>
                          </div>
                        <!-- Start of Relationships -->
                        <!-- Start of Birth place -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input label="Birth place" v-model="MemberData.BirthData.BirthPlace">
                              <template v-slot:before>
                                <q-icon name="mdi-home-map-marker" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Birth place -->
                        <!-- Start of Address -->
                        <div class="col-sm-4">
                          <div class=" q-pa-md">
                            <q-input v-model="MemberData.Address.CurrentAddress" label="Address" autogrow 
                            >
                            <template v-slot:before>
                              <q-icon name="mdi-home" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Address -->
                        <!-- Start of Phone -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.Address.Phone" label="Phone" mask="(##) - (####) - (#####)" >
                              <template v-slot:before>
                                <q-icon name="mdi-cellphone" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Phone -->
                          <div class="col-sm-4">
                              <div class="q-pa-md">
                                <q-file color="purple-12" v-model="MemberData.DesignationData.Driver.License.LicensePic" label="License Picture">
                                  <template v-slot:prepend>
                                    <q-icon name="attach_file" />
                                  </template>
                                </q-file>
                              </div>
                        </div>
                        <!-- End of License Image -->
                        <div class="col-sm-4" v-if="MemberData.AccountData.Designation=='Driver'">
                          <!-- <span class="text-uppercase text-blue">Unit Details</span> -->
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.DesignationData.Driver.Unit.Operator" label="Operator">
                              <template v-slot:before>
                                <q-icon name="mdi-comment-account-outline" />
                              </template>
                            </q-input>
                          </div>
                        </div>  
                        
                         <div class="col-sm-4">
                          <!-- <span class="text-uppercase text-blue">Unit Details</span> -->
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.DesignationData.Driver.Unit.PlateNo" label="License Plate">
                              <template v-slot:before>
                                <q-icon name="mdi-comment-account-outline" />
                              </template>
                            </q-input>
                          </div>
                        </div>  
                      

                        <!-- Start of Email -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input label="Email" v-model="MemberData.AccountData.Email" type="email" suffix="@newgsiscoop.ph">
                              <template v-slot:before>
                                <q-icon name="mail" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Email -->
                        <!-- Start of Password -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input
                              label="Password"
                              v-model="MemberData.AccountData.Password"
                              :type="MemberData.AccountData.Password ? 'password' : 'text'"
                            >
                              <template v-slot:before>
                                <q-icon
                                  name="lock"
                                />
                              </template>
                              <template v-slot:append>
                                <q-icon
                                  :name="MemberData.AccountData.Password ? 'visibility_off' : 'visibility'"
                                  class="cursor-pointer"
                                  @click="MemberData.AccountData.Password = !MemberData.AccountData.Password"
                                />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Password -->
                        <!-- Start of Confirm Password -->
                        <!-- <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input
                              label="Confirm Password"
                              v-model="driverscpassword"
                              :type="driverscisPwd ? 'password' : 'text'"
                            >
                              <template v-slot:before>
                                <q-icon
                                  name="lock"
                                />
                              </template>
                              <template v-slot:append>
                                <q-icon
                                  :name="driverscisPwd ? 'visibility_off' : 'visibility'"
                                  class="cursor-pointer"
                                  @click="driverscisPwd = !driverscisPwd"
                                />
                              </template>
                            </q-input>
                          </div>
                        </div>  -->
                        <!-- End of Confirm Password -->
                  <!-- ############################################################################# -->
                        <!-- Start of License number --> 
                        <template v-show="template-1" class="template-1">
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="MemberData.DesignationData.Driver.License.LicenseNo" label="License number" mask="####-##########">
                              <template v-slot:before>
                                <q-icon name="mdi-account-card-details" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of License number -->
                        <!-- Start of Expiration date of Drivers License -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                              <q-input
                                label="Year/Month/Date"
                                v-model="MemberData.DesignationData.Driver.License.Expiration"
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
                                        v-model="MemberData.DesignationData.Driver.License.Expiration"
                                        @input="() => $refs.qDateProxy.hide()"
                                      />
                                    </q-popup-proxy>
                                  </q-icon>
                                </template>
                              </q-input>
                          </div>
                        </div> 
                        </template>
                        <!-- End of Expiration date of Drivers License -->

                        <div v-for="(line, index) in lines" v-bind:key="index" class="col-sm-4">
                            <div class="q-pa-md" v-if="MemberData.AccountData.Designation == 'Operator'">
                                    <q-input
                                        v-model="line.number"
                                        float-label="Phone Number"
                                        numeric-keyboard-toggle
                                        placeholder="Jeep & License plate"
                                        type="text"
                                      >
                                      <template v-slot:before>
                                        <q-icon name="mdi-jeepney" />
                                      </template>
                                        <template v-slot:append>
                                        <!-- <div class="block"> -->
                                          <q-btn size="12px" @click="removeLine(index)" icon="delete" round />
                                          <q-btn size="12px" v-if="index + 1 === lines.length" @click="addLine" icon="add" round />
                                        <!-- </div> -->
                                        </template>
                                    </q-input>
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class="q-pa-md">
                            </div>
                        </div>
                        <!-- End of Row -->
                      </div>
                      <div align="right" class="">
                        <q-btn class="q-mr-md text-red" icon="cancel" type="reset" label="Reset" color="white" />
                        <q-btn @click="page = 2" class="text-green" icon="check" label="Register" color="white" />
                      </div>
                    </q-card-section>
                  </div>
              </q-form>
          </div>   
       </div>  
    </q-page> 
  </div>
</template>
    
<script>
import Vue from 'vue';
import VueQrcode from '@chenfengyuan/vue-qrcode'

Vue.component(VueQrcode.name, VueQrcode);

export default {
    data(){
        return{
            choices: false,
            page: 1,
            MemberData:{
              AccountData: {
                FirstName: '',
                LastName: '',
                CivilStatus: '',
                Designation: '',
                Email: '',
                MemberId: '',
                ProfilePic: [],
                Password: ''
              },
              DesignationData: {
                Driver:{
                  Unit: {
                    PlateNo:'',
                    Operator: ''
                  },
                  License: {
                  LicensePic: [],
                  LicenseNo: '',
                  LicenseExp: ''
                  }
                },
                Operator:{
                  Unit:[
                    {PlateNo: '', Driver: ''}
                  ]
                }
              },
              BirthData: {
                BirthDate: '',
                BirthPlace: ''
              },
              Employment: {
                Occupation: '',
                Salary: '',
                EmployerCompany: '',
                OtherIncome: ''
              },
              Family: {
              NearestRelative: {
                RelativeName: '',
                Relationship: ''
              },
              NoDependents: ''
              },
              Address: {
                CurrentAddress: '',
                Phone: ''
              },

            },
               lines: [],
               blockRemoval: true,
               options: ['Driver', 'Operator'],
               unit:'',
               units:[],
               civilstatusoptions: ['Single', 'Married', 'Widow']
        }
    },
    watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
    methods: {
      log(){
        console.log(this.operatorprofile);
      },
      addrow(){
       this.units.push(units[0]); // what to push unto the rows array?
      },
      removeRow(index){
        this.units.splice(index,1); // why is this removing only the last row?
      },
      Clear(){
        this.file = '',
        this.date = '',
        this.Lastname = '',
        this.phone = ''
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
 computed: {
    qrvalue: function() {
      return this.MemberData.AccountData.FirstName + " " + this.MemberData.AccountData.LastName +'\n'+
      this.MemberData.AccountData.MemberId + '\n' + this.MemberData.AccountData.Designation +'\n'+
      this.MemberData.DesignationData.Driver.Unit.PlateNo + '\n' + this.MemberData.DesignationData.Driver.Unit.Operator;
    }
  },
  mounted () {
    this.addLine()
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
</style>