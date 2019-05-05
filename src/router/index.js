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



Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: HomeTask,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tasks/view/:task_id',
      name: 'view-task',
      component: ViewTask,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new/task',
      name: 'new-task',
      component: NewTask,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tasks/edit/:task_id',
      name: 'edit-tasks',
      component: EditTask,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invoices',
      name: 'home-invoice',
      component: HomeInvoice,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new/invoice',
      name: 'new-invoice',
      component: NewInvoice,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/invoices/edit/:invoice_id',
      name: 'edit-invoice',
      component: EditInvoice,
      meta: {
        requiresAuth: true
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
        requiresAuth: true
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeProject,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/new/project',
      name: 'new-project',
      component: NewProject,
      meta: {
        requiresAuth: true
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
        requiresAuth: true
      }
    },
    {
      path: '/new/customer',
      name: 'new-customer',
      component: NewCustomer,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/customers/edit/:customer_id',
      name: 'edit-customer',
      component: EditCustomer,
      meta: {
        requiresAuth: true
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
        requiresAuth: true
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
