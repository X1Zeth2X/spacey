<template>
<div id="landing" class="text-center">
  <h1 class="display-3 font-weight-bold mb2">
    Space-y
  </h1>

  <p class="display-1 w-50-l w-60-md w-90 auto">
    A cool web app about space and everything related.
  </p>

  <v-card
    max-width="35rem"
    class="auto b-card mt-6 w-90"
    color="#341270"
    elevation="10"
  >
    <v-card-text>
      <p>
        To get the full experience please enter your NASA Open API Key.
        Which can be acquired <a href="https://api.nasa.gov/" target="_blank">here</a>.
      </p>

      <v-text-field
        outlined
        label="NASA OpenAPI Key"
      >
      </v-text-field>

      <v-btn block rounded large class="teal font-weight-black">
        <v-icon>mdi-rocket</v-icon>
        Lift Off
      </v-btn>
    </v-card-text>
  </v-card>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Landing extends Vue {}
</script>
