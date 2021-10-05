import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', // url에 #이 제거된다
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      // component: LoginPage,
      // code spliting 적용
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// VueRouter 인스턴스를 생성하고 export default로 꺼내게 되면
// index.js 파일에서 밖으로 나가게 된다
// default의 역할은 하나의 변수로 전달...
