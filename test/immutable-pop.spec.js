import {default as pop} from '../src/immutable-pop';
import chai from 'chai';

const expect = chai.expect;

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = pop(originalArray);

describe('immutable-pop', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).to.not.eql(resultArray);
  });

  it('should have length 4', () => {
    expect(resultArray).with.length(4);
  });

  it('element at index 0 should be "a"', () => {
    expect(resultArray[0]).to.equal('a');
  });

  it('pop on empty array should return empty array', () => {
    expect(pop([])).to.be.empty;
  });
});
