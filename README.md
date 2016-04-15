# poke-lcg
The LCG tool for Pokemon.


## Feature
- You can get seeds with generator easily.
- Contains ``.d.ts`` files.


## Install
```bash
$ npm install @mizdra/poke-lcg
```


## Usage
```js
import {Uint32LCG} from '@mizdra/poke-lcg';

const g1 = Uint32LCG.generator(GEN3_ARG, 0x00000000);
console.log(Uint32LCG.toHexString(g1.next().value, 8)); // 0x00006073
console.log(Uint32LCG.toHexString(g1.next().value, 8)); // 0xe97e7b6a
console.log(Uint32LCG.toHexString(g1.next().value, 8)); // 0x52713895

const g2 = Uint32LCG.generator(GEN3_ARG, 0x00000000, 3);
console.log([...g2].map<string>(seed => Uint32LCG.toHexString(seed, 8)));
// [0]: 0x00006073
// [1]: 0xe97e7b6a
// [2]: 0x52713895

const g3 = Uint32LCG.generator(GEN3_INVERSE_ARG, 0x52713895, 3);
console.log([...g3].map<string>(seed => Uint32LCG.toHexString(seed, 8)));
// [0]: 0xe97e7b6a
// [1]: 0x00006073
// [2]: 0x00000000
```


## Build & Test
```bash
# Setup
$ git clone https://github.com/mizdra/poke-lcg
$ cd poke-lcg
$ npm install
$ npm install -g gulp mocha tslint typescript

# Build
$ npm run build

# Lint
$ npm run lint

# Test
$ npm test
```


## License
MIT License