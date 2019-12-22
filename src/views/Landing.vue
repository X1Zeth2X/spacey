<template>
<div id="landing" class="text-center bg-space">
  <h1 class="display-3 font-weight-bold mb2">
    Space-y
  </h1>

  <p class="display-1 w-50-l w-60-md w-90 auto">
    A cool web app about space and everything related.
  </p>

  <APICard class="mt-6"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import APICard from '@/components/Landing/APICard.vue';

@Component({
  components: {
    APICard,
  },
})
export default class Landing extends Vue {}
</script>
