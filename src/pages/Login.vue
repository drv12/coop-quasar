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
v-model="email"
type="email"
label="Email"
/>
<q-input
square
filled
clearable
v-model="password"
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
class="full-width"
label="Login"
/>
</q-card-actions>
</q-card>
</div>
</div>
</q-page>
</q-page-container>
</q-layout>
</template>

<script>
export default {
name: "Login",
data() {
return {
email: '',
password: ''
};
},
methods: {}
};
</script>

<style>
.first-card {
width: 500px;
}
</style>