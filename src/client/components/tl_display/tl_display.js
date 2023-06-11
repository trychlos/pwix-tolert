/*
 * pwix:tolert/src/client/components/tl_display/tl_display.js
 *
 * Parms:
 * - msg
 */

import '../../js/index.js';

import './tl_display.html';

Template.tl_display.onRendered( function(){
    const self = this;

    //console.debug( 'pwix:tolert', self.data.msg );
    const count = Template.currentData().msg.count;
    //console.debug( 'count', count );
    self.$( '.tl-display .alert[data-tl-count="'+count+'"]' ).css({ top: ( CSS_TOP + CSS_SHIFT*count )+CSS_UNIT });

    // remove the message from our local collection after the configured time
    if( tlTolert.conf.timeout > 0 ){
        Meteor.setTimeout( function(){ tlTolert._client.deleteOldest(); }, tlTolert.conf.timeout );
    }
});
