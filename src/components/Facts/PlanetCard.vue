<template>
<v-card
  hover
  class="b-card"
>
  <v-img
    :src="object.image"
    min-height="15em"
    class="black"
  >
    <template v-slot:placeholder>
      <v-row
        align="center"
        justify="center"
        class="fill-height ma-0"
      >
        <v-progress-circular
          indeterminate
          color="deep-purple"
        />
      </v-row>
   </template>
  </v-img>

  <v-card-text class="white--text">
    <strong class="subtitle-1">
      {{ object.name }}
    </strong>
    <br>
    <span class="caption" style="color: #FBFF00;">"{{ object.nickname }}"</span>
  </v-card-text>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class PlanetCard extends Vue {
  @Prop() public object!: any;
}
</script>
