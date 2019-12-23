<template>
  <v-card class="b-card" color="#835961" elevation="10">
    <v-card-title class="font-weight-bold">
      <v-icon class="mr2">mdi-calendar</v-icon>
      Published on {{ date }}

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon
        >mdi-chevron-down
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-title class="font-weight-bold">
    <v-icon class="mr2">mdi-telescope</v-icon>
      Details
    </v-card-title>

    <v-card-text>
      <span class="white--text">{{ title }}:</span>
      <br>
      "{{ explanation }}"
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class DetailCard extends Vue {
  @Prop() public title: any;

  @Prop() public explanation: any;

  @Prop() public date: any;
}
</script>
