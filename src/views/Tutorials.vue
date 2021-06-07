<template>
  <div>
      <h2>Tutorials</h2>
      <div class="tutorials-list">
          <v-card v-for="(tutorial, index) in tutorials" :key="index">
              <img :srcset="getSrcSet(tutorial)" sizes="(max-width: 600px) 400px, 800px" :src="getSrc(tutorial)" :alt="'Thumbnail for Tutorial ' + tutorial.name"/>
              <v-card-title>{{tutorial.name}}</v-card-title>
              <v-card-text>{{tutorial.tags}}</v-card-text>
          </v-card>
      </div>
  </div>
</template>

<script>
import { getImageUrl } from '../url'

export default {
    name: 'Tutorials',
    props: ['tutorials'],

    methods: {
        getSrcSet(tutorial){
            const sizes = ['250', '400', '650', '800']
            let value = ""

            for(let size of sizes){
                value += getImageUrl(tutorial, size) + ','
            }

            return value.substring(0, value.length - 2)
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
}
</style>