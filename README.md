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
import {generator, GEN3_ARG, GEN3_INVERSE_ARG} from '@mizdra/poke-lcg';

function u32(x: number): number {
    return x >>> 0;
}

function toHex32(x: number): string {
    return '0x' + u32(x.toString(16));
}

const g1 = generator(GEN3_ARG, 0x00000000);
console.log(toHex32(g1.next().value)); // 0x6073
console.log(toHex32(g1.next().value)); // 0xe97e7b6a
console.log(toHex32(g1.next().value)); // 0x52713895

const g2 = generator(GEN3_ARG, 0x00000000, 3);
console.log([...g2].map<string>(seed => toHex32(seed)));
// [0]: 0x6073
// [1]: 0xe97e7b6a
// [2]: 0x52713895

const g3 = generator(GEN3_INVERSE_ARG, 0x52713895, 3);
console.log([...g3].map<string>(seed => toHex32(seed)));
// [0]: 0xe97e7b6a
// [1]: 0x6073
// [2]: 0x0
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