import { Module } from 'vuex';
import { FactState } from './types';
import { RootState } from '@/store/types';

import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export const state: FactState = {
  facts: null,

  requesting: false,
  error: false,
  errorMsg: '',
};

const namespaced: boolean = true;

export const facts: Module<FactState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
