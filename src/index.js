import immutablePush from './immutable-push';
import immutablePop from './immutable-pop';
import immutableShift from './immutable-shift';
import immutableUnshift from './immutable-unshift';
import immutableSplice from './immutable-splice';
import immutableReverse from './immutable-reverse';
import immutableSort from './immutable-sort';
import immutableDelete from './immutable-delete';

export const push = immutablePush;
export const pop = immutablePop;
export const shift = immutableShift;
export const unshift = immutableUnshift;
export const splice = immutableSplice;
export const reverse = immutableReverse;
export const sort = immutableSort;
export const del = immutableDelete;

export default {
  push: immutablePush,
  pop: immutablePop,
  shift: immutableShift,
  unshift: immutableUnshift,
  splice: immutableSplice,
  reverse: immutableReverse,
  sort: immutableSort,
  del: immutableDelete
};
