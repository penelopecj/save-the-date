import express from 'express'
import users from '../controllers/auth.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/users')
  .get(users.index)
  .post(secureRoute, users.create)

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete)

router.route('/register')
  .post(auth.registerUser)

router.route('/login')
  .post(auth.loginUser)

export default router

// ! N.B. the secureRoutes above makes these features of the frontend site unusable

// ! N.B. anyone has permission to edit and delete users, even if not the creator