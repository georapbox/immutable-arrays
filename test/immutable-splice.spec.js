import {default as splice} from '../src/immutable-splice';
import chai from 'chai';

const expect = chai.expect;

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
    expect(res1).to.not.eql(arr);
    expect(res2).to.not.eql(arr);
    expect(res3).to.not.eql(arr);
    expect(res4).to.not.eql(arr);
    expect(res6).to.not.eql(arr);
    expect(res7).to.not.eql(arr);
    expect(res8).to.not.eql(arr);
    expect(res9).to.not.eql(arr);
  });

  it('should remove all elements from array', () => {
    expect(res1).with.length(0);
  });

  it('should remove first element from array', () => {
    expect(res2).with.length(4);
    expect(res2[0]).to.equal('b');
  });

  it('should remove the first 3 elements from array', () => {
    expect(res3).with.length(2);
    expect(res3[0]).to.equal('d');
  });

  it('should remove all elements from array if deleteCount is equal to array length', () => {
    expect(res4).with.length(0);
  });

  it('should not remove any elements from array if deleteCount lower than 0', () => {
    expect(res5).with.length(arr.length);
  });

  it('should add 2 elements to the beginning of the array', () => {
    expect(res6).with.length(7);
    expect(res6[0]).to.equal('lorem');
    expect(res6[1]).to.equal('ipsum');
    expect(res6[6]).to.equal('e');
  });

  it('should add 2 elements to the end of the array', () => {
    expect(res7).with.length(7);
    expect(res7[0]).to.equal('a');
    expect(res7[5]).to.equal('lorem');
    expect(res7[6]).to.equal('ipsum');
  });

  it('should remove the first 2 elements and add 2 others in their places', () => {
    expect(res8).with.length(5);
    expect(res8[0]).to.equal('lorem');
    expect(res8[1]).to.equal('ipsum');
    expect(res8[3]).to.equal('d');
    expect(res8[4]).to.equal('e');
    expect(res8).to.not.include('a');
    expect(res8).to.not.include('b');
  });

  it('should remove the last 2 elements and add 2 others in their places', () => {
    expect(res9).with.length(5);
    expect(res9[3]).to.equal('lorem');
    expect(res9[4]).to.equal('ipsum');
    expect(res9[0]).to.equal('a');
    expect(res9[1]).to.equal('b');
    expect(res9).to.not.include('d');
    expect(res9).to.not.include('e');
  });

  it('should return a new array with the same elements as the original one', () => {
    expect(res10).to.eql(['a', 'b', 'c', 'd', 'e']);
  });
});
