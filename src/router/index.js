import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import History from '../views/HistoryView.vue';
import staff from '../views/StaffView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/staff',
    name: 'staff',
    component: staff
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
