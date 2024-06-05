export default function capitalize(str) {
  if (str.length == 0 || typeof str !== "string") return null;
  return str[0].toUpperCase() + str.slice(1);
}
