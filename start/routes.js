'use strict'

const { RouteResource } = require("@adonisjs/framework/src/Route/Manager")

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('passwords', 'ForgotPasswordController.update')
Route.post('files', 'FileController.store')
Route.get('files/:id', 'FileController.show')