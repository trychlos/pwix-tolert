# pwix:tolert

## What is it ?

A client-only Meteor package which provides a combination of Bootstrap Toasts and Alerts:
- as toast, the provided message automatically disappear after a (configurable) timeout
- as alert, we may have a distinct color for a distinct information level.

Here the 'tolerts' are displayed on the top-right corner of the window.

_Disclaimer_: this is not my own idea, but don't remember where I have found that, most probably on SO.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:tolert
```

## Usage

Very simple indeed. Just import the globally exported object, and enjoy:

```js
    import { Tolert } from 'meteor/pwix:tolert';
    ...
    Tolert.info( 'An information message' );
```

## Provides

### `Tolert`

The exported `Tolert` global object provides following items:

#### Functions

All are only available on the client side.

##### `Tolert.success()`

![success](/maintainer/png/success.png)

##### `Tolert.error()`

![error](/maintainer/png/error.png)

##### `Tolert.warning()`

![warning](/maintainer/png/warning.png)

##### `Tolert.info()`

![info](/maintainer/png/info.png)

The four previous functions use the corresponding Bootstrap color codes as a colored background of the tolert.

##### `Tolert.pull()`

Erase the oldest message.

Note: the oldest message is normally automatically erased after the configured timeout. This method is mainly defined for tests purposes.

### Blaze components

#### `tlMessage`

This is just a placeholder that you have to include anywhere in your application main layout:

```html
    {{> tlMessage }}
```

It will not take any place inside your layout as only (temporarily) visible over the window.

## Configuration

The package's behavior can be configured through a call to the `Tolert.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Package is very simple, has a single configuration option:

- `stackFromTop`

    Whether the messages are stackable from the top of the screen ?

    Defauts to `true`.

    When `false`, messages are stacked from the bottom of the screen.

- `timeout`

    The timeout, in ms, to erase the displayed message.

    Defaut value is 3 seconds (3000 ms).

    Any value less or equal to zero disables the timeout.

- `verbosity`

    The verbosity level.

    Can be `Tolert.C.Verbose.NONE` or an or-ed combination of following values:

    - `Tolert.C.Verbose.CONFIGURE`

        Trace configuration actions and their result.

    - `Tolert.C.Verbose.TIMEOUT`

        Trace messages insertions and deletions.

    Defaut value is `Tolert.C.Verbose.NONE`.

Please note, as an explicit reminder, that, because the Meteor packages are instanciated at application level, they can be configured once at most, and only once at most. Each addtionnal call to `Tolert.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.4.0:

```js
    '@popperjs/core': '^2.11.6',
    'bootstrap': '^5.2.1',
    'lodash': '^4.17.21'
```

Each of these dependencies should be installed at application level:

```sh
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-tolert/issues).

---
P. Wieser
- Last updated on 2024, May. 24th
