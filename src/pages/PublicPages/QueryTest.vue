<template>
    <div>
        <qrcode value="https://fengyuanchen.github.io/vue-qrcode" tag="img"></qrcode>
        <strong>{{ Units }}</strong>
        <br>
        <strong>{{ UnitDetails }}</strong>
        <br>
        <strong>{{ MemberData.Firstname +' '+ MemberData.Lastname}}</strong>
        

        <!-- <strong>{{ MemberData }}</strong> -->

        <q-btn @click="log">LOG</q-btn>
        <q-btn @click="updateUnit">update</q-btn>
    </div>
</template>

<script>
import Vue from 'vue'

import { firebaseDb, firebaseSto, firefirestore } from 'boot/firebase';
import VueQrcode from '@chenfengyuan/vue-qrcode'

Vue.component(VueQrcode.name, VueQrcode);

export default {
    data(){
        return{
            UnitDetails: []
        }
    },
      firestore () {
        return {
            // Doc
            // MemberData: firebaseDb.collection('MemberData').doc(this.penRegId),
            // Transactions: firebaseDb.collection('Transactions'),
            Units: firebaseDb.collection('Units'),
            UnitDetails: firebaseDb.collection('Units').where('Operator.MemberID', '==' , 'NGTSC2021'),
            MemberData: firebaseDb.collection('MemberData').where()
            // OrNoData: firebaseDb.collection('Counter').doc("v65AIZI2jjNN2jlEv17N")
        }
      },
    methods: {
        log(){
            console.log('start')
            this.$firestore.UnitDetails.get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        let data = doc.data()
                        console.log(doc.id, " => ", doc.data());
                        console.log(data.Driver);
                        data.Driver.forEach(function(e) {
                            console.log(e)
                        })
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
        },
        updateUnit(){
      //update unit sa driver registration
        this.$firestore.Units.doc('YYY-999').update({
        Driver: firefirestore.FieldValue.arrayUnion('memberi')
        })
        }
    },
    computed: {
    qrvalue(){
      return {
        DriverID: this.penRegId,
        OperatorID: this.Units
      }
    }
  }
}
</script>