<template>
<div id="main" :class="{'bg-space': currentView !== 1}">
  <MainHelp/>

  <div class="ph4-md ph6-l">
    <v-container>
      <ViewController v-on:executeCMD="checkView"/>

      <keep-alive>
        <v-slide-x-transition mode="out-in">
          <component :is="viewMode[currentView].component"></component>
        </v-slide-x-transition>
      </keep-alive>

    </v-container>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { Getter, Action } from 'vuex-class';

import APOD from '@/components/Main/APOD.vue';
import ViewController from '@/components/Main/ViewController.vue';
import MainHelp from '@/components/Dialogs/MainHelp.vue';

interface Command {
  name: string;
  component: any;
}

@Component({
  components: {
    APOD,
    ViewController,
    MainHelp,
  },
})
export default class Main extends Vue {
  @Action('getAPOD', { namespace: 'apod' }) public getAPOD: any;

  @Getter('apod', { namespace: 'apod' }) public apod: any;

  public currentView: number = 0;

  public created() {
    this.checkView();
  }

  public viewMode: Command[] = [
    {
      name: 'apod',
      component: APOD,
    },
    {
      name: 'ivl',
      // Lazy import IVL
      component: () => import('@/components/Main/IVL.vue'),
    },
  ]

  public checkView() {
    const mode: any = this.$route.query.view;

    if (mode !== null) {
      const index = this.viewMode.map(
        e => e.name,
      ).indexOf(mode);

      if (index !== -1) {
        this.currentView = index;
      }
    }
  }
}
</script>
