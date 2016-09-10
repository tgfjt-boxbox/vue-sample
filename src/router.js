module.exports = [
  {
    path: '/user',
    component: require('./pages/Users.vue'),
    children: [
      {
        path: ':username',
        component: require('./pages/User.vue')
      }
    ]
  }
]
