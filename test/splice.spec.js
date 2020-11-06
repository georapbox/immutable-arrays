import { splice } from '../src/splice';

const arr = ['a', 'b', 'c', 'd', 'e'];
const res1 = splice(arr, 0);
const res2 = splice(arr, 0, 1);
const res3 = splice(arr, 0, 3);
const res4 = splice(arr, 0, arr.length);
const res5 = splice(arr, 0, -3);
const res6 = splice(arr, 0, 0, 'lorem', 'ipsum');
const res7 = splice(arr, arr.length, 0, 'lorem', 'ipsum');
const res8 = splice(arr, 0, 2, 'lorem', 'ipsum');
const res9 = splice(arr, arr.length - 2, 2, 'lorem', 'ipsum');
const res10 = splice(arr);

describe('immutable-splice', () => {
  it('original array should stay untouched', () => {
    expect(res1).not.toEqual(arr);
    expect(res2).not.toEqual(arr);
    expect(res3).not.toEqual(arr);
    expect(res4).not.toEqual(arr);
    expect(res6).not.toEqual(arr);
    expect(res7).not.toEqual(arr);
    expect(res8).not.toEqual(arr);
    expect(res9).not.toEqual(arr);
  });

  it('should remove all elements from array', () => {
    expect(res1).toHaveLength(0);
  });

  it('should remove first element from array', () => {
    expect(res2).toHaveLength(4);
    expect(res2[0]).toEqual('b');
  });

  it('should remove the first 3 elements from array', () => {
    expect(res3).toHaveLength(2);
    expect(res3[0]).toEqual('d');
  });

  it('should remove all elements from array if deleteCount is equal to array length', () => {
    expect(res4).toHaveLength(0);
  });

  it('should not remove any elements from array if deleteCount lower than 0', () => {
    expect(res5).toHaveLength(arr.length);
  });

  it('should add 2 elements to the beginning of the array', () => {
    expect(res6).toHaveLength(7);
    expect(res6[0]).toEqual('lorem');
    expect(res6[1]).toEqual('ipsum');
    expect(res6[6]).toEqual('e');
  });

  it('should add 2 elements to the end of the array', () => {
    expect(res7).toHaveLength(7);
    expect(res7[0]).toEqual('a');
    expect(res7[5]).toEqual('lorem');
    expect(res7[6]).toEqual('ipsum');
  });

  it('should remove the first 2 elements and add 2 others in their places', () => {
    expect(res8).toHaveLength(5);
    expect(res8[0]).toEqual('lorem');
    expect(res8[1]).toEqual('ipsum');
    expect(res8[3]).toEqual('d');
    expect(res8[4]).toEqual('e');
    expect(res8).not.toContain('a');
    expect(res8).not.toContain('b');
  });

  it('should remove the last 2 elements and add 2 others in their places', () => {
    expect(res9).toHaveLength(5);
    expect(res9[3]).toEqual('lorem');
    expect(res9[4]).toEqual('ipsum');
    expect(res9[0]).toEqual('a');
    expect(res9[1]).toEqual('b');
    expect(res9).not.toContain('d');
    expect(res9).not.toContain('e');
  });

  it('should return a new array with the same elements as the original one', () => {
    expect(res10).toEqual(['a', 'b', 'c', 'd', 'e']);
  });
});
