/*
 * pwix:tolert/src/client/js/functions.js
 */

tlTolert._client = {

    deleteOldest(){
        const array = tlTolert._client.Messages.find({}, { sort: { stamp: 1 }}).fetch();
        if( array.length ){
            const height = parseInt( $( '.tl-display .alert[data-tl-count="0"]' ).css( 'height' ));
            const start = tlTolert.conf.stackFromTop ? 'top' : 'bottom';
            let args = {};
            args[start] = '-=' + (height+CSS_MARGIN) + 'px'
            $( '.tlMessage .alert' ).css( args );
            tlTolert._client.Messages.remove({ _id: array[0]._id });
        }
    },

    // display the 'o' object, where keys are:
    //  - type: 'error|info|success|warning'
    //  - msg: the message to be displayed
    // add a stamp to be able to identify the oldest later
    display( o ){
        tlTolert._client.Messages.insert({ ...o, stamp: Date.now() });
    },

    // the collection itself
    Messages: new Mongo.Collection( null )
};
