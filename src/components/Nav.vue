<template>
  <v-app-bar
    id="nav"
    dense
    height="70"
    absolute
    class="mt-4 auto w-80-l w-80-md w-90"
  >
    <v-toolbar-title v-show="$vuetify.breakpoint.mdAndUp">
      <v-btn icon large
        @click="easterEgg"
      >
        <v-icon large color="#FFFEF3">mdi-space-invaders</v-icon>
      </v-btn>
    </v-toolbar-title>

    <v-btn
      large
      color="#A581ED"
      rounded
      class="font-weight-black ml2"
      :disabled="$route.name === 'home' || $route.name === 'main'"
      @click="$router.push({ name: 'home' })"
      :icon="$vuetify.breakpoint.smAndDown"
    >
      <v-icon large v-if="$vuetify.breakpoint.smAndDown">mdi-home-variant</v-icon>
      <span v-else>Home</span>
    </v-btn>


    <v-spacer></v-spacer>

    <v-btn
      v-for="r in navButtons" :key="r.route"
      large
      rounded
      class="font-weight-black ml2"
      :color="r.color"
      :disabled="$route.name === r.route"

      @click="$router.push({ name: r.route })"
    >
      {{ r.label }}
    </v-btn>
   </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Nav extends Vue {
  public invaderClick: number = 0;

  public easterEgg() {
    if (this.invaderClick === 5) {
      // eslint-disable-next-line
      alert('Stop that hooman!\nThat isn\'t funny 😡');
      this.invaderClick = 0;
    } else {
      this.invaderClick += 1;
    }
  }

  public navButtons: object[] = [
    {
      label: 'Cool Facts',
      route: 'facts',
      color: '#F18D9E',
    },
    {
      label: 'About',
      route: 'about',
      color: '#F8A055',
    },
  ]
}
</script>

<style lang="scss">
#nav {
  border-radius: 2em;
  background-color: rgba(99,61,124, .5)
}
</style>
