const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
        path: '/TOURNAMENT',
        name: 'TOURNAMENT',
        getComponent(nextState, comMod) {
          import('containers/TOURNAMENT')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
      {
         path: '/Home',
         name: 'Home',
         getComponent(nextState, comMod) {
           import('containers/Home')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
      {
         path: '/TheArena',
         name: 'TheArena',
         getComponent(nextState, comMod) {
           import('containers/TheArena')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
          path: '/SignIn',
          name: 'SignIn',
          getComponent(nextState, comMod) {
            import('containers/SignIn')
              .then(loadModule(comMod))
              .catch(errorLoading);
          },
        },
      {
         path: '/SignUp',
         name: 'SignUp',
         getComponent(nextState, comMod) {
           import('containers/SignUp')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
          path: '/About',
          name: 'about',
          getComponent(nextState, comMod) {
            import('containers/About')
              .then(loadModule(comMod))
              .catch(errorLoading);
          },
        },
        {
           path: '/Products',
           name: 'products',
           getComponent(nextState, comMod) {
             import('containers/Products')
               .then(loadModule(comMod))
               .catch(errorLoading);
           },
         },
         {
            path: '/Dashboard',
            name: 'Dashboard',
            getComponent(nextState, comMod) {
              import('containers/Dashboard')
                .then(loadModule(comMod))
                .catch(errorLoading);
            },
          },
        {
          path: '/GetCategories',
          name: 'GetCategories',
          getComponent(nextState, comMod) {
            import('containers/GetCategories')
              .then(loadModule(comMod))
              .catch(errorLoading);
          },
        },

       {
        path: '/GetOrder',
        name: 'GetOrder',
        getComponent(nextState, comMod) {
          import('containers/GetOrder')
            .then(loadModule(comMod))
            .catch(errorLoading);
         },
       },
       {
         path: '/GetProducts',
         name: 'GetProducts',
         getComponent(nextState, comMod) {
           import('containers/GetProducts')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/GetRoles',
         name: 'GetRoles',
         getComponent(nextState, comMod) {
           import('containers/GetRoles')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/GetUserOrders',
         name: 'GetUserOrders',
         getComponent(nextState, comMod) {
           import('containers/GetUserOrders')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/GetUsers',
         name: 'GetUsers',
         getComponent(nextState, comMod) {
           import('containers/GetUsers')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/Shop',
         name: 'Shop',
         getComponent(nextState, comMod) {
           import('containers/Shop')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/ShowOrder',
         name: 'ShowOrder',
         getComponent(nextState, comMod) {
           import('containers/ShowOrder')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/ShowProducts',
         name: 'ShowProducts',
         getComponent(nextState, comMod) {
           import('containers/ShowProducts')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/ShowUser',
         name: 'ShowUser',
         getComponent(nextState, comMod) {
           import('containers/ShowUser')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/StoreCategory',
         name: 'StoreCategory',
         getComponent(nextState, comMod) {
           import('containers/StoreCategory')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/StoreProducts',
         name: 'StoreProducts',
         getComponent(nextState, comMod) {
           import('containers/StoreProducts')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/UpdateCategory',
         name: 'UpdateCategory',
         getComponent(nextState, comMod) {
           import('containers/UpdateCategory')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/UpdateOrder',
         name: 'UpdateOrder',
         getComponent(nextState, comMod) {
           import('containers/UpdateOrder')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/UpdateProducts',
         name: 'UpdateProducts',
         getComponent(nextState, comMod) {
           import('containers/UpdateProducts')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/UpdateRoles',
         name: 'UpdateRoles',
         getComponent(nextState, comMod) {
           import('containers/UpdateRoles')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
         path: '/UpdateUsers',
         name: 'UpdateUsers',
         getComponent(nextState, comMod) {
           import('containers/UpdateUsers')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
        path: '*',
        name: 'notfound',
        getComponent(nextState, comMod) {
          import('containers/NotFoundPage')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
  ];
}
