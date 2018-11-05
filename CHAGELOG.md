# CHANGELOG

## v2.0.0

### BREAKING CHANGES

> The library's API has not breaking changes. All breaking changes refer to how the final distributed files are bundled and their locations in the project.

- All distributed files are located under the `dist/` directory instead of `lib/` which was in v1.x.x. The UMD format is located under `dist/umd/` directory and the CommonJS under the `dist/commonjs/` directory.
- The directory containing the distributed files is no longer included in GIT.

### OTHER CHANGES

- All `devDependencies` are updated to latest versions. Updated Webpack to v4.x.x and Babel to v7.x.x.
- The library is now exported in both UMD (as was in version 1.x.x) and CommonJS. For CommonJS, the library's methods are also exported as standalone functions in order to import only the ones you want for your project. Check the [Usage](https://github.com/georapbox/immutable-arrays/blob/master/README.md#usage) section in README for more details.


## v1.0.3

- Fixes issue #4. Do not copy array unnecessarily in `del` method if index is a negative number.


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
