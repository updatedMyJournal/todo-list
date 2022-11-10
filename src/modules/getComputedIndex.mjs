/** @module getComputedIndex */

/**
 * Compute and return a unique index based on the last numeric key in the storage
 * 
 * @param {Map<number, Object>} storage - object storage. 
 * _key_: index
 * _value_: an object
 * 
 * @returns {number} - computed index
 */
export default function getComputedIndex(storage) {
  let newIndex = 0;

  if (storage.size > 0) {
    let lastIndex = [...storage.keys()].at(-1);

    if (isNaN(lastIndex)) return newIndex;

    newIndex = lastIndex + 1;
  }

  return newIndex;
}
