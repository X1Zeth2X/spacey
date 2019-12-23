/* eslint-disable import/prefer-default-export */
import { MutationTree } from 'vuex';
import { DialogState } from './types';

export const mutations: MutationTree<DialogState> = {
  closeMainHelp(state) {
    state.mainhelp = false;
  },

  openMainHelp(state) {
    state.mainhelp = true;
  },

  toggleHDImage(state) {
    state.hdImage = !state.hdImage;
  },
};
