# pwix:tolert

## What is it ?

A client-only Meteor package which provides a combination of Bootstrap Toasts and Alerts:
- as toast, the provided message automatically disappear after a (configurable) timeout
- as alert, we may have a distinct color for a distinct information level.

Here the 'tolerts' are displayed on the top-right corner of the window.

_Disclaimer_: this is not my own idea, but don't remember where I have found that, most probably on SO.

## Usage

Very simple indeed. Just import the globally exported object, and enjoy:

```
    import { tlTolert } from 'meteor/pwix:tolert';
    ...
    tlTolert.info( 'An information message' );
```

## Configuration

Package is very simple, so only provides one configuration option.

Calling `tlTolert.configure()`, passing your configuration object as a single parameter, from your top-level code, is enough.

<table>
<tr><td style="vertical-align:top;">
<code>timeout</code>
</td><td style="vertical-align:top;">
The timeout, in ms, to erase the displayed message.<br />
Defaut value is 3 seconds (3000 ms).
</td></tr>
</table>

## Provides

### A global object

`tlTolert`

### (client-only) methods attached to the global object

- `tlTolert.error()`
- `tlTolert.info()`
- `tlTolert.success()`
- `tlTolert.warning()`

These four methods use the corresponding Bootstrap color codes as a colored background of the tolert.

### Helper

- `tlMessage`

This is just a placeholder that you have to include anywhere in your application main layout.

It will not take any place inside your layout as only (temporarily) visible over the window.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.1.0:
- @popperjs/core, starting with v 2.11,
- bootstrap, starting with v 5.2.

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

---
P. Wieser
- Last updated on 2023, Jan. 31st
