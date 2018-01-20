# CHANGELOG

## v1.0.2

- Use the array spread operator in delete method.
- Keep devDependencies up to date.

## v1.0.1

- Keep devDependencies up to date.
- Minor documentation updates.


## v1.0.0

### Changes
- Provide named exports for each API method. Now you can also import like this: `import {push} from 'immutable-arrays'`

### Breaking Changes
Change API methods' names to avoid redundancy. This was more of an issue when the library was used as a global in browser where someone would need to type `immutableArrays.immutablePush()`.
Below is a list with the renamed methods:
- `immutablePush` renamed to `push`;
- `immutablePop` renamed to `pop`;
- `immutableShift` renamed to `shift`;
- `immutableUnshift` renamed to `unshift`;
- `immutableSplice` renamed to `splice`;
- `immutableReverse` renamed to `reverse`;
- `immutableSort` renamed to `sort`;
- `immutableDelete` renamed to `del`;

## v0.4.3
- Include test coverage in build process
- Add test to cover scenario with all optional arguments being undefined for immutableSplice method

## v0.4.2
- Keep devDependencies up to date
- Add code climate integration
- Add test coverage report

## v0.4.1
- Fix bug while deleting an element at 0 index [(#1)](https://github.com/georapbox/immutable-arrays/pull/1)
