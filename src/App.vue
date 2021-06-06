<template>
  <v-app>
    <v-app-bar
      app
      color="blue lighten-1"
      dark
    >
      <div>
        <v-img
          alt="Tutorial-Hub log"
          class="ml-2"
          contain
          src="/TutorialHub-logo.svg"
          transition="scale-transition"
          width="150"
          height="75"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn depressed x-large color="blue lighten-1">
        <v-icon left color="white">mdi-home</v-icon>
        Home
      </v-btn>
      <v-btn depressed x-large color="blue lighten-1">
        <v-icon left color="white">mdi-grid</v-icon>
        Tutorials
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import getBaseUrl from "./url"
import axios from 'axios'

export default {
  name: 'App',

  data: () => ({
    tutorials: []
  }),

  methods: {
    setTutorials(res){
      this.tutorials = res.data;
    }
  },

  mounted(){
    axios.get(getBaseUrl() + '/tutorials.json')
      .then(this.setTutorials)
  }
};
</script>
