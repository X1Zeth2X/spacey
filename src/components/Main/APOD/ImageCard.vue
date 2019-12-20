<template>
  <v-card class="b-card" elevation="10" color="#835961">
    <v-card-title class="font-weight-bold">
      <v-icon class="mr2">mdi-weather-night</v-icon>
      Astronomy Picture of the Day
    </v-card-title>
    <a :href="hdurl" target="_blank">
      <v-img
        :src="url"
        :lazy-src="url"
      >
        <template v-slot:placeholder>
          <v-skeleton-loader
            tile
            transition="scale-transition"
            type="image"
            class="h-100"
          ></v-skeleton-loader>
        </template>
      </v-img>
    </a>

    <v-card-text v-show="!!copyright">
      Copyright: "{{ copyright }}"
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class ImageCard extends Vue {
  @Prop() public url: any;

  @Prop() public hdurl: any;

  @Prop() public copyright: any;
}
</script>
