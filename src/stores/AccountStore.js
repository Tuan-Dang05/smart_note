import { createStore } from 'vuex';

const store = createStore({
    state: {
        name: 'user name',
        imageUrl: 'https://via.placeholder.com/200'
    },
    mutations: {
        setName(state, name) {
            state.name = name;
        },
        setImageUrl(state, imageUrl) {
            state.imageUrl = imageUrl;
        }
    },
    actions: {
        updateName({ commit }, name) {
            commit('setName', name);
        },
        updateImageUrl({ commit }, imageUrl) {
            commit('setImageUrl', imageUrl);
        }
    },
    getters: {
        name: state => state.name,
        imageUrl: state => state.imageUrl
    }
});

export default store;
