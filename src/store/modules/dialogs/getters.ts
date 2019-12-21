/* eslint-disable import/prefer-default-export */
import { GetterTree } from 'vuex';
import { DialogState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<DialogState, RootState> = {
  mainHelp(state) {
    return state.mainhelp;
  },
};
