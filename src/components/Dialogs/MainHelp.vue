<template>
<v-dialog
  persistent
  :value="show"
  width="600"
>
  <v-card
    class="b-card"
  >
    <v-card-title>
      <v-icon class="mr2">mdi-help-circle-outline</v-icon>
      <strong>Help</strong>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="closeMainHelp"
      ><v-icon>mdi-close</v-icon></v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text class="mt3">
      <p>
        I've made this command input field for fun you can always use the
        normal controllers by clicking the <strong>orange</strong> button
        beside the help.
      </p>

      <strong>Commands</strong>
      <ul>
        <li
          v-for="command in commands" :key="command.name"
        >
          "<strong>{{ command.name }}</strong>" {{ command.desc }}
        </li>
      </ul>
    </v-card-text>
  </v-card>
</v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Getter, Action } from 'vuex-class';

const namespace: string = 'dialog';

@Component
export default class MainHelp extends Vue {
  @Getter('mainHelp', { namespace }) public show: any;

  @Action('closeMainHelp', { namespace }) public closeMainHelp: any;

  public commands: object[] = [
    {
      name: 'apod',
      desc: 'shows the Astronomy Picture of the Day.',
    },
    {
      name: 'ivl',
      desc: 'NASA\'s Image and Video library.',
    },
  ]
}
</script>
