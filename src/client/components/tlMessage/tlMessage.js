/*
 * pwi:tolert/src/client/components/tlMessage/tlMessage.js
 */

import '../../js/index.js';

import '../../stylesheets/tl_tolert.less';

import '../tl_display/tl_display.js';

import './tlMessage.html';

Template.tlMessage.helpers({
    // provides a list of current messages to be displayed
    msgList(){
        return pwiTolert.client.Messages.find();
    }
});
