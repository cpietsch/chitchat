//        __   _ __      __        __
//   ____/ /  (_) /_____/ /  ___ _/ /_
//  / __/ _ \/ / __/ __/ _ \/ _ `/ __/
//  \__/_//_/_/\__/\__/_//_/\_,_/\__/
//

import Vue from 'vue'
import Vuex from 'vuex'
import Chance from 'chance'

Vue.use(Vuex)

const chance = new Chance()

const state = {
    username: '',
    log: []
}

const mutations = {
    addMessage (state, message) {
      state.log.push(message)
    },
    setUsername (state, username) {
      state.username = username
    }
}

const actions = {
    generateFakeMessage: ({ commit, dispatch }) => {
      const username = chance.first()
      const message = chance.sentence()
      const color = chance.color()

      commit('addMessage', {
        username, message, color
      })
    },
    generateFakeMessages: ({ dispatch }, size = 10) => {
      for (var i = size - 1; i >= 0; i--) {
        dispatch('generateFakeMessage')
      }
    },
    generateFakeMessageWithRandomTimeout: ({ dispatch }) => {
      const timeout = chance.integer({min: 3000, max: 10000})
      return setTimeout(_ => {
        dispatch('generateFakeMessage')
        dispatch('generateFakeMessageWithRandomTimeout')
      }, timeout)
    }
}

const getters = {
    logReversed (state) {
      return state.log.slice().reverse()
    }
}

// in case i should query something later
// function ajaxFetch (config) {

//     let myHeaders = new Headers()
//     myHeaders.set('Accept', 'application/json; charset=utf-8n')
//     myHeaders.set('Content-Type', 'application/json')

//     // TODO dev CORS
//     // looks like the api is now working with cors
//     return fetch(
//         '' + config.url,
//         {
//             method: 'POST',
//             headers: myHeaders,
//             mode: 'cors',
//             cache: 'default',
//             body: JSON.stringify(config.body)
//         }
//     ).then(res => res.json())

// }



export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
