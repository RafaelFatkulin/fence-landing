/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const SessionController = () => import('#controllers/session_controller')

router.on('/').render('pages/home').as('home')
router.on('/agreement').render('pages/agreement').as('agreement')

router.on('/dashboard').render('pages/dashboard').use(middleware.auth()).as('dashboard')

router.get('/login', [SessionController, 'create']).use(middleware.guest()).as('login')
router.post('/login', [SessionController, 'store']).as('login.post')
router.post('/logout', [SessionController, 'destroy']).as('logout')
