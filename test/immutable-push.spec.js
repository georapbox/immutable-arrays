import {default as push} from '../src/immutable-push';
import chai from 'chai';

const expect = chai.expect;

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = push(originalArray, 'f', 'g');

describe('immutable-push', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).to.not.eql(resultArray);
  });

  it('should have length 7', () => {
    expect(resultArray).with.length(7);
  });

  it('elements at index 5 and 6 should be "f" and "g" respectively', () => {
    expect(resultArray[5]).to.equal('f');
    expect(resultArray[6]).to.equal('g');
  });
});
