<template>
  <div>
    <h6 class="q-ma-none q-pl-md q-pt-md text-blue">Members<q-icon name="mdi-arrow-right-box" /> All Members</h6>
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
