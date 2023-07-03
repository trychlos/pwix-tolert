/*
 * pwix:tolert/src/client/js/config.js
 */

import _ from 'lodash';

Tolert._defaults = {
    // timeout in ms to erase the message after having been displayed
    timeout: 3000,
    stackFromTop: true,
    verbosity: TL_VERBOSE_NONE
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
        if( Tolert._conf.verbosity & TL_VERBOSE_CONFIGURE ){
            console.log( 'pwix:tolert configure() with', o, 'building', Tolert._conf );
        }
    }
    // also acts as a getter
    return Tolert._conf;
};
