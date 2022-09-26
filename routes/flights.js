import { Router } from 'express'

const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/all', flightsCtrl.index)

export {
  router
}
