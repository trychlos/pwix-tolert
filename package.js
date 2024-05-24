Package.describe({
    name: 'pwix:tolert',
    version: '1.4.2-rc',
    summary: 'A Bootstrap-based Meteor package which provides toast-alert combination as auto-remove messages',
    git: 'https://github.com/trychlos/pwix-tolert',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'Tolert'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:tolert' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.9.0' );
    api.use( 'blaze-html-templates@2.0.0', 'client' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'mongo', 'client' );
    api.use( 'tmeasday:check-npm-versions@1.0.2', 'server' );
    api.addFiles( 'src/client/components/tlMessage/tlMessage.js', 'client' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
