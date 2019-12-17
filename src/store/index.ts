import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';

// Import modules
import { apod } from './modules/apod/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '0.6.9',
  },
  modules: {
    // Register modules
    apod,
  },
};

export default new Vuex.Store<RootState>(store);
