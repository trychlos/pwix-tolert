/*
 * pwix:tolert/src/client/js/config.js
 */

//console.log( 'pwix:tolert/src/client/config.js defining globally exported tlTolert object' );

tlTolert = {

    conf: {
        // timeout in ms to erase the message after having been displayed
        timeout: 3000
    },

    configure: function( o ){
        //console.log( 'pwix:tolert configure() with', o );
        tlTolert.conf = {
            ...tlTolert.conf,
            ...o
        };
    },

    /**
     * Display an error message
     * @locus Client
     * @param {String|Exception} err 
     */
    error( err ){
        tlTolert.client.display({
            type: 'danger',
            message: ( typeof err === 'string' ) ? err : err.message
        });
    },

    /**
     * Display an information message
     * @locus Client
     * @param {String} msg
     */
    info( msg ){
        tlTolert.client.display({
            type: 'info',
            message: msg
        });
    },

    /**
     * Display a success message
     * @locus Client
     * @param {String} msg
     */
    success( msg ){
        tlTolert.client.display({
            type: 'success',
            message: msg
        });
    },

    /**
     * Display a warning message
     * @locus Client
     * @param {String} msg
     */
    warning( msg ){
        tlTolert.client.display({
            type: 'warning',
            message: msg
        });
    }
};
