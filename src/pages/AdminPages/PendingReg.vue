<template>
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
                style="background-image: linear-gradient(#0ba360 100%, #3cba92); opacity: 0.9;"
                inline
                >

                <q-card-section horizontal>
                    <q-img
                    class="col-5"
                    src="https://www.aas.ge/wp-content/uploads/2019/08/istockphoto-1016116752-612x612.jpg"
                    />
                    <div>
                    <q-card-section class = "full-width q-mb-xl">
                        <div class="text-h4">{{PendingReg.FirstName}} {{PendingReg.LastName}}</div>
                        <div class="text-h6">{{ PendingReg.Designation }}</div>
                        <br>
                         {{ PendingReg.Date }}
                    </q-card-section>
                    <q-separator/>
                    <q-card-actions class = "row q-mt-xl">
                        <q-btn flat color="white"
                        label="View Application"
                        icon="arrow_forward"
                        @click="loadPreReg(id)"/>
                    </q-card-actions>
                    </div>
                </q-card-section>
                </q-card>
                </div>
            </div>    
     </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('store', ['PendingRegs'])
    },
    methods: {
        loadPreReg(id) {
            this.$router.push('/admin/pendingregform/' + id)
        }
    }
}
</script>
