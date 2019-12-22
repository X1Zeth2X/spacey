<template>
<v-card class="b-card mt3">
  <v-card-text>
    "When I look at your heavens, the work of your fingers, the moon and the stars,
    which you have set in place, what is man that you are mindful of him, and the
    son of man that you care for him?" - <strong>Psalm 8:3-4</strong>
  </v-card-text>

  <v-divider></v-divider>

  <v-card-actions>
    <div v-if="metadata" class="ml2">
      {{ metadata.total_hits }} Results.

    </div>

    <div v-else>
      <v-btn rounded
        color="amber darken-4"
        :disabled="view === 'popular'"
        @click="viewPopular"
      >Popular</v-btn>
      <v-btn rounded
        color="teal"
        :disabled="view === 'recent'"
        @click="viewRecent"
      >Recent</v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-tooltip bottom
      v-for="(view, index) in viewModes"
      :key="index"
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"
          icon
        >
          <v-icon>{{ view.icon }}</v-icon>
        </v-btn>
      </template>
      <span>{{ view.desc }}</span>
    </v-tooltip>
  </v-card-actions>
</v-card>
</template>

<script lang="ts">
/* eslint class-methods-use-this: 0 */
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';

const namespace: string = 'ivl';

@Component
export default class ViewMode extends Vue {
  @Prop() metadata!: any;

  @Prop() view!: string;

  @Emit('viewPopular')
  public viewPopular() {
    return true;
  }

  @Emit('viewRecent')
  public viewRecent() {
    return true;
  }

  public viewModes: object[] = [
    {
      desc: 'List View',
      icon: 'mdi-view-list',
    },
    {
      desc: 'Grid View',
      icon: 'mdi-view-grid',
    },
  ]
}
</script>
