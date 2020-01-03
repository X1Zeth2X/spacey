/* eslint-disable import/prefer-default-export */
import { GetterTree } from 'vuex';
import { FactState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<FactState, RootState> = {
  facts(state): object[] | null {
    return state.facts;
  },

  requesting(state): boolean {
    return state.requesting;
  },

  error(state): boolean {
    return state.error;
  },

  errorMsg(state): string {
    return state.errorMsg;
  },
};
