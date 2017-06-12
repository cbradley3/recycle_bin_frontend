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
      path: '/About',
      name: 'About',
      getComponent(nextState, comMod) {
        import('containers/About')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
    {
     path: '/Contact',
     name: 'Contact',
     getComponent(nextState, comMod) {
       import('containers/Contact')
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
       path: '/Dashboard',
       name: 'Dashboard',
       getComponent(nextState, comMod) {
         import('containers/Dashboard')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
      path: '/UpdateShop',
      name: 'UpdateShop',
      getComponent(nextState, comMod) {
        import('containers/UpdateShop')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
     {
      path: '/Orders',
      name: 'Orders',
      getComponent(nextState, comMod) {
        import('containers/Orders')
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
