/**
 * Name:        config
 * Autor:       UTSJR
 * Proyect:     Layered Architecture
 * Description: Connection with MongoDB
 */
const mongoose = require('mongoose');

const uri = "mongodb+srv://jn37noe:mongodbnoe@cluster0.y3fcpvr.mongodb.net/store?retryWrites=true&w=majority";

module.exports = () => {

    const connect = () => {
        mongoose.connect( uri)
        .then(
            () => {
                console.log( "MongoDB successful connection" );
            },
            err => {
                console.log( `Error:${err}` );
            }
        );
    }

    connect();
}