export default function getStudentIdsSum(arr) {
  if (typeof arr !== 'object') {
    return [];
  }
  return arr.reduce((total, obj) => total + obj.id, 0);
}
