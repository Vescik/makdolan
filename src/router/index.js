import { createRouter, createWebHistory } from 'vue-router'
import MainPanelView from '../views/MainPanelView.vue'
import StatisticPanelView from '../views/StatisticPanelView.vue'
import SettingsPanelView from '../views/SettingsPanelView.vue'
const routes = [
 {
    path: '/',
    name: 'Main',
    component: MainPanelView
 },
 {
  path: '/stats',
  name: 'Stats',
  component: StatisticPanelView
},
{
 path: '/settings',
 name: 'Settings',
 component: SettingsPanelView
}

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
