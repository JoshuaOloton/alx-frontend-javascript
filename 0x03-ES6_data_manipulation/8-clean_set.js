export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || typeof set !== 'object') return '';
  return Array.from(set).filter((e) => e && e.startsWith(startString)).map((e) => e.slice(startString.length)).join('-');
}
