<template>
  <div>
    <q-page>
    <h6 class="q-ma-none q-pl-md q-pt-md text-blue">Members <q-icon name="mdi-arrow-right-box" /> Add Members</h6>
     <q-separator />
      <div v-if="!choices.length" class="the-jeep absolute-center">
        <q-icon name="mdi-jeepney" size="180px" color="blue"/>
          <div class="text-h6 text-primary text-center">Pick a choice</div>
      </div>
       <div class="q-pa-md">    
         <div class="q-gutter-y-md" style="max-width: 1000px">
            <q-card>
       <q-tabs
       v-model="choices"
       dense
       class="text-grey"
       active-color="primary"
       indicator-color="primary"
       align="justify"
       narrow-indicator
       >
           <q-tab name="deposit" label="Driver" icon="mdi-jeepney"/>
          <q-tab name="withdraw" label="Operator" icon="mdi-account"/>
         </q-tabs>
           <q-separator />
            <q-tab-panels v-model="choices" animated>
              <q-tab-panel name="deposit">
               <q-form @reset="Clear">
                <div >
           <q-card-section horizontal class="col">
             <span class="text-uppercase text-blue">Drivers Details</span>
             <div class="row">
               <!-- Start of Designation -->
               <div class="col-sm-4">
                 <div class="q-pa-md">
                  <q-input
                  color="blue-12"
                    disable
                    v-model="driversposition"
                    label="Designation"
                  >
                    <template class="q-pa-md" v-slot:before>
                      <q-icon name="account_box" />
                    </template>
                  </q-input>
                   </div>
                   </div>
                   <!-- End of Designation -->
                   <!-- Start of Upload Image -->
                   <div class="col-sm-4">
                     <div class="q-pa-md">
                       <q-input
                         @input="
                           val => {
                             file = val[0];
                           }
                         "
                         type="file"
                         hint="Profile Picture"
                         v-model="driversprofile"
                         >
                         <template v-slot:before>
                           <q-icon name="mdi-file-image" />
                         </template>
                       </q-input>
                     </div>
                   </div>
                        <!-- End of Upload Image -->
                        <!-- Start of Member ID -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="driversid" label="Member ID" mask="####-##########">
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
                            <q-input label="Year/Month/Date" v-model="driversdate" mask="date" hint="Birthday" :rules="['date']">
                              <template class="q-pa-none q-md-none" v-slot:before>
                                <q-icon name="event" class="cursor-pointer">
                                  <q-popup-proxy
                                    ref="qDateProxy"
                                    transition-show="scale"
                                    transition-hide="scale"
                                  >
                                    <q-date v-model="driversentrydate" @input="() => $refs.qDateProxy.hide()" />
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
                                v-model="driversrelationstatus"
                                :options="driversrelationshipstatus"
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
                              <q-input v-model="driversoccupation" label="Occupation" >
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
                              <q-input v-model="driversemployeroffice" label="Employer or Office" >
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
                              <q-input v-model="driversincome" label="Other sources of Income" >
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
                              <q-input v-model="driversrelative" label="Nearest Relative" >
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
                              <q-input v-model="driversdependents" label="Number of dependents" >
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
                              <q-input v-model="driversrelationship" label="Relationships" >
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
                            <q-input label="Birth place" v-model="driversbirthplace">
                              <template v-slot:before>
                                <q-icon name="mdi-home-map-marker" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Birth place -->
                        <!-- Start of Lastname -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="driversLastname" label="Last name" 
                            >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsdown" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Lastname -->
                        <!-- Start of Firstname -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="driversFirstname" label="First name" >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsup" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Firstname -->
                        <!-- Start of Address -->
                        <div class="col-sm-4">
                          <div class=" q-pa-md">
                            <q-input v-model="driversAddress" label="Address" autogrow 
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
                            <q-input v-model="driversphone" label="Phone" mask="(##) - (####) - (#####)" >
                              <template v-slot:before>
                                <q-icon name="mdi-cellphone" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Phone -->
                          <div class="col-sm-4">
                              <div class="q-pa-md">
                                <q-input
                                  @input="
                                    val => {
                                      file = val[0];
                                    }
                                  "
                                  type="file"
                                  v-model="driverslicense"
                                  >
                                    <template v-slot:before>
                                    <q-icon name="mdi-account-card-details" />
                                  </template>
                                </q-input>
                              </div>
                        </div>
                        <!-- End of License Image -->

                        <div class="col-sm-4">
                          <!-- <span class="text-uppercase text-blue">Unit Details</span> -->
                          <div class="q-pa-md">
                            <q-input v-model="driversoperator" label="Operator">
                              <template v-slot:before>
                                <q-icon name="mdi-comment-account-outline" />
                              </template>
                            </q-input>
                          </div>
                        </div>  
                         <div class="col-sm-4">
                          <!-- <span class="text-uppercase text-blue">Unit Details</span> -->
                          <div class="q-pa-md">
                            <q-input v-model="driverslicenseplate" label="License Plate">
                              <template v-slot:before>
                                <q-icon name="mdi-comment-account-outline" />
                              </template>
                            </q-input>
                          </div>
                        </div>  
                      

                        <!-- Start of Email -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input label="Email" v-model="driversemail" type="email" suffix="@newgsiscoop.ph">
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
                              v-model="driverspassword"
                              :type="driversisPwd ? 'password' : 'text'"
                            >
                              <template v-slot:before>
                                <q-icon
                                  name="lock"
                                />
                              </template>
                              <template v-slot:append>
                                <q-icon
                                  :name="driversisPwd ? 'visibility_off' : 'visibility'"
                                  class="cursor-pointer"
                                  @click="driversisPwd = !driversisPwd"
                                />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Password -->
                        <!-- Start of Confirm Password -->
                        <div class="col-sm-4">
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
                        </div> 
                        <!-- End of Confirm Password -->
                  <!-- ############################################################################# -->
                        <!-- Start of License number --> 
                        <template v-show="template-1" class="template-1">
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="driverslicensenumber" label="License number" mask="####-##########">
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
                                v-model="driverslicenseexpirationdate"
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
                                        v-model="driversexpirationdate"
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
                    </q-tab-panel>

      <q-tab-panel name="withdraw">
        <q-form @reset="Clear">
           <div>
           <q-card-section horizontal class="col">
             <span class="text-uppercase text-blue">Operators Details</span>
             <div class="row">
               <!-- Start of Designation -->
               <div class="col-sm-4">
                 <div class="q-pa-md">
                  <q-input
                  color="blue-12"
                    disable
                    v-model="operatorposition"
                    label="Designation"
                  >
                    <template class="q-pa-md" v-slot:before>
                      <q-icon name="account_box" />
                    </template>
                  </q-input>
                   </div>
                   </div>
                   <!-- End of Designation -->
                   <!-- Start of Upload Image -->
                   <div class="col-sm-4">
                     <div class="q-pa-md">
                       <q-input
                         @input="
                           val => {
                             file = val[0];
                           }
                         "
                         type="file"
                         hint="Profile Picture"
                         v-model="operatorprofile"
                         >
                         <template v-slot:before>
                           <q-icon name="mdi-file-image" />
                         </template>
                       </q-input>
                     </div>
                   </div>
                        <!-- End of Upload Image -->
                        <!-- Start of Member ID -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="operatorid" label="Member ID" mask="####-##########">
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
                            <q-input label="Year/Month/Date" v-model="operatordate" mask="date" hint="Birthday" :rules="['date']">
                              <template class="q-pa-none q-md-none" v-slot:before>
                                <q-icon name="event" class="cursor-pointer">
                                  <q-popup-proxy
                                    ref="qDateProxy"
                                    transition-show="scale"
                                    transition-hide="scale"
                                  >
                                    <q-date v-model="operatorentrydate" @input="() => $refs.qDateProxy.hide()" />
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
                                v-model="operatorrelationstatus"
                                :options="operatorrelationshipstatus"
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
                              <q-input v-model="operatoroccupation" label="Occupation" >
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
                              <q-input v-model="operatoremployeroffice" label="Employer or Office" >
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
                              <q-input v-model="operatorincome" label="Other sources of Income" >
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
                              <q-input v-model="operatorrelative" label="Nearest Relative" >
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
                              <q-input v-model="operatordependents" label="Number of dependents" >
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
                              <q-input v-model="operatorrelationship" label="Relationships" >
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
                            <q-input label="Birth place" v-model="operatorbirthplace">
                              <template v-slot:before>
                                <q-icon name="mdi-home-map-marker" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Birth place -->
                        <!-- Start of Lastname -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="operatorLastname" label="Last name" 
                            >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsdown" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Lastname -->
                        <!-- Start of Firstname -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="operatorFirstname" label="First name" >
                            <template v-slot:before>
                              <q-icon name="mdi-human-handsup" />
                            </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Firstname -->
                        <!-- Start of Address -->
                        <div class="col-sm-4">
                          <div class=" q-pa-md">
                            <q-input v-model="operatorAddress" label="Address" autogrow 
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
                            <q-input v-model="operatorphone" label="Phone" mask="(##) - (####) - (#####)" >
                              <template v-slot:before>
                                <q-icon name="mdi-cellphone" />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Phone -->
                          <div class="col-sm-4">
                              <div class="q-pa-md">
                                <q-input
                                  @input="
                                    val => {
                                      file = val[0];
                                    }
                                  "
                                  type="file"
                                
                                  >
                                    <template v-slot:before>
                                    <q-icon name="mdi-account-card-details" />
                                  </template>
                                </q-input>
                              </div>
                        </div>
                        <!-- End of License Image -->
                        <!-- Start of Email -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input label="Email" v-model="operatoremail" type="email" suffix="@newgsiscoop.ph">
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
                              v-model="operatorpassword"
                              :type="operatorisPwd ? 'password' : 'text'"
                            >
                              <template v-slot:before>
                                <q-icon
                                  name="lock"
                                />
                              </template>
                              <template v-slot:append>
                                <q-icon
                                  :name="operatorisPwd ? 'visibility_off' : 'visibility'"
                                  class="cursor-pointer"
                                  @click="operatorisPwd = !operatorisPwd"
                                />
                              </template>
                            </q-input>
                          </div>
                        </div>
                        <!-- End of Password -->
                        <!-- Start of Confirm Password -->
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input
                              label="Confirm Password"
                              v-model="operatorcpassword"
                              :type="operatorcisPwd ? 'password' : 'text'"
                            >
                              <template v-slot:before>
                                <q-icon
                                  name="lock"
                                />
                              </template>
                              <template v-slot:append>
                                <q-icon
                                  :name="operatorcisPwd ? 'visibility_off' : 'visibility'"
                                  class="cursor-pointer"
                                  @click="operatorcisPwd = !operatorcisPwd"
                                />
                              </template>
                            </q-input>
                          </div>
                        </div> 
                        <!-- End of Confirm Password -->
                  <!-- ############################################################################# -->
                        <!-- Start of License number --> 
                        <template v-show="template-1" class="template-1">
                        <div class="col-sm-4">
                          <div class="q-pa-md">
                            <q-input v-model="operatorlicensenumber" label="License number" mask="####-##########">
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
                                v-model="operatorlicenseexpirationdate"
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
                                        v-model="operatorexpirationdate"
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
                          <div class="q-pa-md">
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
                        <!-- End of Row -->
                      </div>
                      <div align="right" class="">
                        <q-btn class="q-mr-md text-red" icon="cancel" type="reset" label="Reset" color="white" />
                        <q-btn @click="signupdriver" class="text-green" icon="check" label="Register" color="white" />
                      </div>
                    </q-card-section>
                  </div>
              </q-form>
                    </q-tab-panel>
                    </q-tab-panels>
                   
                </q-card>
            </div>   
       </div>  
    </q-page> 
  </div>
</template>
    
<script>
//import firebase from 'firebase'
export default {
    data(){
        return{
            choices: false,
            page: 1,
            //Driver
            driversposition: 'Driver',
            driversprofile: null,
            driversid: '',
            driversdate: '',
            driversentrydate: new Date(),
            driversrelationstatus: '',
            driversrelationshipstatus: ['Single', 'Married'],
            driversoccupation: '',
            driversemployeroffice: '',
            driversincome: '',
            driversrelative: '',
            driversdependents: '',
            driversrelationship: '',
            driversbirthplace: '',
            driversLastname: '',
            driversFirstname: '',
            driversAddress: '',
            driversphone: '',
            driverslicense: '',
            driversoperator: '',
            driversemail: '',
            driverslicenseplate: '',
            driverspassword: '',
            driverscpassword: '',
            driversisPwd: true,
            driverscisPwd: true,
            driverslicensenumber: '',
            driverslicenseexpirationdate: '',
            driversexpirationdate: new Date(),
            //Operator
            operatorposition: 'Operator',
            operatorprofile: null,
            operatorid: '',
            operatordate: '',
            operatorentrydate: new Date(),
            operatorrelationstatus: '',
            operatorrelationshipstatus: ['Single', 'Married'],
            operatoroccupation: '',
            operatoremployeroffice: '',
            operatorincome: '',
            operatorrelative: '',
            operatordependents: '',
            operatorrelationship: '',
            operatorbirthplace: '',
            operatorLastname: '',
            operatorFirstname: '',
            operatorAddress: '',
            operatorphone: '',
            operatorlicense: '',
            //operatoroperator: '',
            operatoremail: '',
            operatorpassword: '',
            operatorcpassword: '',
            operatorisPwd: true,
            operatorcisPwd: true,
            operatorlicensenumber: '',
            operatorlicenseexpirationdate: '',
            operatorexpirationdate: new Date(),
            //https://itnext.io/dynamic-component-creation-in-vue-js-b002bb41aaf4 Add Line
            // id: '',
            // email: '',
            // text: '',
            // file: null,
            // date: new Date(),
            // Lastname: '',
            // Firstname: '',
            // driverposition: 'Driver',
            // relationstatus:'',
            // password: '',
            // cpassword: '',
            // phone: '',
            // licensenumber: '',
            // expirationdate: new Date(),
            // operatordetails: '',
            // platenumber: '', 
            // Driver: false,
            // relationshipstatus: ['Single', 'Married']
               lines: [],
               blockRemoval: true,

        }
    },
    watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
    methods: {
      signupdriver(){
        firebase.auth().createUserWithEmailAndPassword(this.driversemail, this.driverspassword, this.operatoremail, this.operatorpassword)
        .then(function(){
          alert('You Account has been created');
        },
        function(err){
          alert('Opps. '+ err.message);
        })
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