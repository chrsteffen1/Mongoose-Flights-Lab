import mongoose from 'mongoose'


const Schema = mongoose.Schema
const flightSchema = new Schema({
  airline: { 
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: "DEN"
  },
  flightNumber: { 
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: function(){
      const today = new Date()
      today.setFullYear(today.getFullYear() + 1)
      return today
    }
  } // departs and object
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}