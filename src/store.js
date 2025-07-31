import { createStore } from 'vuex'
// import pathify, { make } from 'vuex-pathify'
import gql from 'graphql-tag'
import _ from 'lodash'

const state = {
  stable: '2.x',
  legacy: '1.0.117',
  stars: 5800
}

export default createStore({
  state,
  mutations: {
    SET_STABLE(state, value) {
      state.stable = value
    },
    SET_STARS(state, value) {
      state.stars = value
    },
    SET_BETA(state, value) {
      state.beta = value
    }
  },
  actions: {
    async fetchGlobalStats ({ commit }, apolloClient) {
      try {
        const resp = await apolloClient.query({
          query: gql`
            {
              releases {
                stable: latest(channel:STABLE),
                beta: latest(channel:BETA)
              },
              sponsors {
                githubStars
              }
            }
          `
        })
        commit('SET_STABLE', _.get(resp, 'data.releases.stable', '1.x'))
        // commit('SET_BETA', _.get(resp, 'data.releases.beta'), '2.x')
        commit('SET_STARS', _.get(resp, 'data.sponsors.githubStars', 5800))
      } catch (err) {
        console.error(err)
      }
    }
  }
})