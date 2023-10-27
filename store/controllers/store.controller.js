/**
 * Name:        Store.controller
 * Autor:       UTSJR
 * Proyect:     Layered Architecture
 * Description: Controller Functions
 */
const { insertItem, getItems, getItem, setItem, removeItem } = require( '../models/store.model' )

/*********   API CREATE *********/
const createItem = async ( req, res ) => {
    try {
        const resp = await insertItem( req.body )
        res.status(200).send(resp)
    } 
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
}

/*********   API READ  *********/

const readItems = async ( req, res ) => {
    try {
        const resp = await getItems()
        res.status(200).send(resp)
    } 
    catch (err) {
        res.status(500).send(err)
        console.log(err);
    }
}

const readItem = async ( req, res ) => {
    try {
        const resp = await getItem( req.body.id )
        res.status(200).send(resp)
    } 
    catch (err) {
        res.status(500).send(err)
    }
}

/*********   API UPDATE  *********/

const updateItem = async ( req, res ) => {
    try {
        const resp = await setItem( req.body )
        res.status(200).send(resp)
    } 
    catch (err) {
        res.status(500).send(err)
    }
}

/*********   API DELETE  *********/

const deleteItem = async ( req, res ) => {
    try {
        const resp = await removeItem( req.body.id )
        res.status(200).send(resp)
    } 
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { createItem, readItems, readItem, updateItem, deleteItem }