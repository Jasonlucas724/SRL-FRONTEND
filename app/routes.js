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
        path: '/',
        name: 'TOURNAMENT',
        getComponent(nextState, comMod) {
          import('containers/TOURNAMENT')
            .then(loadModule(comMod))
            .catch(errorLoading);
        },
      },
      {
         path: '/',
         name: 'THE ARENA',
         getComponent(nextState, comMod) {
           import('containers/TheArena')
             .then(loadModule(comMod))
             .catch(errorLoading);
         },
       },
       {
          path: '/',
          name: 'about',
          getComponent(nextState, comMod) {
            import('containers/About')
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
