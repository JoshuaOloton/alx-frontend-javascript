export default function appendToEachArrayValue(array, appendString) {
  const nArray = array;
  for (let value of array) {
    const index = array.indexOf(value);
    value = appendString + value;
    nArray[index] = value;
  }

  return nArray;
}
