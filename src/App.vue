<template>
  <v-app id="app">
    <Nav/>

    <v-content>
      <v-scale-transition mode="out-in">
        <router-view class="content"></router-view>
      </v-scale-transition>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Fira Sans', sans-serif;

  .content {
    padding-top: 6rem;
  }

  .auto {
    margin: 0 auto;
  }

  .b-card {
    border-radius: 1em;
  }

  a {
    text-decoration: none;
    color: #FFFE00;
  }

  background: url('./assets/Background.svg');
  background-size: auto;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
