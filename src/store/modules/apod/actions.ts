/* eslint-disable import/prefer-default-export */
import { ActionTree } from 'vuex';
import { APODState } from './types';
import { RootState } from '@/store/types';
import { APODService, APODError } from '@/services/apod.service';

export const actions: ActionTree<APODState, RootState> = {
  async getAPOD({ commit }) {
    commit('apodRequest');

    try {
      const apodData = await APODService.getAPOD();
      commit('requestSuccess', apodData);

      return apodData;
    } catch (error) {
      if (error instanceof APODError) {
        commit('apodError', error.message);
      }
      return false;
    }
  },
};
