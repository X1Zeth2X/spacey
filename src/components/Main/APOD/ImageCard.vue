<template>
  <v-card class="b-card" elevation="10" color="#835961">
    <APODImage
      :type="type"
      :url="hdurl"
    />

    <v-card-title class="font-weight-bold">
      <v-icon class="mr2">mdi-weather-night</v-icon>
      Astronomy Picture of the Day
    </v-card-title>

    <v-img
      :src="url"
      v-if="type === 'image'"
      @click="toggleHDImage"
    >
      <template v-slot:placeholder>
        <v-skeleton-loader
          tile
          transition="scale-transition"
          type="image"
          class="fill-height ma-0"
        ></v-skeleton-loader>
      </template>
    </v-img>

    <div v-else class="deep-purple pa3 pv4">
      <v-row align="center" justify="center" class="fill-height">
        <a :href="url" target="_blank">
          <v-btn class="info darken-2">
            Click here to watch
          </v-btn>
        </a>
      </v-row>

    </div>

    <v-card-text v-show="!!copyright">
      Copyright: "{{ copyright }}"
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import APODImage from '@/components/Dialogs/APODImage.vue';

const namespace: string = 'dialog';

@Component({
  components: {
    APODImage,
  },
})
export default class ImageCard extends Vue {
  @Action('toggleHDImage', { namespace }) public toggleHDImage!: Function;

  @Prop() public url!: string;

  @Prop() public hdurl!: string;

  @Prop() public copyright!: string;

  @Prop() public type!: string;
}
</script>
