import {default as sort} from '../src/immutable-sort';
import chai from 'chai';

const expect = chai.expect;

const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
const stringArray = ['Blue', 'Humpback', 'Beluga'];

describe('immutable-sort', () => {
  it('original array should stay untouched', () => {
    const resultArray = sort(numberArray, (a, b) => a - b);
    expect(numberArray).to.not.eql(resultArray);
  });

  it('sorts numeric array (ascending)', () => {
    const resultArray = sort(numberArray, (a, b) => a - b);
    expect(resultArray).to.eql([-3, 0, 1, 3, 4, 5, 10, 20]);
  });

  it('sorts numeric array (descending)', () => {
    const resultArray = sort(numberArray, (a, b) => b - a);
    expect(resultArray).to.eql([20, 10, 5, 4, 3, 1, 0, -3]);
  });

  it('sorts string array (without compareFunction) (ascending)', () => {
    const resultArray = sort(stringArray);
    expect(resultArray).to.eql(['Beluga', 'Blue', 'Humpback']);
  });

  it('sorts string array (with compareFunction) (descending)', () => {
    const resultArray = sort(stringArray, (a, b) => a.toLowerCase() < b.toLowerCase());
    expect(resultArray).to.eql(['Humpback', 'Blue', 'Beluga']);
  });
});
