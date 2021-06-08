<template>
  <div>
      <h2>Tutorials</h2>
      <div class="tutorials-list">
          <v-card v-for="(tutorial, index) in tutorials" :key="index">
              <img :srcset="getSrcSet(tutorial)" sizes="(min-width: 600px) 50vw, (min-width: 1200px) 33vw, 100vw" :src="getSrc(tutorial)" :alt="'Thumbnail for Tutorial ' + tutorial.name"/>
              <v-card-title>{{tutorial.name}}</v-card-title>
              <v-card-text>{{tutorial.tags}}</v-card-text>
          </v-card>
      </div>
  </div>
</template>

<script>
import { getImageUrl, getSrcSetPart } from '../url'

export default {
    name: 'Tutorials',
    props: ['tutorials'],

    methods: {
        getSrcSet(tutorial){
            const sizes = ['250', '400', '650', '800']
            let value = ""

            for(let size of sizes){
                value += getSrcSetPart(tutorial, size) + ','
            }

            return value.substring(0, value.length - 1)
        },

        getSrc(tutorial){
            return getImageUrl(tutorial, 800)
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
</style>