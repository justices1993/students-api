const express = require('express')
const StudentRoute = require('./routes/student')
const path = require('path')

const app = express()
const template = path.join(__dirname,'./templates')

app.set('view engine', 'ejs')
app.set('view', template)

app.use(express.json())
app.use(StudentRoute)

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})