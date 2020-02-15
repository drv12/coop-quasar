<template>
<<<<<<< HEAD
  <div>
    <h6 class="q-ma-none q-pl-md q-pt-md text-blue"> Members <q-icon name="mdi-arrow-right-box" /> Pending Applications </h6>
    <q-separator />
    <div v-if="loading">
      <q-spinner-oval
        color="primary"
        size="200px"
        :thickness="5"
        class="fixed-center"
      />
    </div>
    <div v-if="!loading" class="col-xs-10 col-sm-10 col-md-8 q-pa-md">
      <q-markup-table separator="horizontal" flat bordered>
      <template>
        <thead class="bg-secondary">
          <tr class="text-h4 q-ml-md text-white">
            <th class="text-left">Last Name</th>
            <th class="text-left">First Name</th>
            <th class="text-left">Designation</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Email</th>
            <th class="text-left"></th>
          </tr>
        </thead>
      </template>
      <template>
        <tbody>
          <tr v-for="(PendingReg, id) in PendingRegs" :key="id">
            <td class="text-left">{{PendingReg.LastName}}</td>
            <td class="text-left">{{PendingReg.FirstName}}</td>
            <td class="text-left">{{PendingReg.Designation}}</td>
            <td class="text-left">{{PendingReg.Phone}}</td>
            <td class="text-left">{{PendingReg.Email}}</td>
            <td class="text-left"><q-btn flat label="View Details" class="full-width" icon-right="mdi-arrow-right" @click="loadPreReg(id)"/></td>
          </tr>
        </tbody>
      </template>
    </q-markup-table>
    </div>
  </div>
=======
 <div>
    <h6 class="q-ma-none q-pl-md q-pt-md text-teal-4"> Pre-Registration <q-icon name="mdi-arrow-right-box" /> Pending </h6>
    <q-separator />
     <div class="q-pa-md">

            <div class="row">
                <div 
                class="col-xs-12 col-sm-12 col-md-6 q-pa-md"
                v-for="(PendingReg, id) in PendingRegs"
                :key="id"
                >

                <q-card
                class="my-card text-white"
                style="background-image: linear-gradient(to top, #0ba360 100%, #3cba92 100%); opacity: 0.9;"
                inline
                >

                <q-card-section horizontal>
                    <q-img
                    class="col-5"
                    src="https://www.aas.ge/wp-content/uploads/2019/08/istockphoto-1016116752-612x612.jpg"
                    />
                    <div>
                    <q-card-section class = "full-width q-mb-xl">
                        <div class="text-h4 text-uppercase">{{PendingReg.FirstName}} {{PendingReg.LastName}}</div>
                        <div class="text-h6">{{ PendingReg.Designation }}</div>
                        <br>
                        {{ PendingReg.Date }}
                    </q-card-section>
                    <q-separator/>
                    <q-card-actions class = "row q-mt-xl">
                        <q-btn flat color="white"
                        label="View Application Form"
                        icon="mdi-eye-outline"
                        @click="loadPreReg(id)"/>
                    </q-card-actions>
                    </div>
                </q-card-section>
                </q-card>
                </div>
            </div>    
     </div>
 </div>

>>>>>>> 1ac715aa9e19795498447ff85f912dbebf550ba2
</template>

<script>
import { firebaseDb } from 'boot/firebase';

export default {
    data(){
        return{
          loading: true
        }
    },
    firestore () {
    return {
    PendingRegs: {
        // collection reference.
            // ref: firebaseDb.collection('PreRegPersonalData'),
            // Bind the collection as an object if you would like to.
            // objects: true,
            // resolve: (data) => {
            //     // collection is resolved
            // },
            // reject: (err) => {
            //     // collection is rejected
            // }
        }
      }
    },
    mounted () {
      // Binding Collections
      this.$bindCollectionAsObject("PendingRegs", firebaseDb.collection("PreRegPersonalData"))
      .then((PendingRegs) => {
        this.loading = false
      })
    },
    methods: {
        loadPreReg(id) {
            this.$router.push('/admin/pendingregform/' + id)
        }
    }
}
</script>