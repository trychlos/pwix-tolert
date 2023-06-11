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

    const start = tlTolert.conf.stackFromTop ? 'top' : 'bottom';
    let args = {};
    let distance = CSS_TOP;

    if( count > 0 ){
        const prevTop = parseInt( $( '.tl-display .alert[data-tl-count="'+( count-1 )+'"]' ).css( start ));
        const prevHeight = parseInt( $( '.tl-display .alert[data-tl-count="'+( count-1 )+'"]' ).css( 'height' ));
        distance = (prevTop+prevHeight) + CSS_MARGIN + 'px';
    }

    args[start] = distance;
    self.$( '.tl-display .alert[data-tl-count="'+count+'"]' ).css( args );

    // remove the message from our local collection after the configured time
    if( tlTolert.conf.timeout > 0 ){
        Meteor.setTimeout( function(){ tlTolert._client.deleteOldest(); }, tlTolert.conf.timeout );
    }
});
