import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'
import HomeCustomer from '@/components/HomeCustomer';
import ViewCustomer from '@/components/ViewCustomer';
import NewCustomer from '@/components/NewCustomer';
import EditCustomer from '@/components/EditCustomer';
import HomeProject from '@/components/HomeProject';
import ViewProject from '@/components/ViewProject';
import NewProject from '@/components/NewProject';
import EditProject from '@/components/EditProject';
import Login from '@/components/Login';
import Register from '@/components/Register';
import firebase from 'firebase';
import PriceProject from '@/components/PriceProject';
import HomeInvoice from '@/components/HomeInvoice';
import NewInvoice from '@/components/NewInvoice';
import ViewInvoice from '@/components/ViewInvoice';
import EditInvoice from '@/components/EditInvoice';
import HomeTask from '@/components/HomeTask';
import NewTask from '@/components/NewTask';
import ViewTask from '@/components/ViewTask';
import EditTask from '@/components/EditTask';
import contextHelp from '@/components/contextHelp';



Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: HomeTask,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/tasks/view/:task_id',
      name: 'view-task',
      component: ViewTask,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/new/task',
      name: 'new-task',
      component: NewTask,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/tasks/edit/:task_id',
      name: 'edit-tasks',
      component: EditTask,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/invoices',
      name: 'home-invoice',
      component: HomeInvoice,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/new/invoice',
      name: 'new-invoice',
      component: NewInvoice,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/invoices/edit/:invoice_id',
      name: 'edit-invoice',
      component: EditInvoice,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/invoices/view/:invoice_id',
      name: 'view-invoice',
      component: ViewInvoice,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/customers',
      name: 'home-customer',
      component: HomeCustomer,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeProject,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: false
      }
    },
    {
      path: '/new/project',
      name: 'new-project',
      component: NewProject,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/projects/view/:project_id',
      name: 'view-project',
      component: ViewProject,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/projects/edit/:project_id',
      name: 'edit-project',
      component: EditProject,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/new/customer',
      name: 'new-customer',
      component: NewCustomer,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/customers/edit/:customer_id',
      name: 'edit-customer',
      component: EditCustomer,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/customers/view/:customer_id',
      name: 'view-customer',
      component: ViewCustomer,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/projects/price/:project_id',
      name: 'price-project',
      component: PriceProject,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/help',
      name: 'help',
      component: contextHelp,
      meta: {
        requiresAuth: false
      }
    },
  ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
