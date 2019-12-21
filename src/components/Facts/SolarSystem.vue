<template>
<div id="solarSystem" class="mt5">
  <v-divider
    style="width: 20em;"
    class="auto"
  />
  <h1 class="display-2 font-weight-bold mb2">
    Solar System 🌌
  </h1>
  <p>Pick a planet to learn cool facts about it UwU</p>

  <v-row
    align="center"
    justify="space-between"
    class="w-80-ns auto"
  >
    <v-col
      lg="3"
      md="4"
      sm="6"
      v-for="(object, index) in solarSystem"
      :key="index"
      class="w-80-ns auto"
    >
      <PlanetCard :object="object" />
    </v-col>
  </v-row>

  <p>Images by <a href="https://pixabay.com/" target="_blank">Pixabay</a>.</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import PlanetCard from '@/components/Facts/PlanetCard.vue';

@Component({
  components: {
    PlanetCard,
  },
})
export default class SolarSystem extends Vue {
  public solarSystem: object[] = [
    {
      name: 'Mercury',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/18/36/mercury-153570_960_720.png',
      nickname: 'Swift Planet',
    },
    {
      name: 'Venus',
      image: 'https://cdn.pixabay.com/photo/2012/04/10/17/39/venus-26620_960_720.png',
      nickname: 'Morning Star and Evening Star',
    },
    {
      name: 'Earth',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/13/24/atmosphere-146971_960_720.png',
      nickname: 'Blue Planet',
    },
    {
      name: 'Mars',
      image: 'https://cdn.pixabay.com/photo/2012/04/05/00/54/mars-25461_960_720.png',
      nickname: 'Red Planet',
    },
    {
      name: 'Jupiter',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/18/36/jupiter-153563_960_720.png',
      nickname: 'Giant planet',
    },
    {
      name: 'Saturn',
      image: 'https://cdn.pixabay.com/photo/2012/04/10/17/38/saturn-26618_960_720.png',
      nickname: 'Ringed planet',
    },
    {
      name: 'Uranus',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/18/36/uranus-153572_960_720.png',
      nickname: 'Ice Giant',
    },
    {
      name: 'Neptune',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/18/36/neptune-153571_960_720.png',
      nickname: 'Big Blue planet',
    },
  ]
}
</script>
