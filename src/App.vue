<template>
  <v-app id="app">
    <Nav/>

    <v-content>
      <v-scroll-x-reverse-transition mode="out-in">
        <router-view class="content"></router-view>
      </v-scroll-x-reverse-transition>
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
    background: #3B1580;
    background: -webkit-linear-gradient(bottom right, #6E146F, #3B1580);
    background: -moz-linear-gradient(bottom right, #6E146F, #3B1580);
    background: linear-gradient(to top left, #6E146F, #3B1580);
  }

  a {
    text-decoration: none;
    color: #FFFE00;
  }

  background-image: url('./assets/Background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;

  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
}
</style>
