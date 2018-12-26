# argio
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Nodejs command line arguments parser for parsing subcommands, value list and switches with super light-weight single function implementation.

## Installation
```
npm install argio
```

## Get Started
```
// command line
$ node app.js subcommand1 subcommand2 -p1 v1 v2 v3 --s1 -p2 v4
```

```
const argio = require('argio');
const parser = argio()

// Structure of parser
{ params: 
   { subcommands: 
      [ '/usr/local/bin/node',
        '/Users/stefan/git/argio/app.js',
        'subcommand1',
        'subcommand2' ],
     p1: [ 'v1', 'v2', 'v3' ],
     s1: true,
     p2: [ 'v4' ] },
  get: [Function: get],
  subcommand: 'subcommand1' }

// check switches
parser.get('s1') // true
parser.get('s2') // undefined

// check single value
parser.get('p1') // v1
parser.get('p2') // v4

// check value list
parser.params.p1 // [ 'v1', 'v2', 'v3' ]

// check subcommand
parser.subcommand // subcommand1

// check subcommands
parser.params.subcommands // [...]

```


[npm-image]: https://img.shields.io/npm/v/argio.svg
[npm-url]: https://npmjs.org/package/argio
[travis-image]: https://img.shields.io/travis/devfans/argio/master.svg
[travis-url]: https://travis-ci.org/devfans/argio
[coveralls-image]: https://img.shields.io/coveralls/devfans/argio/master.svg
[coveralls-url]: https://coveralls.io/r/devfans/argio?branch=master
[downloads-image]: https://img.shields.io/npm/dm/argio.svg
[downloads-url]: https://npmjs.org/package/argio

