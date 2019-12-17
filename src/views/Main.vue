<template>
<div id="main">
  This is the main view.
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Main extends Vue {
  /*
  Do something to check if the APIKey is valid.
  If the API Key is not valid then remove the apiKey
  from localStorage and kick the user back home,
  then alert them about the invalid key.
  */
}
</script>
