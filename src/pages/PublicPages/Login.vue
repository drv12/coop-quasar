<template>
    <q-layout>
        <q-page-container>
            <q-page
            class="bg-light-blue­ window-height window-width row justify-center items-center"
            >
                <div class="column">
                    <div class="row">
                        <h5 class="text-h5 text-white q-my-md text-uppercase">
                        New GSIS Transport Cooperative
                        </h5>
                    </div>
                <div class="row">
                    <q-card square bordered class="first-card q-pa-lg shadow-1">
                        <q-card-section>
                            <q-form class="q-gutter-md">
                                <q-input
                                    square
                                    filled
                                    clearable
                                    v-model="formData.email"
                                    type="email"
                                    label="Email"
                                />
                                <q-input
                                    square
                                    filled
                                    clearable
                                    v-model="formData.password"
                                    type="password"
                                    label="Password"
                                />
                            </q-form>
                        </q-card-section>
                    <q-card-actions class="q-px-md">
                        <q-btn
                            unelevated
                            color="primary"
                            size="lg"
                            class="full-width on-right"
                            label="Login"
                            @click.prevent='signin'
                        >
                        <q-spinner-dots
                            class="on-right"
                            color="white"
                            v-if="Loading"
                        />
                        </q-btn>
                    </q-card-actions>
                    </q-card>
                </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Login",
    data() {
        return {
            formData: {
                email: '',
                password: ''
                }
            };
        },
        methods: {
            ...mapActions('store',['loginUser']),
            signin(){
                this.loginUser(this.formData)
            },
        },
        computed: {
            ...mapGetters('store', ['Loading'])
        }
};
</script>


<style lang="scss" scoped>
.background-color{
  //background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}
.loginform-background{
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
.first-card {
  width: 500px; 
}
.colortext{
 text-transform: uppercase;
 background: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
	// -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.loginbtn{
  color: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);
}
</style>
