import {default as unshift} from '../src/immutable-unshift';
import chai from 'chai';

const expect = chai.expect;

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = unshift(originalArray, 'f', 'g');

describe('immutable-unshift', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).to.not.eql(resultArray);
  });

  it('should have length 7', () => {
    expect(resultArray).with.length(7);
  });

  it('elements at index 0 and 1 should now be "f" and "g" respectively', () => {
    expect(resultArray[0]).to.equal('f');
    expect(resultArray[1]).to.equal('g');
  });
});
