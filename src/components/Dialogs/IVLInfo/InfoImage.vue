<template>
<div>
  <v-img
    :src="assets !== null ? assets[1].href : ''"
    :lazy-src="lazySrc"
    class="br4 elevation-5"
  >
    <template v-slot:placeholder>
      <v-row align="center" justify="center"
        class="fill-height b"
      >Loading.
      </v-row>
    </template>

    <v-row align="start" justify="space-between">
      <v-btn
        class="mt2 deep-purple"
        @click="close"
      >
        <v-icon
        >mdi-chevron-left</v-icon>
        Back
      </v-btn>

      <a v-if="assets !== null"
        :href="assets[0].href"
        download
        target="_blank"
      >

      <v-btn
        icon
        class="mr3 mt2"
      ><v-icon>mdi-download</v-icon>
      </v-btn>
    </a>
    </v-row>
  </v-img>

  <v-alert
    v-show="type === 'video'"
    type="warning"
    class="mt2"
    elevation="2"
    border="left"
  >
    Video files isn't supported as of now,
    I apologize for the inconvenience :(
  </v-alert>

  <v-alert color="deep-purple" elevation="2" class="mt2">
    "Heaven and earth will pass away, but my words will not pass away."
    - <strong>Matthew 24:35</strong>
  </v-alert>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class InfoImage extends Vue {
  @Action('toggleIVLInfo', { namespace: 'dialog' }) public close!: Function;

  @Getter('assetsInfo', { namespace: 'ivl' }) public assets!: object[];

  @Prop() public lazySrc!: string;

  @Prop() public type!: string;
}
</script>
