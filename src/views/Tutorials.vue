<template>
  <div>
      <h1 class="mt-5 mb-3">Tutorials</h1>
      <v-overlay v-if="currentTutorial">
        <v-card light class="py-2">
            <v-card-title class="justify-space-between">
                <p class="my-2">{{currentTutorial.name}}</p>
                <v-icon color="black" @click="currentTutorial = null">mdi-close</v-icon>
            </v-card-title>
            <img class="overlay-image" :src="'content/images/o_' + currentTutorial.thumbnail" :alt="'Thumbnail for Tutorial ' + currentTutorial.name"/>
            <div class="ml-4 mt-2">
                <v-btn color="blue" v-if="currentTutorial.article" :to="'/article/' + currentTutorial.name" class="mr-2 white--text">
                    <v-icon left>mdi-script-text-outline</v-icon> Article Version
                </v-btn>
                <v-btn color="blue" v-if="currentTutorial.video" :to="'/video/' + currentTutorial.name" class="white--text">
                    <v-icon left>mdi-play</v-icon>
                    Video Version
                </v-btn>
            </div>
            <p class="text-wrap mx-4 my-3">{{currentTutorial.description}}</p>
        </v-card>
      </v-overlay>
      <div class="tutorials-list">
          <v-card class="tutorial mx-1" v-for="(tutorial, index) in tutorials" :key="index" @click="currentTutorial = tutorial">
              <FImage :tutorial="tutorial" :alt="'Thumbnail for Tutorial ' + tutorial.name"></FImage>
              <v-card-title>{{tutorial.name}}</v-card-title>
              <v-card-text>
                  <span v-for="(tag, j) in tutorial.tags" :key="j">
                      {{tag}}
                      <span v-if="j < tutorial.tags.length - 1">, </span>
                  </span>
              </v-card-text>
          </v-card>
      </div>
  </div>
</template>

<script>
import FImage from '../components/FImage.vue'

export default {
    name: 'Tutorials',
    props: ['tutorials'],
    components: {
        FImage
    },
    data: function() {
        return {
            currentTutorial: null
        }
    }
}
</script>

<style>
.tutorials-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.tutorials-list > img {
    width: 100%;
    height: auto;
}

.tutorial {
    cursor: pointer;
}

.overlay-image{
    max-width: 800px;
}

.text-wrap{
    max-width: 750px;
    overflow-wrap: break-word;
}


</style>