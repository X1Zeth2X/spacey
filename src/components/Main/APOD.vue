<template>
<div id="apod">
  <v-row align="start" justify="space-between">
    <v-col cols="12" xs="12" md="6">
      <ImageCard
        :hdurl="apod.hdurl"
        :url="apod.url"
        :copyright="apod.copyright"
      />
    </v-col>
    <v-col cols="12" md="5">
      <DetailCard
        :title="apod.title"
        :explanation="apod.explanation"
        :date="apod.date"
      />
    </v-col>
  </v-row>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter } from 'vuex-class';

import ImageCard from './APOD/ImageCard.vue';
import DetailCard from './APOD/DetailCard.vue';

const namespace: string = 'apod';

@Component({
  components: {
    ImageCard,
    DetailCard,
  },
})
export default class APOD extends Vue {
  @Getter('apod', { namespace }) public apod: any;
}
</script>
