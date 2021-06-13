<template>
  <v-row justify="center" class="mt-5">
      <v-col cols="11" md="8">
        <video controls autoplay ref="player" class="video"></video>
        <h2>{{tutorial.name}}</h2>
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
            return getBaseUrl() + '/content/videos/' + this.tutorial.name + '/manifest.mpd'
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