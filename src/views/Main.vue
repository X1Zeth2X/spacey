<template>
<div id="main">
  <MainHelp/>

  <div class="ph4-md ph6-l">
    <v-container>
      <ViewController/>

      <APOD v-if="APODReady"/>

      <div class="text-center mt4" v-else>
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

interface Loading {
  msg: string,
  color: string,
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

  public APODReady: boolean = false;

  public load: Loading = {
    msg: 'Loading awesomeness...',
    color: 'purple',
  }

  public created() {
    if (this.apod === null) {
      this.loadAPOD();
    } else {
      this.APODReady = true;
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
      this.APODReady = true;
    }
  }
}
</script>
