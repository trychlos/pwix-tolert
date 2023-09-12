# pwix:tolert

## ChangeLog

### 1.4.1-rc

    Release date: 

    - Bump Meteor requirement to 2.9.0

### 1.4.0

    Release date: 2023- 7- 3

    - Rename tlTolert globally exported to Tolert (bumping candidate version number)
    - Change constants definitions to not pollute global space
    - Introduce new Tolert.C.Verbose.TIMEOUT to trace insertions and deletions of the messages

### 1.3.1

    Release date: 2023- 6-22

    - Introduce verbosity levels (+ fix todo #6)
    - configure() now acts both as a getter and a setter
    - Rename conf to _conf making clearer this is a private variable
    - Fix Tolert.success() public function

### 1.3.0

    Release date: 2023- 6-11

    - Accept HTML content (todo #5)
    - Define 'stackFromTop' configuration option to stack from the bottom instead of the top (todo #4)
    - Disable the timeout on values less or equal to zero (todo #2)
    - Remove console.debug() message

### 1.2.0

    Release date: 2023- 6 8

    - New pull() method removes the oldest message (todo #3)

    - Additional message stack and no more override the already displayed (todo #1)

### 1.1.3

    Release date: 2023- 5- 1

    - Remove dark background from README images

### 1.1.2

    Release date: 2023- 4-30

    - Add images to README

### 1.1.1

    Release date: 2023- 1-31

    - Fix Meteor packaging

### 1.1.0

    Release date: 2023- 1-31

    - Replace hardcoded NPM dependencies with tmeasday:check-npm-versions (runtime, development environment only)

### 1.0.0

    Release date: 2023- 1-27

    - Initial release

---
P. Wieser
- Last updated on 2023, July 3rd
