/*
 * pwix:tolert/src/client/components/tlMessage/tlMessage.js
 */

import { ReactiveVar } from 'meteor/reactive-var';

import '../../js/index.js';

import '../../stylesheets/tl_tolert.less';

import '../tl_display/tl_display.js';

import './tlMessage.html';

Template.tlMessage.onCreated( function(){
    const self = this;

    self.TL = {
        count: 0,
        messages: new ReactiveVar( [] )
    };

    // maintain the array of displayable messages
    //  making sure they are all numbered in their order of insertion
    self.autorun(() => {
        let _messages = [];
        let _count = 0;
        Tolert._client.Messages.find({}, { sort: { stamp: 1 }}).fetch().every(( it ) => {
            it.count = _count++;
            _messages.push( it );
            return true;
        });
        self.TL.messages.set( _messages );
    });
});

Template.tlMessage.helpers({

    // provides a list of current messages to be displayed
    msgList(){
        return Template.instance().TL.messages.get();
    }
});
