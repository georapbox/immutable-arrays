import { del } from '../src/del';

const arr = ['a', 'b', 'c', 'd', 'e'];
const res1 = del(arr, 2);
const res2 = del(arr, -2);
const res3 = del(arr, 0);

describe('immutable-delete', () => {
  it('original array should stay untouched', () => {
    expect(arr).not.toEqual(res1);
  });

  it('should have length 4', () => {
    expect(res1).toHaveLength(4);
  });

  it('element at index 2 should now be "d"', () => {
    expect(res1[2]).toEqual('d');
  });

  it('result array should be equal to original if index is not positive integer', () => {
    expect(res2).toHaveLength(arr.length);
    expect(res2).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('should delete "a" for index of 0', () => {
    expect(res3).toEqual(['b', 'c', 'd', 'e']);
  });
});
