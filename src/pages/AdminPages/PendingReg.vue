<template>
  <div>
    <h6 class="q-ma-none q-pl-md q-pt-md text-blue"> Members <q-icon name="mdi-arrow-right-box" /> Pending Registrations </h6>
    <q-separator />
    <div class="q-pa-md col-xs-12 col-sm-12 col-md-12">
      <q-markup-table :separator="vertical" flat bordered>
      <template>
        <thead>
          <tr>
            <th class="text-left">Last Name</th>
            <th class="text-right">First Name</th>
            <th class="text-right">Designation</th>
            <th class="text-right">Phone</th>
            <th class="text-right">Email</th>
            <th class="text-right">View Profile</th>
          </tr>
        </thead>
      </template>
      <template>
        <tbody>
          <tr v-for="(PendingReg, id) in PendingRegs" :key="id">
            <td class="text-right">{{PendingReg.LastName}}</td>
            <td class="text-right">{{PendingReg.FirstName}}</td>
            <td class="text-right">{{PendingReg.Designation}}</td>
            <td class="text-right">{{PendingReg.Phone}}</td>
            <td class="text-right">{{PendingReg.Email}}</td>
            <td class="text-right"><q-btn icon="mdi-face" @click="loadPreReg(id)"/></td>
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
    firestore () {
    return {
    PendingRegs: {
        // collection reference.
            ref: firebaseDb.collection('PreRegPersonalData'),
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
    methods: {
        loadPreReg(id) {
            this.$router.push('/admin/pendingregform/' + id)
        }
    }
}
</script>