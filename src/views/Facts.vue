<template>
<div id="facts" class="text-center bg-space">
  <h1 class="display-2 font-weight-bold mb2">
    Cool Space Fact 👽
  </h1>
  <p class="mw6 auto">
    Some random space facts that are cool *shrug*,
  </p>

  <FactCard/>

  <SolarSystem/>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import FactCard from '@/components/Facts/FactCard.vue';
import SolarSystem from '@/components/Facts/SolarSystem.vue';

@Component({
  components: {
    FactCard,
    SolarSystem,
  },
})
export default class Facts extends Vue {}
</script>
