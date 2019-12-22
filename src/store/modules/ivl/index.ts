import { Module } from 'vuex';
import { IVLState } from './types';
import { RootState } from '@/store/types';

import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export const state: IVLState = {
  feed: [],
  loading: false,

  error: false,
  errorMsg: '',
};

const namespaced: boolean = true;

export const ivl: Module<IVLState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
