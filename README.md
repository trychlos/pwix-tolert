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

The package's behavior can be configured through a call to the `tlTolert.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Package is very simple, has a single configuration option:

- `timeout`

    The timeout, in ms, to erase the displayed message.

    Defaut value is 3 seconds (3000 ms).

Please note, as an explicit reminder for the fools, that, because the Meteor packages are instanciated at application level, they can be configured once at most, and only once at most. Each addtionnal call to `tlTolert.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## Provides

### A global object

`tlTolert`

### (client-only) methods attached to the global object

- `tlTolert.success()`

    ![success](/maintainer/png/success.png)

- `tlTolert.error()`

    ![error](/maintainer/png/error.png)

- `tlTolert.warning()`

    ![warning](/maintainer/png/warning.png)

- `tlTolert.info()`

    ![info](/maintainer/png/info.png)

These four methods use the corresponding Bootstrap color codes as a colored background of the tolert.

### Blaze components

#### `tlMessage`

This is just a placeholder that you have to include anywhere in your application main layout:

```
    {{> tlMessage }}
```

It will not take any place inside your layout as only (temporarily) visible over the window.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.1.0:
```
    @popperjs/core, starting with v 2.11,
    bootstrap, starting with v 5.2.
```
Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

---
P. Wieser
- Last updated on 2023, Apr. 30th
