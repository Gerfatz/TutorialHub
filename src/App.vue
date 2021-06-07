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
        <router-view/>
      </v-main>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
.app {
  display: flex;
  justify-content: center;
}

.app > div {
  max-width: 90%;
}
</style>
