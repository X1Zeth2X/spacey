/* eslint-disable import/prefer-default-export */
import { GetterTree } from 'vuex';
import { IVLState, Collection } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<IVLState, RootState> = {
  feed(state): Collection[] {
    return state.feed;
  },

  loading(state): boolean {
    return state.loading;
  },
};
