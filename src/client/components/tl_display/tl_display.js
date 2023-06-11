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

    if( count === 0 ){
        self.$( '.tl-display .alert[data-tl-count="'+count+'"]' ).css({ top: CSS_TOP });
    
    } else {
        let prevTop = parseInt( $( '.tl-display .alert[data-tl-count="'+( count-1 )+'"]' ).css( 'top' ));
        let prevHeight = parseInt( $( '.tl-display .alert[data-tl-count="'+( count-1 )+'"]' ).css( 'height' ));
        self.$( '.tl-display .alert[data-tl-count="'+count+'"]' ).css({ top: (prevTop+prevHeight)+CSS_MARGIN+'px' });
    }

    // remove the message from our local collection after the configured time
    if( tlTolert.conf.timeout > 0 ){
        Meteor.setTimeout( function(){ tlTolert._client.deleteOldest(); }, tlTolert.conf.timeout );
    }
});
