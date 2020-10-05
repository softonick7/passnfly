import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        airports: []
    },
    mutations: {
        setAirports: (state, airports) => {
            return state.airports = airports;
        },
    },
    actions: {
    },
});
