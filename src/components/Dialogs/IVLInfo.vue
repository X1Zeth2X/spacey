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
      >

        <v-col cols="12"
          md="6"
        >
          <v-img
            :src="media.href"
            class="br4 elevation-5"
          >
            <v-row align="start" justify="space-between">
              <v-btn
                class="mt2 deep-purple"
                @click="close"
              >
                <v-icon
                >mdi-chevron-left</v-icon>
                Back
              </v-btn>

              <v-btn
                icon
                class="mr3 mt2"
              ><v-icon>mdi-menu</v-icon>
              </v-btn>
            </v-row>
          </v-img>
        </v-col>

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
                  color="teal"
                  class="elevation-5 mr3 mb2"
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
import Vue from 'vue';
import Component from 'vue-class-component';
import moment from 'moment';
import { Getter, Action } from 'vuex-class';
import { Prop, Watch } from 'vue-property-decorator';

import { Info } from '@/store/modules/ivl/types';

const namespace: string = 'dialog';

@Component
export default class IVLInfo extends Vue {
  @Getter('IVLInfo', { namespace }) public show!: boolean;

  @Getter('currentInfo', { namespace: 'ivl' }) public info!: Info;

  @Action('toggleIVLInfo', { namespace }) public close!: Function;

  @Watch('info')
  onInfoChange(value: Info, oldValue: Info | null) {
    this.setInfo();
  }

  public data: object = {};

  public media: object = {}

  public date: string = '';

  public mounted() {
    this.setInfo();
  }

  public setInfo() {
    if (this.info !== null) {
      const data = this.info.data[0];
      const media = this.info.links[0];

      this.data = data;
      this.media = media;
    }
  }

  public prettifyDate = (date: string): string => {
    const prettyDate: string = moment(date).format('MMM Do YYYY');
    return prettyDate;
  }
}
</script>

<style lang="scss" scoped>
#IVLInfo {
  background: #2b5876;  /* fallback for old browsers */
  background-image: linear-gradient(to left bottom, #413c63, #624672, #844f7b, #a6587f, #c5647e);

  border-radius: 2em 2em 0 0;

  .expansion-style {
    border-radius: 1em;
  }
}
</style>
