/* eslint-disable import/prefer-default-export */
import { MutationTree } from 'vuex';
import { IVLState, Collection } from './types';

export const mutations: MutationTree<IVLState> = {
  ivlRequest(state) {
    state.loading = true;
    state.error = false;
    state.errorMsg = '';
  },

  ivlError(state, errMsg: string) {
    state.loading = false;
    state.error = true;
    state.errorMsg = errMsg;
  },

  requestSuccess(state, feed: Collection[]) {
    state.loading = false;
    state.feed = feed;
  },
};
