import Vue from 'vue'
import Vuex from 'vuex'
import pathify, { make } from 'vuex-pathify'
import gql from 'graphql-tag'
import _ from 'lodash'

const state = {
  stable: '2.x',
  legacy: '1.0.117',
  stars: 5800
}

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [ pathify.plugin ],
  state,
  mutations: make.mutations(state),
  actions: {
    async fetchGlobalStats ({ commit }, $apollo) {
      try {
        const resp = await $apollo.query({
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
        commit('SET_STABLE', _.get(resp, 'data.releases.stable'), '1.x')
        // commit('SET_BETA', _.get(resp, 'data.releases.beta'), '2.x')
        commit('SET_STARS', _.get(resp, 'data.sponsors.githubStars'), 5800)
      } catch (err) {
        console.error(err)
      }
    }
  }
})
