
import {Flight} from '../models/flights.js'


function newFlight(req,res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res) {
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights/new`)
  })
  .catch(err => {
    res.redirect('/flights/all')
  })
}

function index(req,res){
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: "All Flights"
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}


export {
  newFlight as new,
  create,
  index,
}