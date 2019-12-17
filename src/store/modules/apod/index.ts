import { Module } from 'vuex';
import { APODState } from './types';
import { RootState } from '@/store/types';

import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export const state: APODState = {
  requesting: false,
  apod: null,

  error: false,
  errorMsg: '',
};

const namespaced: boolean = true;

export const apod: Module<APODState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
