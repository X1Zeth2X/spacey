<template>
<div id="apod">
  <v-row align="start" justify="space-between">
    <v-col cols="12" xs="12" md="6">
      <v-card class="b-card" elevation="10" color="#835961">
        <v-card-title class="font-weight-bold">
          <v-icon class="mr2">mdi-weather-night</v-icon>
          Astronomy Picture of the Day
        </v-card-title>
        <a :href="apod.hd_url" target="_blank">
        <v-img
          :src="apod.url"
        ></v-img>

        </a>
      </v-card>
    </v-col>

    <v-col cols="12" md="5">
      <v-card class="b-card" color="#835961" elevation="10">
        <v-card-title class="font-weight-bold">
        <v-icon class="mr2">mdi-telescope</v-icon>
          Details
        </v-card-title>

        <v-card-text>
          <span class="white--text">{{ apod.title }}:</span>
          <br>
          "{{ apod.explanation }}"
        </v-card-text>

        <v-divider></v-divider>

        <v-card-title class="font-weight-bold">
          <v-icon class="mr2">mdi-calendar</v-icon>
          Published on {{ apod.date }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';

const namespace: string = 'apod';

@Component
export default class APOD extends Vue {
  @Getter('apod', { namespace }) public apod: any;
}
</script>
