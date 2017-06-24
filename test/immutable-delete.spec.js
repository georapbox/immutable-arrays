import {default as del} from '../src/immutable-delete';
import chai from 'chai';

const expect = chai.expect;

const arr = ['a', 'b', 'c', 'd', 'e'];
const res1 = del(arr, 2);
const res2 = del(arr, -2);
const res3 = del(arr, 0);

describe('immutable-delete', () => {
  it('original array should stay untouched', () => {
    expect(arr).to.not.eql(res1);
  });

  it('should have length 4', () => {
    expect(res1).with.length(4);
  });

  it('element at index 2 should now be "d"', () => {
    expect(res1[2]).to.equal('d');
  });

  it('result array should be equal to original if index is not positive integer', () => {
    expect(res2).with.length(arr.length);
    expect(res2).to.eql(['a', 'b', 'c', 'd', 'e']);
  });

  it('should delete "a" for index of 0', () => {
    expect(res3).to.eql(['b', 'c', 'd', 'e']);
  });
});
