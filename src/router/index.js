import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:       '/',
            component:  Login
        },
        {
            path:       '/chat',
            component:  Chat
        }
    ]
})
