import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import index from '@/components/index';
import home from '@/components/home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: index,
    // },
  ],
});
