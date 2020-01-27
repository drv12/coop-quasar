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
          :img-src="item.image"
          >
            
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
          class="col-xs-12 col-sm-6 col-md-3 q-pa-md"
          v-for="card in cards"
          :key="card.title"
          >

          <q-card
          class="my-card text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%); height: 300px"
          inline
          >

              <q-card-section>
                  <div class="text-h6">{{card.title}}</div>
                  <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{ lorem }}
              </q-card-section>
          </q-card>
        </div>
      </div>    
    </div>  

    <div>
      <div class = "row-auto" >
            <q-card class="q-pa-md doc-container">
              <q-card-section>
                  <div class="text-h6">Something-something</div>
                  <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                {{ lorem }}
              </q-card-section>
            </q-card>
      </div>      
    </div>

  </q-layout>
</template>  

<script>
const cards =  [
{
  icon: 'mdi-home', 
  title: 'Investment and Savings', 
  link: '/about',
  desc: ''
},
{
  icon: 'mdi-bank', 
  title: 'Loans', 
  link: '/services'
},
{
  icon: 'mdi-bank', 
  title: 'Benefits', 
  link: '/services'
},
{
  icon: 'mdi-lock',
  title: 'Account Inquiry',
  link: '/login'
}
]

export default {
  data () {
    return {
      slide: "first",
      lorem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus autem ratione animi aut quidem ducimus quo. Necessitatibus dicta porro in maiores. Voluptatem rem vel voluptatum vitae harum dolorum dignissimos eaque?',
      cards,
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