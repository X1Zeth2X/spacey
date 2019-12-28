<template>
<v-dialog
  :value="show"
  fullscreen
  transition="dialog-bottom-transition"
>
  <v-card id="IVLInfo">
    <v-container fluid>
      <v-row
        align="start"
        justify="space-between"
        class="pa3"
      >

        <v-col cols="12"
          md="6"
        ><InfoImage
          :mainSrc="assets ? assets[0].href : ''"
          :lazySrc="image.href"
          :type="data.media_type"
        /></v-col>

        <v-col cols="12"
          md="6"
          class="pr4"
        >
          <div class="headline font-weight-black mb0">
            {{ data.title }}
          </div>

          <div class="f4 font-weight-light">
            Created on {{ prettifyDate(data.date_created) }}
            {{ data.secondary_creator ? `by ${data.secondary_creator}` : null}}
          </div>

          <p class="mt3"
          >{{ data.description }}
          </p>

          <v-divider class="mb3"></v-divider>

          <v-expansion-panels
            class="expansion-style"
            multiple
          >
            <v-expansion-panel>
              <v-expansion-panel-header class="subtitle-1 font-weight-bold">
                NASA ID & Center
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                {{ data.nasa_id }},
                {{ data.center }}
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel v-if="data.keywords">
              <v-expansion-panel-header class="subtitle-1 font-weight-bold">
                Keywords
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <br>
                <v-chip
                  v-for="(word, index) in data.keywords"
                  :key="index"
                  color="deep-purple"
                  class="elevation-5 mr3 mb2 font-weight-bold"
                  @click="searchKeyword(word)"
                >{{ word }}
                </v-chip>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</v-dialog>
</template>

<script lang="ts">
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["updateFeed"] }] */

import Vue from 'vue';
import Component from 'vue-class-component';
import moment from 'moment';
import { Getter, Action } from 'vuex-class';
import { Prop, Watch, Emit } from 'vue-property-decorator';

import { Info } from '@/store/modules/ivl/types';
import InfoImage from './IVLInfo/InfoImage.vue';

const namespace: string = 'dialog';

@Component({
  components: {
    InfoImage,
  },
})
export default class IVLInfo extends Vue {
  @Getter('IVLInfo', { namespace }) public show!: boolean;

  @Getter('currentInfo', { namespace: 'ivl' }) public info!: Info;

  @Getter('assetsInfo', { namespace: 'ivl' }) public assets!: any;

  @Action('toggleIVLInfo', { namespace }) public close!: Function;

  @Action('search', { namespace: 'ivl' }) public search!: Function;

  @Watch('info')
  onInfoChange(value: Info, oldValue: Info | null) {
    this.setInfo();
  }

  public data: object = {};

  public image: object = {}

  public date: string = '';

  public mounted() {
    this.setInfo();
  }

  public setInfo() {
    if (this.info !== null) {
      const data: any = this.info.data[0];
      const image = this.info.links[0];

      this.data = data;
      this.image = image;
    }
  }

  public prettifyDate = (date: string): string => {
    const prettyDate: string = moment(date).format('MMM Do YYYY');
    return prettyDate;
  }

  @Emit('updateFeed')
  public updateFeed() {
    return true;
  }

  public async searchKeyword(word: string) {
    // Search for the keyword
    const params: object = {
      query: '',
      page: 1,
      keywords: word,
    };

    const resp = await this.search(params);

    if (resp) {
      // Update the feed and close dialog
      this.updateFeed();
      this.close();
    }
  }
}
</script>

<style lang="scss" scoped>
#IVLInfo {
  background: #2b5876;  /* fallback for old browsers */
  background-image: linear-gradient(to left bottom, #413c63, #624672, #844f7b, #a6587f, #c5647e);

  border-radius: 3em 3em 0 0;

  .expansion-style {
    border-radius: 1em;
  }
}
</style>
