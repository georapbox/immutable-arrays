import immutableDelete from './del';
import immutablePop from './pop';
import immutablePush from './push';
import immutableReverse from './reverse';
import immutableShift from './shift';
import immutableSort from './sort';
import immutableSplice from './splice';
import immutableUnshift from './unshift';

export const del = immutableDelete;
export const pop = immutablePop;
export const push = immutablePush;
export const reverse = immutableReverse;
export const shift = immutableShift;
export const sort = immutableSort;
export const splice = immutableSplice;
export const unshift = immutableUnshift;

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
