/* eslint-disable import/prefer-default-export */
import { ActionTree } from 'vuex';
import { RootState } from '@/store/types';
import { FactState } from './types';
import { FactService, FactsError } from '@/services/facts.service';

export const actions: ActionTree<FactState, RootState> = {
  async loadFacts({ commit }) {
    commit('requesting');

    try {
      const facts = await FactService.getFacts();
      commit('loadFacts', facts);

      return true;
    } catch (error) {
      if (error instanceof FactsError) {
        commit('error', error.message);
      }
      return false;
    }
  },
};
