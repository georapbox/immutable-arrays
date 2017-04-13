import {default as shift} from '../src/immutable-shift';
import chai from 'chai';

const expect = chai.expect;

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = shift(originalArray);

describe('immutable-shift', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).to.not.eql(resultArray);
  });

  it('should have length 4', () => {
    expect(resultArray).with.length(4);
  });

  it('element at index 0 should now be "b"', () => {
    expect(resultArray[0]).to.equal('b');
  });
});
