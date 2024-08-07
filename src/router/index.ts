import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DashBoard from '@/components/DashBoard/DashBoard.vue';
import CreateNote from '@/components/CreateNote/CreateNote.vue';
import LoginVue from '@/components/LoginForm/LoginVue.vue';
import FeatureVue from '@/components/Features/FeatureVue.vue';
import SignupForn from '@/components/SigupForm/SignupForm.vue';
import ForgortPassword from '../components/ForgotPassword/ForgotPassword.vue';
import ChangePass from '@/components/ChangePass/ChangePasswordVue.vue';
import AccountLayout from '@/layouts/AccountLayout.vue';
import LoginHistory from '@/components/LoginHistory/LoginHistoryVue.vue';
import RecycalBin from '@/components/RecycalBin/BinVue.vue';
import Adminlayout from '@/layouts/AdminDashBoard.vue';
import Account from '@/components/Account/AccountVue.vue'
// import ChangePass from '@/components/ChangePass/ChangePasswordVue.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'createNote',
          component: CreateNote
        }
      ]
    },
    {
      path: '/admin',
      component: Adminlayout,
    },
    {
      path: '/user',
      name: 'user',
      component: AccountLayout,
      children: [
        {
          path: 'password',
          name: 'password',
          component: ChangePass
        },
        {
          path: 'history',
          name: 'LoginHistory',
          component: LoginHistory
        },
        {
          path: 'recycal',
          name: 'RecycalBin',
          component: RecycalBin
        },
        {
          path: 'account',
          component: Account
        }
      ]
    },
    // {
    //   path: '/password',
    //   name: 'ChangePassword',
    //   component: ChangePass
    // },
    
    
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/login',
      name:'login',
      component: LoginVue
    },
    {
      path: '/signup',
      name:'sigup',
      component: SignupForn
    },
    {
      path: '/forgotpassword',
      name:'forgotpassword',
      component: ForgortPassword
    },
    {
      path: '/features',
      name:'features',
      component: FeatureVue
    }
  ]
});

export default router;
