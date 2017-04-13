import {default as del} from '../src/immutable-delete';
import chai from 'chai';

const expect = chai.expect;

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = del(originalArray, 2);

describe('immutable-delete', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).to.not.eql(resultArray);
  });

  it('should have length 4', () => {
    expect(resultArray).with.length(4);
  });

  it('element at index 2 should now be "d"', () => {
    expect(resultArray[2]).to.equal('d');
  });

  it('result array should be equal to original if index is not positive integer', () => {
    const res = del(originalArray, -2);
    expect(res).with.length(originalArray.length);
    expect(res).to.eql(['a', 'b', 'c', 'd', 'e']);
  });
});
