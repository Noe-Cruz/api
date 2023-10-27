/**
 * Name:        Store.routers
 * Autor:       UTSJR
 * Proyect:     Layered Architecture
 * Description: Routes
 */
const express = require('express')

const { createItem, readItems, readItem, updateItem, deleteItem } = require( '../controllers/store.controller' )

const router = express.Router()

//Routes:

/*********   API CREATE *********/
router.post( '/create', createItem ) // ( body: item, quantity )

/*********   API READ *********/
router.get( '/', readItems )
router.post( '/', readItem ) // ( :id )

/*********   API UPDATE *********/
router.post( '/update', updateItem ) // ( body: id, quantity )

/*********   API DELETE *********/
router.post( '/delete', deleteItem ) // ( body: id )

module.exports = router