/* eslint-disable import/prefer-default-export */
import { GetterTree } from 'vuex';
import { APODState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<APODState, RootState> = {
  requesting(state): boolean {
    return state.requesting;
  },

  apod(state): object | null {
    return state.apod;
  },

  error(state): boolean {
    return state.error;
  },

  errorMsg(state): string {
    return state.errorMsg;
  },
};
