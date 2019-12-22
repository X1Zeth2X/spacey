/* eslint-disable import/prefer-default-export */
import { ActionTree } from 'vuex';
import { IVLState } from './types';
import { RootState } from '@/store/types';
import { IVLService, IVLError, SearchParams } from '@/services/ivl.service';

export const actions: ActionTree<IVLState, RootState> = {
  async search({ commit }, params: SearchParams) {
    commit('ivlRequest');

    try {
      const results = await IVLService.search(params);
      commit('requestSuccess', results);

      return true;
    } catch (error) {
      if (error instanceof IVLError) {
        commit('ivlError', error.message);
      }
      return false;
    }
  },

  async getPopular({ commit }) {
    commit('ivlRequest');

    try {
      const popularData = await IVLService.getPopular();
      commit('requestSuccess', popularData);

      return true;
    } catch (error) {
      if (error instanceof IVLError) {
        commit('ivlError', error.message);
      }
      return false;
    }
  },

  async getRecent({ commit }) {
    commit('ivlRequest');

    try {
      const recentData = await IVLService.getRecent();
      commit('requestSuccess', recentData);

      return true;
    } catch (error) {
      if (error instanceof IVLError) {
        commit('ivlError', error.message);
      }
      return false;
    }
  },
};
