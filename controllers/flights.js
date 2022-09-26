
import {Flight} from '../models/flights.js'


function newFlight(req,res) {
  const newFlight = new Flight()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0, 16)
  res.render('flights/new', {
    title: 'Add Flight',
    departsDate,
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights/all`)
  })
  .catch(err => {
    console.log(err)
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
function show(req,res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', { 
      title: 'Flight Detail', 
      flight,
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteFlight(req,res){
  Flight.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/flights/all")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function edit(req,res){
  Flight.findById(req.params.id)
  .then(flight => {
    res.redner('flights/edit', {
      flight,
      title: 'Edit Flight'
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
}