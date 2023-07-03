export default function getStudentsByLocation(arr, location) {
  if (typeof arr !== 'object') {
    return [];
  }
  return arr.filter((obj) => obj.location === location);
}
