/* eslint-disable import/prefer-default-export */
import { MutationTree } from 'vuex';
import { APODState } from './types';

export const mutations: MutationTree<APODState> = {
  apodRequest(state) {
    state.requesting = true;
    state.error = false;
    state.errorMsg = '';
  },

  apodError(state, errMsg: string) {
    state.requesting = false;
    state.error = true;
    state.errorMsg = errMsg;
  },

  requestSuccess(state, apod: object) {
    state.requesting = false;
    state.apod = apod;
  },
};
