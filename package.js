Package.describe({
    name: 'pwix:tolert',
    version: '1.0.0',
    summary: 'A Bootstrap-based Meteor package which provides toast-alert combination to display auto-remove messages',
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
    api.use( 'pwi:tolert' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '1.8.1' );
    api.use( 'blaze-html-templates', 'client' );
    api.use( 'ecmascript', 'client' );
    api.use( 'less', 'client' );
    api.use( 'mongo', 'client' );
    api.addFiles( 'src/client/components/tlMessage/tlMessage.js', 'client' );
}

Npm.depends({
    bootstrap: '5.2.1'
});
