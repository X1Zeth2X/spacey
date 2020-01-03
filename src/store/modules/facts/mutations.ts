/* eslint-disable import/prefer-default-export */
import { MutationTree } from 'vuex';
import { FactState } from './types';

export const mutations: MutationTree<FactState> = {
  request(state) {
    state.requesting = true;
    state.error = false;
    state.errorMsg = '';
  },

  loadFacts(state, facts: object[]) {
    state.facts = facts;
    state.requesting = false;
  },

  error(state, errMsg: string) {
    state.requesting = false;
    state.error = true;
    state.errorMsg = errMsg;
  },
};
