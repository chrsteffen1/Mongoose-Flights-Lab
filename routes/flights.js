import { Router } from 'express'

const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/all', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.delete('/:id', flightsCtrl.delete)
router.get('/:id/edit', flightsCtrl.edit)
router.put('/:id', flightsCtrl.update)
router.post('/:id/tickets', flightsCtrl.createTicket)
router.post('/:id/meals', flightsCtrl.addToMeal)
router.delete('/flights/:flightId/tickets/:ticketId', flightsCtrl.deleteTicket)

export {
  router
}
