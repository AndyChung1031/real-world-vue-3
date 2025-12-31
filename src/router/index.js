import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventLayout from '../views/event/Layout.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
      alias: '/about'
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true, // send params as props
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        },
      ]
    },
    {
      path: '/event/:id',
      redirect: to => { 
        return { name: 'event-layout', params: { id: to.params.id }}
      },
      children: [
        { path: '', redirect: () => ({ name: 'event-details'}) },
        { path: 'register', redirect: () => ({ name: 'event-register'}) },
        { path: 'edit', redirect: () => ({ name: 'event-edit'}) },
      ]
    }
  ],
})

export default router
