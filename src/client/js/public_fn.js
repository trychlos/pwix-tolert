/*
 * pwix:tolert/src/client/js/public_fn.js
 */

/**
 * Display an error message
 * @locus Client
 * @param {String|Exception} err 
 */
Tolert.error = function( err ){
    Tolert._client.display({
        type: 'danger',
        message: ( typeof err === 'string' ) ? err : err.message
    });
};

/**
 * Display an information message
 * @locus Client
 * @param {String} msg
 */
Tolert.info = function( msg ){
    Tolert._client.display({
        type: 'info',
        message: msg
    });
};

/**
 * Erase the oldest message, shifting the stack
 * @locus Client
 */
Tolert.pull = function(){
    Tolert._client.deleteOldest();
};

/**
 * Display a success message
 * @locus Client
 * @param {String} msg
 */
Tolert.success = function( msg ){
    Tolert._client.display({
        type: 'success',
        message: msg
    });
};

/**
 * Display a warning message
 * @locus Client
 * @param {String} msg
 */
Tolert.warning = function( msg ){
    Tolert._client.display({
        type: 'warning',
        message: msg
    });
};
