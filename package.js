Package.describe({
    name: 'pwix:tolert',
    version: '1.0.1',
    summary: 'A Bootstrap-based Meteor package which provides toast-alert combination as auto-remove messages',
    git: 'https://github.com/trychlos/pwix-tolert',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'tlTolert'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:tolert' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '1.8.1' );
    api.use( 'blaze-html-templates@2.0.0', 'client' );
    api.use( 'ecmascript', 'client' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'mongo', 'client' );
    api.addFiles( 'src/client/components/tlMessage/tlMessage.js', 'client' );
}

Npm.depends({
    bootstrap: '5.2.1'
});
