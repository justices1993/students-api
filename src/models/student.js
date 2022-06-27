const mongoose = require('mongoose')
require('../db/db')


const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    qualification: {type: String, required: true},
    idealjob: {type: String, enum: ['networks engineer', 'software engineer','Cloud engineer']}
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student