<template>
<div id="apod">
  <div class="text-center mt4"
    v-if="!ready"
  >
    <v-progress-circular
      class="text-center"
      indeterminate
      size="50"
      width="10"
      :color="load.color"
    ></v-progress-circular>
    <p class="font-weight-black subheading mt2">
      {{ load.msg }}
    </p>
  </div>

  <v-row align="start" justify="space-between" v-else>
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
import { Getter, Action } from 'vuex-class';

import ImageCard from './APOD/ImageCard.vue';
import DetailCard from './APOD/DetailCard.vue';

const namespace: string = 'apod';

interface Loading {
  msg: string,
  color: string,
}

@Component({
  components: {
    ImageCard,
    DetailCard,
  },
})
export default class APOD extends Vue {
  @Action('getAPOD', { namespace }) public getAPOD: any;

  @Getter('apod', { namespace }) public apod: any;

  public ready: boolean = false;

  public load: Loading = {
    msg: 'Loading awesomeness...',
    color: 'purple',
  }

  public created() {
    if (!this.ready) {
      this.loadAPOD();
    }
  }

  public async loadAPOD() {
    const info = await this.getAPOD();

    if (info === false) {
      this.load.msg = 'Invalid request, check API key.';
      this.load.color = 'error';

      localStorage.removeItem('apiKey');
      setTimeout(() => {
        this.$router.push({
          name: 'home',
        });
      }, 3 * 1000);
    } else {
      this.ready = true;
    }
  }
}
</script>
