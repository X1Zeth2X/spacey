<template>
<v-card
  max-width="35rem"
  class="b-card w-50-l w-60-md w-90 auto pb2"
  color="#341270"
  elevation="10"
>
  <v-card-text class="headline">
    "Light year is a measure of distance, not time.
    It is the distance that light travels during one Earth year
    (The speed of light is 300,000km/s, which means that this is a very,
    tremendously, amazingly huge distance of over 9.5 trillion km)"
  </v-card-text>

  <v-card-actions>
    <v-btn
      icon
      x-large
      class="mt4 teal"
      elevation="10"
      absolute
      right
    >
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class FactCard extends Vue {}
</script>
