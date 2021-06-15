<template>
  <div>
    <h1 class="text-center mt-5">Welcome to TutorialHub</h1>
    <v-row justify="center" class="mt-3">
      <v-col cols="11" md="8" xl="6">
        <v-card max-width="800">
          <v-carousel :cycle="true" class="carousel">
            <v-carousel-item v-for="(tutorial, index) in tutorials" :key="index" class="justify-center">
              <FImage :tutorial="tutorial" :sizes="false" :alt="'Thumbnail for Tutorial: ' + tutorial.name"></FImage>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
    <p><!--About Section here--></p>
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
  height: 100%;
  width: 100%;
}
</style>
