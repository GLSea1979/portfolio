'use strict';

module.exports = ['$log', routeService];

function routeService($log){
  $log.debug('routeService');

  let service = {
    routes: [
      {
        name: 'Websites',
        url: '/#!/home',
        admin: false
      },
      {
        name: 'S.P.A.',
        url: '/#!/bikes',
        admin: false
      },
      {
        name: 'admin',
        url: '/#!/admin',
        admin: true
      },
      {
        name: 'A.P.I.',
        url: '/#!/about',
        admin: false
      }
    ],
    icons: [
      {
        val:'github',
        url: 'https://github.com/GLSea1979',
        desc: 'check out my projects on github'
      },
      {
        val:'about',
        url: '/#!/about',
        desc: 'about the team'
      }
    ]
  };
  return service;
}
