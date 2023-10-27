const express    = require( 'express' )
const bodyParser = require( 'body-parser' )
const initDB     = require( './db/config' )

const app  = express()
const port = 7070

const storeRoutes = require( './store/ruotes/store.routes' )

app.use( bodyParser.urlencoded({ extended: true }) )
app.use( bodyParser.json() )

app.use( '/items', storeRoutes )

app.listen( port, () => console.log( `Server listening on port:${port}` ))

initDB()