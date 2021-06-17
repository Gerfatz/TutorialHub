<template>
  <div>
    <h1 class="text-center mt-5">Welcome to TutorialHub</h1>
    <v-row justify="center" class="mt-3">
      <v-col cols="11" md="8" xl="6">
        <v-card max-width="800">
          <v-carousel :cycle="true" class="carousel">
            <v-carousel-item v-for="(tutorial, index) in tutorials" to="/tutorials" :key="index" class="justify-center">
              <h3>{{tutorial.name}}</h3>
              <img :src="'content/images/o_' + tutorial.thumbnail" :alt="'Thumbnail for Tutorial: ' + tutorial.name"/>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <h1 class="text-center mt-2">About us</h1>
    <p>Hi there! We're a small multi-trillion dollar company that preys on the weak by profiting of their lack of basic knowledge. On our site, you can learn important skills, such as "How to open a fridge" or "How to make a suprise birthday present". We know where you live. (Also, this site is very satire)</p>
  </div>
</template>

<script>
  import FImage from '../components/FImage.vue'

  export default {
    name: 'Home',
    props: ['tutorials'],
    components: {
      FImage
    }
  }
</script>

<style>
.carousel img{
  max-height: 100%;
  width: 100%;
}

.carousel h3 {
  text-align: center;
  background-color: #42A5F5;
  color: white;
}
</style>
