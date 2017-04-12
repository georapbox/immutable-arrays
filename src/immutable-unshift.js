export default function immutableUnshift(array, newEntry) {
  return [newEntry, ...array];
}
