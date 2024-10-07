export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buff = new ArrayBuffer(length);
  const newView = new DataView(buff, 0, length);
  const arr = new Int8Array(buff);
  arr[position] = value;
  return newView;
}
