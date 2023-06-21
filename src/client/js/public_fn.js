/*
 * pwix:tolert/src/client/js/public_fn.js
 */

/**
 * Display an error message
 * @locus Client
 * @param {String|Exception} err 
 */
tlTolert.error = function( err ){
    tlTolert._client.display({
        type: 'danger',
        message: ( typeof err === 'string' ) ? err : err.message
    });
};

/**
 * Display an information message
 * @locus Client
 * @param {String} msg
 */
tlTolert.info = function( msg ){
    tlTolert._client.display({
        type: 'info',
        message: msg
    });
};

/**
 * Erase the oldest message, shifting the stack
 * @locus Client
 */
tlTolert.pull = function(){
    tlTolert._client.deleteOldest();
};

/**
 * Display a success message
 * @locus Client
 * @param {String} msg
 */
tltTolert.success = function( msg ){
    tlTolert._client.display({
        type: 'success',
        message: msg
    });
};

/**
 * Display a warning message
 * @locus Client
 * @param {String} msg
 */
tlTolert.warning = function( msg ){
    tlTolert._client.display({
        type: 'warning',
        message: msg
    });
};
