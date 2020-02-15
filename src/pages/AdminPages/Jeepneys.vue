<template>
  <div>
    <h6 class="q-ma-none q-pl-md q-pt-md text-teal-4">Monitoring <q-icon name="mdi-arrow-right-box" /> All Vehicles</h6>
     <q-separator />
     <div class="q-pa-md">
          <q-table
            title="Operating Units"
            :data="operatingdata"
            :columns="operatings"
            row-key="designation"
          />
     </div>
      <div class="q-pa-md">
          <q-table
            title="Non-Operating Units"
            :data="nonoperatingdata"
            :columns="nonoperatings"
            row-key="nonoperatingdesignation"
          />
     </div>
      <div class="q-pa-md">
          <q-table
            title="Number Coding Units"
            :data="codingdata"
            :columns="codingoperatings"
            row-key="codingdesignation"
          />
     </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      // Start of Operating Units //
          operatings: [
            {
              name: 'designation',
              required: true,
              label: 'Designation',
              align: 'left',
              field: row => row.designation,
              format: val => `${val}`,
              sortable: true
            },
            { name: 'lastname', align: 'center', label: 'Last name', field: 'lastname', sortable: true },
            { name: 'firstname', align: 'center', label: 'First name', field: 'firstname', sortable: true },
            { name: 'licenseplate', align: 'center', label: 'License Plate', field: 'licenseplate', sortable: true },
            { name: 'date', align: 'center', label: 'Date', field: 'date' }
          ],
      operatingdata:[
        {
          designation: 'Operator',
          lastname: 'Taylor',
          firstname: 'Swift',
          licenseplate: 'TAS-1989',
          date: '12-13-1989',
        },
        {
          designation: 'Operator',
          lastname: 'Hathaway',
          firstname: 'Anne',
          licenseplate: 'ANN-1982',
          date: '11-12-1982',
        }
      ],
       // End of Operating Units //
       // Start of Non-Operating Units //
          nonoperatings: [
            {
              name: 'designation',
              required: true,
              label: 'Designation',
              align: 'left',
              field: row => row.designation,
              format: val => `${val}`,
              sortable: true
            },
            { name: 'lastname', align: 'center', label: 'Last name', field: 'lastname', sortable: true },
            { name: 'firstname', align: 'center', label: 'First name', field: 'firstname', sortable: true },
            { name: 'licenseplate', align: 'center', label: 'License Plate', field: 'licenseplate', sortable: true },
            { name: 'date', align: 'center', label: 'Date', field: 'date' }
          ],
      nonoperatingdata:[
        {
          designation: 'Operator',
          lastname: 'Taylor',
          firstname: 'Swift',
          licenseplate: 'TAS-1989',
          date: '12-13-1989',
        },
        {
          designation: 'Operator',
          lastname: 'Hathaway',
          firstname: 'Anne',
          licenseplate: 'ANN-1982',
          date: '11-12-1982',
        }
      ],
       // End of Non-Operating Units //
       // Start of Coding Units //
          codingoperatings: [
            {
              name: 'designation',
              required: true,
              label: 'Designation',
              align: 'left',
              field: row => row.designation,
              format: val => `${val}`,
              sortable: true
            },
            { name: 'lastname', align: 'center', label: 'Last name', field: 'lastname', sortable: true },
            { name: 'firstname', align: 'center', label: 'First name', field: 'firstname', sortable: true },
            { name: 'licenseplate', align: 'center', label: 'License Plate', field: 'licenseplate', sortable: true },
            { name: 'date', align: 'center', label: 'Date', field: 'date' }
          ],
      codingdata:[
        {
          designation: 'Operator',
          lastname: 'Taylor',
          firstname: 'Swift',
          licenseplate: 'TAS-1989',
          date: '12-13-1989',
        },
        {
          designation: 'Operator',
          lastname: 'Hathaway',
          firstname: 'Anne',
          licenseplate: 'ANN-1982',
          date: '11-12-1982',
        }
      ]
       // End of Coding Units //
    }
  }
}
</script>
<style scoped>

</style>