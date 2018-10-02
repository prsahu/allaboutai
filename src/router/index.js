import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import PDF from '@/components/PDF'
import PDF2 from '@/components/PDF2'
import Item from '@/components/Item'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path:'/pdfsample',
      name: 'PDF',
      component:PDF
    },
    {
      path:'/pdf2',
      name: 'PDF2',
      component:PDF2
    }
  ]
})
