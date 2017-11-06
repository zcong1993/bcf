
# bcf

[![NPM version](https://img.shields.io/npm/v/bcf.svg?style=flat)](https://npmjs.com/package/bcf) [![NPM downloads](https://img.shields.io/npm/dm/bcf.svg?style=flat)](https://npmjs.com/package/bcf) [![CircleCI](https://circleci.com/gh/zcong1993/bcf/tree/master.svg?style=shield)](https://circleci.com/gh/zcong1993/bcf/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/zcong1993/donate)

## Install

```bash
$ yarn add bcf
# npm
$ npm i bcf
```

## Usage

```js
const BCF = require('bcf')

const bcf = new BCF({
  min: 200,
  max: 1500,
  factor: 3,
  jitter: false
})

bcf.duration()
// 200
bcf.duration()
// 600
bcf.duration()
// 1500 max is 1500
bcf.reset()
// reset
bcf.duration()
// 200
bcf.duration()
// 600
bcf.duration()
// 1500 max is 1500
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**bcf** © [zcong1993](https://github.com/zcong1993), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by zcong1993 with help from contributors ([list](https://github.com/zcong1993/bcf/contributors)).

> [github.com/zcong1993](https://github.com/zcong1993) · GitHub [@zcong1993](https://github.com/zcong1993)
