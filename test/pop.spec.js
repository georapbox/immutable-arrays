import { pop } from '../src/pop';

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = pop(originalArray);

describe('immutable-pop', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).not.toEqual(resultArray);
  });

  it('should have length 4', () => {
    expect(resultArray).toHaveLength(4);
  });

  it('element at index 0 should be "a"', () => {
    expect(resultArray[0]).toEqual('a');
  });

  it('pop on empty array should return empty array', () => {
    expect(pop([])).toHaveLength(0);
  });
});
