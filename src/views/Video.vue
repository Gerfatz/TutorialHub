<template>
  <v-row justify="center" class="mt-5">
      <v-col cols="11" md="8">
        <video controls autoplay ref="player" class="video"></video>
        <div class="d-flex justify-space-between">
            <h2>{{tutorial.name}}</h2>
            <v-btn color="blue" v-if="tutorial.article" :to="'/article/' + tutorial.name" class="mr-2 white--text">
                    <v-icon left>mdi-script-text-outline</v-icon> Article Version
            </v-btn>
        </div>
        <p class="mt1">{{tutorial.description}}</p>
      </v-col>
  </v-row>
</template>

<script>
import { MediaPlayer } from 'dashjs'
import { getBaseUrl } from '../url'

export default {
    name: 'Video',
    props: ['tutorial'],
    computed: {
        src(){
            return getBaseUrl() + '/content/videos/' + this.tutorial.video + '/manifest.mpd'
        }
    },
    mounted(){
        const player = MediaPlayer().create();
        player.initialize(this.$refs.player, this.src)
    }
}
</script>

<style>
.video {
    width: 100%;
}
</style>