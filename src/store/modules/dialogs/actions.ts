/* eslint-disable import/prefer-default-export */
import { ActionTree } from 'vuex';
import { DialogState } from './types';
import { RootState } from '@/store/types';

export const actions: ActionTree<DialogState, RootState> = {
  openMainHelp({ commit }) {
    commit('openMainHelp');
  },

  closeMainHelp({ commit }) {
    commit('closeMainHelp');
  },
};
