export default function reverse(str) {
  if (str.length == 0 || typeof str !== "string") return null;
  return str.split("").reverse().join("");
}
