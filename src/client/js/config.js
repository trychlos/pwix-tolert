/*
 * pwi:tolert/src/client/js/config.js
 */

console.log( 'pwi:tolert/src/client/config.js defining globally exported pwiTolert object' );

pwiTolert = {

    conf: {
        // timeout in ms to erase the message after having been displayed
        timeout: 3000
    },

    configure: function( o ){
        console.log( 'pwi:tolert configure() with', o );
        pwiTolert.conf = {
            ...pwiTolert.conf,
            ...o
        };
    },

    /**
     * Display an error message
     * @locus Client
     * @param {String|Exception} err 
     */
    error( err ){
        pwiTolert.client.display({
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
        pwiTolert.client.display({
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
        pwiTolert.client.display({
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
        pwiTolert.client.display({
            type: 'warning',
            message: msg
        });
    }
};
