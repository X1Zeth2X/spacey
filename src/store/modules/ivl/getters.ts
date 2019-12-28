/* eslint-disable import/prefer-default-export */
import { GetterTree } from 'vuex';
import { IVLState, Collection, Info } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<IVLState, RootState> = {
  feed(state): Collection[] {
    return state.feed;
  },

  loading(state): boolean {
    return state.loading;
  },

  currentInfo(state): Info | null {
    return state.currentInfo;
  },

  assetsInfo(state): object[] | null {
    return state.assetsInfo;
  },
};
