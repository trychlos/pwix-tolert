/*
 * pwix:tolert/src/common/js/configure.js
 */

import _ from 'lodash';

Tolert._defaults = {
    // stack alerts from the top of the window
    stackFromTop: true,
    // timeout in ms to erase the message after having been displayed
    timeout: 3000,
    // verbosity level
    verbosity: Tolert.C.Verbose.NONE
};

_.merge( Tolert._conf, Tolert._defaults );

/**
 * @summary Get/set the package configuration
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
Tolert.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( Tolert._conf, Tolert._defaults, o );
        // be verbose if asked for
        if( Tolert._conf.verbosity & Tolert.C.Verbose.CONFIGURE ){
            console.log( 'pwix:tolert configure() with', o, 'building', Tolert._conf );
        }
    }
    // also acts as a getter
    return Tolert._conf;
};
