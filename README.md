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
import * as Uint32LCG from '@mizdra/poke-lcg/uint32';

const g1 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000);
console.log(Uint32LCG.toHexString(g1.next().value, 8)); // '00006073'
console.log(Uint32LCG.toHexString(g1.next().value, 8)); // 'e97e7b6a'
console.log(Uint32LCG.toHexString(g1.next().value, 8)); // '52713895'

const g2 = Uint32LCG.generator(Uint32LCG.GEN3_ARG, 0x00000000, 3);
const seedList2 = [...g2].map<string>(seed => Uint32LCG.toHexString(seed, 8))
console.log(seedList2); // ['00006073', 'e97e7b6a', '52713895']

const g3 = Uint32LCG.generator(Uint32LCG.GEN3_INVERSE_ARG, 0x52713895, 3);
const seedList3 = [...g3].map<string>(seed => Uint32LCG.toHexString(seed, 8));
console.log(seedList3); // ['e97e7b6a', '00006073', '00000000']
```


## API docs
See [Documentation](http://mizdra.github.io/poke-lcg/).


## Build & Test
```bash
# Setup
$ git clone https://github.com/mizdra/poke-lcg
$ cd poke-lcg
$ npm install
$ npm install -g typescript

# Build
$ npm run build

# Lint
$ npm run lint

# Lint & Test
$ npm test
```


## License
MIT License