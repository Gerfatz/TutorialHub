<template>
  <div>
    <h1 class="text-center mt-5">Welcome to TutorialHub</h1>
    <p><!--About Section here--></p>
    <v-carousel>
      <v-carousel-item v-for="(tutorial, index) in tutorials" :key="index" class="justify-center">
        <FImage class="carousel-image" :tutorial="tutorial" :sizes="false" :alt="'Thumbnail for Tutorial: ' + tutorial.name"></FImage>
      </v-carousel-item>
    </v-carousel>
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
.v-carousel img{
  height: 100%;
  width: auto;
}
</style>
