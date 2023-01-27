/*
 * pwi:tolert/src/client/components/tl_display/tl_display.js
 */

import '../../js/index.js';

import './tl_display.html';

Template.tl_display.onRendered( function(){
    const self = this;

    // log the message to the console
    console.log( 'pwi:tolert', self.data.msg.type, self.data.msg.message );

    // remove the message from our local collection after a reasonable time
    Meteor.setTimeout( function(){ tlTolert.client.Messages.remove( self.data.msg._id ); }, tlTolert.conf.timeout );
});
