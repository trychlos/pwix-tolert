/*
 * pwi:tolert/src/client/js/functions.js
 */

tlTolert.client = {
    // display the 'o' object, where keys are:
    //  - type: 'error|info|success|warning'
    //  - msg: the message to be displayed
    display( o ){
        tlTolert.client.Messages.insert( o );
    },

    Messages: new Mongo.Collection( null )
};
