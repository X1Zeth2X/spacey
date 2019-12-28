<template>
<div id="ivl">
  <Search v-on:updateFeed="updateFeed"/>

  <ViewMode
    :view="view"
    :metadata="feed.metadata"

    v-on:viewPopular="loadPopular"
    v-on:viewRecent="loadRecent"
    v-on:toggleView="toggleView"
  />

  <IVLInfo v-on:updateFeed="updateFeed"/>

  <div class="text-center mt4"
    v-if="!ready"
  >
    <v-progress-circular
      class="text-center"
      indeterminate
      size="50"
      width="10"
      color="amber"
    ></v-progress-circular>
    <p class="font-weight-black subheading mt2">
      {{ loadMsg }}
    </p>
  </div>

  <masonry
    v-else
    :cols="{
      default: 4, 1264:
      3, 960:
      2, 600:
      1
    }"
    :gutter="10"
    class="mt3"
  >
    <div
      v-for="collection in items"
      :key="collection.data[0].nasa_id"
    ><ImageCard :collection="collection"/>
    </div>
  </masonry>
</div>
</template>;

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';

import Search from './IVL/Search.vue';
import ImageCard from './IVL/ImageCard.vue';
import ViewMode from './IVL/ViewMode.vue';

import IVLInfo from '@/components/Dialogs/IVLInfo.vue';

import { SearchParams } from '@/services/ivl.service';
import { Collection } from '@/store/modules/ivl/types';

const namespace: string = 'ivl';

@Component({
  components: {
    Search,
    ImageCard,
    ViewMode,

    IVLInfo,
  },
})
export default class IVL extends Vue {
  @Getter('loading', { namespace }) public loading!: boolean;

  @Getter('feed', { namespace }) public feed!: Collection;

  @Action('getPopular', { namespace }) public getPopular!: Function;

  @Action('getRecent', { namespace }) public getRecent!: Function;

  public ready: boolean = false;

  public loadMsg: string = 'Loading...';

  public items: object[] = [];

  public view: string = 'popular';

  public imageView: boolean = true;

  public beforeMount() {
    this.loadPopular();
  }

  public async loadPopular() {
    const loaded = await this.getPopular();
    if (loaded) {
      this.view = 'popular';
      this.updateFeed();
    }
  }

  public async loadRecent() {
    const loaded = await this.getRecent();
    if (loaded) {
      this.view = 'recent';
      this.updateFeed();
    }
  }

  public toggleView() {
    this.imageView = !this.imageView;
  }

  public updateFeed() {
    this.ready = false;
    this.loadMsg = 'Collecting data from rovers and satellites...';
    this.items = this.feed.items;

    setTimeout(() => {
      this.ready = true;
    }, 2 * 1000);
  }
}
</script>
