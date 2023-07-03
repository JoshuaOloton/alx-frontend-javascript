export default function cleanSet(set, startString) {
  if (startString === '') return '';
  return Array.from(set).filter((e) => e.startsWith(startString)).map((e) => e.slice(startString.length)).join('-');
}
