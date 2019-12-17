<template>
<div id="main">
  <div class="ph4-md ph6-l">
    <v-container>
      <APOD/>
    </v-container>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import APOD from '@/components/Main/APOD.vue';

@Component({
  components: {
    APOD,
  },
})
export default class Main extends Vue {
  /*
  Do something to check if the APIKey is valid.
  If the API Key is not valid then remove the apiKey
  from localStorage and kick the user back home,
  then alert them about the invalid key.
  */
}
</script>
