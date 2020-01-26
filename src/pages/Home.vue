<template>
<q-layout>
    <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      infinite
      v-model="slide"
      height="400px"
    >
      <q-carousel-slide 
      v-for="item in carouselslide" 
      :key="item.name"
      :name="item.name" 
      :img-src="item.image">

        <div class="absolute-bottom custom-caption">
          <div class="text-h2">{{ item.title }}</div>
          <div class="text-subtitle1">{{ item.subtext }}</div>
        </div>
      </q-carousel-slide>  
    </q-carousel>
  </div>
  
  <div class="q-pa-md doc-container">
       <div class="row">
      <div 
        class="col q-pa-md"
        v-for="card in cards"
        :key="card.title"
        cols="12"
        xs="12"
        sm="12"
        md="4"
      >
        <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
            <q-card-section>
                <q-item-section avatar>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>    
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                lorem
            </q-card-section>
        </q-card>

      </div>
    </div>    
  </div>  


</q-layout>
</template>  

<script>
export default {
  data () {
    return {
      slide: "first",
      cards: [
        {icon: 'mdi-home', title: 'About', link: '/about'},
        {icon: 'mdi-bank', title: 'Services' , link: '/services'},
        {icon: 'mdi-lock', title: 'Online Inquiry', link: '/login'}
      ],
      carouselslide: [
          {
            name:'first', 
            image:'http://tempo.com.ph/wp-content/uploads/2018/08/fuel-cards.jpg',
            title:'Pantawid Pasada', 
            subtext:'You can claim your cards now'
          },
          {
            name:'second', 
            image:'https://businessmirror.com.ph/wp-content/uploads/2018/06/top02-061918.jpg',
            title:'PUV Modernization', 
            subtext:'The future of transportation'
          }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .5)
</style>