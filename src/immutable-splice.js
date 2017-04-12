export default function immutableSplice(array, start, deleteCount, ...items) {
  return [...array.slice(0, start), ...items, ...array.slice(start + deleteCount)];
}
