export default function analyzeArray(arr) {
  if (!Array.isArray(arr)) return null;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((acc, val) => acc + val, 0) / length;

  return { min, max, length, average };
}