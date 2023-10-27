/**
 * Name:        db
 * Autor:       UTSJR
 * Proyect:     Layered Architecture
 * Description: Document Scheme
 */
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        item: {
            type: String
        },
        quantity: {
            type: Number
        }
    },
    {
        versionKey: false 
    }
)

module.exports = mongoose.model( 'clothes', ItemSchema )