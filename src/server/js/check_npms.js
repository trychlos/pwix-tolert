/*
 * pwix:tolert/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    require( '@popperjs/core/package.json' );
    require( 'bootstrap/package.json' );
}

checkNpmVersions({
    '@popperjs/core': '^2.11.6',
    'bootstrap': '^5.2.1',
    'lodash': '^4.17.21'
},
    'pwix:tolert'
);
