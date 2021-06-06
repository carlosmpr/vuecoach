
//creating the store to control all the state
import {createStore} from 'vuex'
import coachesModule from './modules/coaches'
import requestModule from './modules/request'
import authModule from  './modules/auth'
const store = createStore({
//defining each modules thath containt states
modules: {
    coaches: coachesModule,
    requests: requestModule,
    auth: authModule
},


})

export default store;