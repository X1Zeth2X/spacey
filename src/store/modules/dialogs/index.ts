import { Module } from 'vuex';
import { DialogState } from './types';
import { RootState } from '@/store/types';

import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export const state: DialogState = {
  mainhelp: false,
  hdImage: false,
  IVLInfo: false,
};

const namespaced: boolean = true;

export const dialog: Module<DialogState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
