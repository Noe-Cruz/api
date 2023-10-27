/**
 * Name:        Store.model
 * Autor:       UTSJR
 * Proyect:     Layered Architecture
 * Description: Model Functions
 */

const db = require('../../db/db')

/*********   API CREATE  *********/
const insertItem = async ( data ) => {
    try {
        const item = new db( data )
        return await item.save()
    } catch (err) {
        console.log( 'Error in insertItem ', err )   
    }
}

/*********   API READ  *********/

// Read All
const getItems = async () => {
    try{
        return await db.find().exec()
    }
    catch (err) {
        console.log( 'Error in getItems ', err )
    }
}
// Read by ID
const getItem = async ( id ) => {
    try{
        return await db.findById( id )
    }
    catch (err) {
        console.log( 'Error in getItem ', err )
    }
}

/*********   API UPDATE  *********/

const setItem = async ( data ) => {
    try{
        await db.findByIdAndUpdate( data.id, {
            quantity: data.quantity
        })

        return await db.findById( data.id )
    }
    catch (err) {
        console.log( 'Error in setItems ', err )
    }
}

/*********   API DELETE  *********/

const removeItem = async ( id ) => {
    try {
        return await db.findByIdAndRemove(id)
    } 
    catch (err) {
        console.log( 'Error in removeItem ', err )
    }
}

module.exports = { getItems, getItem, insertItem, setItem, removeItem }