<template>
<v-card
  max-width="35rem"
  class="b-card w-50-l w-60-md w-90 auto pb2"
  color="#341270"
  elevation="10"
>
  <div v-if="currentFact !== undefined || !requesting"
    :class="[{'pt3': !currentFact.title}]"
  >
    <v-card-title class="amber--text headline" v-show="currentFact.title">
      <v-spacer></v-spacer>
      {{ currentFact.title }}
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text
      :class="currentFact.title ? 'title' : 'headline'"
      v-show="currentFact.content !== undefined"
    >
      "{{ currentFact.content }}"
    </v-card-text>

    <v-card-text>
      Please note that our API sleeps when unused, so it might take a minute to wake up
      to send your cool facts! More @ <a href="./about">About</a>.
    </v-card-text>


    <v-progress-circular
      v-show="factsInfo.length === 0"
      indeterminate
      class="mv4 font-weight-black tc"
      color="amber"
      width="6"
    ></v-progress-circular>
  </div>

  <v-card-actions>
    <v-btn
      icon
      x-large
      class="mt4 teal"
      elevation="10"
      absolute
      right
      @click="newFact"
    >
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
  </v-card-actions>
</v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';
import { Watch } from 'vue-property-decorator';

const namespace: string = 'facts';

@Component
export default class FactCard extends Vue {
  @Getter('facts', { namespace }) public vuexFacts!: object[];

  @Action('loadFacts', { namespace }) public loadFacts!: Function;

  @Watch('vuexFacts')
  onInfoChange(value: object[], oldValue: object[] | null) {
    this.getFact();
  }

  public factsInfo: object[] = [];

  public currentFact: object = {};

  public created() {
    this.loadFacts();
  }

  public async getFact() {
    const loaded = await this.loadFacts;

    if (loaded) {
      this.factsInfo = this.vuexFacts;

      const currentFact = this.factsInfo[0];
      this.currentFact = currentFact;
    }
  }

  public newFact() {
    if (this.factsInfo.length !== 1) {
      const newFact = this.factsInfo[1];
      this.currentFact = newFact;

      this.factsInfo.splice(0, 1);
    } else {
      this.getFact();
    }
  }
}
</script>
