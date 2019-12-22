<template>
  <v-card
    class="b-card mb2"
    @click="viewCollection"
    v-if="collection.links !== undefined"
  >
    <v-img
      :src="collection.links[0].href"
    >
      <v-row
        v-if="collection.data[0].media_type === 'video'"
        align="center"
        justify="center"
        class="fill-height"
      >
        <v-btn
          class="amber darken-4 pa3"
          icon
        ><v-icon>mdi-video</v-icon>
        </v-btn>
      </v-row>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import { Collection } from '@/store/modules/ivl/types';

const namespace: string = 'ivl';

@Component
export default class ImageCard extends Vue {
  @Prop() collection!: object;

  @Prop() index!: number;

  public isActive: boolean = false;

  public viewCollection() {
    console.log(this.collection);
  }
}
</script>
