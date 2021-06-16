<template>
  <v-app class="app">
    <div>
      <v-app-bar
        app
        color="blue lighten-1"
        dark
      >
        <div>
          <v-img
            alt="Tutorial-Hub logo"
            class="ml-2"
            contain
            :src="logo_url"
            transition="scale-transition"
            width="150"
            height="75"
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn depressed x-large color="blue lighten-1" to="/">
          <v-icon left color="white">mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn depressed x-large color="blue lighten-1" to="/tutorials">
          <v-icon left color="white">mdi-grid</v-icon>
          Tutorials
        </v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-main>
        <v-row justify="center" class="mx-3">
          <v-col cols="12" md="10" xl="8">
            <router-view/>
          </v-col>
        </v-row>
      </v-main>
    </div>
    <v-footer class="justify-center">
      <p>&copy; {{new Date().year}} Dario Camenzind, Benjamin Zoronjic | <router-link class="ml-1" to="/Impressum">Impressum</router-link></p>
    </v-footer>
  </v-app>
</template>

<script>
import { getBaseUrl } from './url'


export default {
  name: 'App',
  computed: {
    logo_url(){
      return getBaseUrl() + "/TutorialHub-logo.svg"
    }
  }
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
}
</style>
