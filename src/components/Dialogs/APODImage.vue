<template>
<v-dialog
  :value.sync="show"
  width="785"
>
  <v-card class="b-card">
    <v-img
      contain
      v-if="type === 'image'"
      :src="url"
    >
      <template v-slot:placeholder>
        <v-row
          align="center"
          justify="center"
          class="fill-height"
        >
          <v-progress-circular
            indeterminate
            width="5"
            color="amber"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>
</v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

const namespace: string = 'dialog';

@Component
export default class APODImage extends Vue {
  @Prop() url!: string;

  @Prop() type!: string;

  @Getter('hdImage', { namespace }) public show!: boolean;

  @Action('toggleHDImage', { namespace }) public toggleHDImage!: Function;
}
</script>
