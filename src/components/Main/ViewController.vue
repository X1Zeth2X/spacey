<template>
<div id="viewController">
  <v-text-field
    filled
    label="Please enter a command:"
    placeholder="user@spacey:~$ "
    v-model="command"
    @keyup.enter="executeCMD"
  >
    <template v-slot:append-outer>
      <v-btn
        icon
        class="info mr2"
        elevation="5"
        @click="openMainHelp"
      >
        <v-icon>mdi-help</v-icon>
      </v-btn>

      <v-btn icon class="warning" elevation="5" disabled>
        <v-icon>mdi-camera-control</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';
import { Emit } from 'vue-property-decorator';

const namespace: string = 'dialog';

@Component
export default class ViewController extends Vue {
  @Action('openMainHelp', { namespace }) public openMainHelp: any;

  public command: string = '';

  @Emit('executeCMD')
  public executeCMD() {
    this.$router.push({
      query: {
        view: this.command.replace(/\s+/g, ''),
      },
    });
    this.command = '';
  }
}
</script>
