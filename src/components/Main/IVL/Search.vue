<template>
<v-card class="b-card">
  <v-alert type="info" dense color="blue darken-4">
    Background image is turned off for better performance.
  </v-alert>

  <v-card-title class="font-weight-bold">
    <v-icon class="mr2">mdi-image-filter</v-icon>
    Image and Video Library
  </v-card-title>

  <v-card-text>
    <v-text-field
      filled
      label="Search"
      append-icon="mdi-magnify"
      rounded
      persistent-hint
      hint="Lookup things like 'Earth', 'Gemini', and more."
      v-model="searchParams.query"
      @keyup.enter="searchReq"
      @click:append="searchReq"
      :disabled="loading"
    ></v-text-field>
  </v-card-text>
</v-card>
</template>

<script lang="ts">
/* eslint class-methods-use-this: 0 */
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, Getter } from 'vuex-class';
import { Emit } from 'vue-property-decorator';

import { SearchParams } from '@/services/ivl.service';

const namespace: string = 'ivl';

@Component
export default class Search extends Vue {
  @Getter('loading', { namespace }) public loading!: boolean;

  @Action('search', { namespace }) public search!: Function;

  public searchParams: SearchParams = {
    query: '',
    page: 1,
  }

  @Emit('updateFeed')
  public updateFeed() {
    return true;
  }

  public async searchReq() {
    if (this.searchParams.query !== '') {
      const resp = await this.search(this.searchParams);

      if (resp) {
        this.updateFeed();
      }
    }
  }
}
</script>
