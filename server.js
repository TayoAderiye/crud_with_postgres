const express = require('express')
const dotenv = require('dotenv');
const morgan = require('morgan')




// Load env vars
dotenv.config({ path: './config/config.env' });

//Route files
const users = require('./routes/user')

const app = express()

// Mounting DB
var db = require('./models')

// Body parser
app.use(express.json())


//dev logging middleware

// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

// Mount routers
app.use('/api/v1/crud', users)


const PORT = process.env.PORT || 5000

const server = app.listen(
    PORT,
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`),
    // function() {
    //     db.sequelize.sync()
    //}
    )
