<template>
  <div>
<<<<<<< HEAD
    <h6 class="q-ma-none q-pl-md q-pt-md text-teal-4">Members <q-icon name="mdi-arrow-right-box" /> All Members</h6>
=======
    <h6 class="q-ma-none q-pl-md q-pt-md text-blue">Members<q-icon name="mdi-arrow-right-box" /> All Members</h6>
>>>>>>> 6221aeff7471ed58840d6f8370e08ece31b2ed2a
    <q-separator />
    <div class="q-pa-md col-xs-12 col-sm-12 col-md-12">
      <q-markup-table :separator="vertical" flat bordered>
      <template>
        <thead>
          <tr>
            <th class="text-left">MemberID</th>
            <th class="text-right">Last Name</th>
            <th class="text-right">First Name</th>
            <th class="text-right">Phone</th>
            <th class="text-right">Email</th>
            <th class="text-right">View Profile</th>
          </tr>
        </thead>
      </template>
<<<<<<< HEAD
      <q-td slot="body-cell-status" slot-scope="props" :props="props">
         <q-btn v-if="active" @click="active = !active" size="xs" color="green" icon="mdi-check-circle" label="Active" />
         <q-btn  v-else @click="active = !active" class="q-ml-xs" size="xs" color="red" icon="mdi-archive" label="Inactive" />
      </q-td>
      <q-td slot="body-cell-action" slot-scope="props" :props="props">
         <q-btn @click="editMember = true;" size="xs" color="primary" icon="mdi-account-edit" />
         <q-btn @click="deleteMember = true" class="q-ml-xs" size="xs" color="negative" icon="mdi-delete" />
      </q-td>
    
    </q-table> -->
     <!-- <div class="q-pa-sm q-gutter-sm"> -->
      
        <q-table title="ALL MEMBERS" :data="data" :columns="columns" row-key="name">
           <!-- <template v-slot:top>
          <q-btn dense color="secondary" label="Add Row" @click="show_dialog = true"></q-btn> -->
         
       <template v-slot:top>
         <span class="text-teal text-uppercase text-h5">Members</span>
             <q-space/>
            <q-input
              v-model="search"
              debounce="1000"
              label="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
        <q-dialog v-model="show_dialog">
        <q-card style="width: 700px; max-width: 80vw;">
          <q-card-section>
            <div class="text-h6">Edit Member</div>
          </q-card-section>
          <q-card-section>
            <div class="row">
              <div class="col-sm-3">
                <div class="q-pa-xs">
              <q-input outlined disable v-model="editedItem.name" label="Members ID"></q-input>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="q-pa-xs">
              <q-input outlined v-model="editedItem.lastname" label="Last name"></q-input>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="q-pa-xs">
              <q-input outlined v-model="editedItem.firstname" label="First name"></q-input>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="q-pa-xs">
              <q-input outlined v-model="editedItem.designation" label="Designation"></q-input>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="q-pa-xs">
              <q-input outlined v-model="editedItem.licenseplate" label="License plate"></q-input>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="q-pa-xs">
              <q-input outlined v-model="editedItem.phonenumber" label="Phone number"></q-input>
                </div>
              </div>
            </div>
          </q-card-section>
          
          <q-card-actions align="right">
            <q-btn outlined label="Save" color="blue" v-close-popup @click="addRow" ></q-btn>
          </q-card-actions>
            </q-card>
    </q-dialog> 
     
      </template>

      <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="desc" :props="props">
              {{ props.row.id }}
            </q-td>
            <q-td key="lastname" :props="props">
              {{ props.row.LastName }}
            </q-td>
            <q-td key="firstname" :props="props">
              <div class="text-pre-wrap">{{ props.row.FirstName }}</div>
            </q-td>
            <q-td key="designation" :props="props">
              {{ props.row.Designation }}
              <!-- <q-popup-edit v-model="props.row.carbs" title="Update Job Description" buttons persistent> -->
                <!-- <q-input type="number" v-model="props.row.carbs" dense autofocus hint="Use buttons to close" ></q-input> -->
              <!-- </q-popup-edit> -->
            </q-td>
            <!-- <q-td key="licenseplate" :props="props">{{ props.row.licenseplate }}</q-td> -->
            <q-td key="phonenumber" :props="props">{{ props.row.Phone }}</q-td>
            <q-td key="phonenumber" :props="props">{{ props.row.Email }}</q-td>
            <q-td key="status" :props="props">
              
              <q-btn size="xs" v-if="active" color="green" label="Active" @click="active = !active">
                <template v-slot:before>
                  <q-icon name="check" />
                </template>
              </q-btn>
               <q-btn size="xs" v-else-if="inactive" color="red" label="Inactive" @click="active = !active">
                <template v-slot:before>
                  <q-icon name="mdi-archive" />
                </template>
              </q-btn>
            </q-td>
          
            <q-td key="actions" :props="props">
              <!-- <q-btn color="blue" size="xs" icon="mdi-account-edit" @click="editItem(props.row)" />
              <span class="q-px-xs"/>
              <q-btn color="red" size="xs" classs="q-ml-md"  icon="mdi-delete"  @click="deleteItem(props.row)"/> -->
              <q-btn color="primary" size="xs" classs="q-ml-md"  icon="mdi-account-edit" to=""  @click="loadProfile(props.row.id)"/>
            </q-td>
          </q-tr>
        </template>
    </q-table>
    <q-btn @click="log">try</q-btn>
          </div>
=======
      <template>
        <tbody>
          <tr v-for="(data, id) in MemberData" :key="id">
            <td class="text-left">{{id}}</td>
            <td class="text-right">{{data.LastName}}</td>
            <td class="text-right">{{data.FirstName}}</td>
            <td class="text-right">{{data.Phone}}</td>
            <td class="text-right">{{data.Email}}</td>
            <td class="text-right"><q-btn icon="mdi-face" @click="loadProfile(id)"/></td>
          </tr>
        </tbody>
      </template>
    </q-markup-table>
>>>>>>> 6221aeff7471ed58840d6f8370e08ece31b2ed2a
    </div>
  </div>
</template>

<script>
import { firebaseDb } from 'boot/firebase';

export default {
  data() {
    return {
      active: true,
      inactive: true,
      show_dialog: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        lastname: '',
        firstname: '',
        designation: '',
        licenseplate: '',
        phonenumber: ''
      },
      defaultItem: {
        name: "",
        lastname: '',
        firstname: '',
        designation: '',
        licenseplate: '',
        phonenumber: ''
      },
      MemberData: {}
    }
  },
  firestore () {
    return {
      MemberData: {
        // collection reference.
            ref: firebaseDb.collection('MemberData'),
            // Bind the collection as an object if you would like to.
            objects: true,
            resolve: (data) => {
                // collection is resolved
            },
            reject: (err) => {
                // collection is rejected
            }
        }
      }
  },
  computed: {
    // ...mapGetters('store', ['MemberData'])
  },
  methods: {
    loadProfile(id) {
            this.$router.push('/admin/profile/' + id)
        },
    log(){
      console.log(this.MemberData)
    },
    editItem (item) {
        this.editedIndex = this.columns.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
    editMember(){
      
    },
    addRow() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem);
      } else {
        this.data.push(this.editedItem);
      }
      this.close()
    },
    deleteItem(item) {
      const index = this.data.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.data.splice(index, 1);
    },
    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.show_dialog = true;
    },
    close () {
      this.show_dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  },
};
</script>
<style></style>
