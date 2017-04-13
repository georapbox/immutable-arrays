import {default as reverse} from '../src/immutable-reverse';
import chai from 'chai';

const expect = chai.expect;

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = reverse(originalArray);

describe('immutable-reverse', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).to.not.eql(resultArray);
  });

  it('original and result arrays should have equal length', () => {
    expect(resultArray).with.length(originalArray.length);
  });

  it('elements in result array should be reversed', () => {
    expect(resultArray).to.eql(['e', 'd', 'c', 'b', 'a']);
  });
});
