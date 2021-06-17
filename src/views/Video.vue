<template>
  <div>
    <video controls autoplay ref="player" class="video">
        <track v-if="tutorial.subtitles" src="content/videos/subtitles_de.vtt" kind="subtitles" label="de" />
        <track v-if="tutorial.subtitles" src="content/videos/subtitles_en.vtt" kind="subtitles" label="en" />
    </video>
    <div class="d-flex justify-space-between">
        <h2>{{tutorial.name}}</h2>
        <v-btn color="blue" v-if="tutorial.article" :to="'/article/' + tutorial.name" class="mr-2 white--text">
                <v-icon left>mdi-script-text-outline</v-icon> Article Version
        </v-btn>
    </div>
    <p class="mt1">{{tutorial.description}}</p>
  </div>
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