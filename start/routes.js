'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/xxx', async () => {
  return 'xxx!!!WWW'
})


Route.get('/login', 'UserController.login' )
Route.post('/login', 'UserController.login' )


Route.get('/test', async ({request, response}) => {

    console.log( response );
    return 'test!!!####$$$$'
})

Route.get('/post', async ({request, response}) => {
    return 'post!!!@@@###'
})












/*Route
    .get('users/profile', 'UserController.profile')
    .middleware(['auth'])*/

