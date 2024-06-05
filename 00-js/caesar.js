export default function caesarShift(str, shift) {
  let newStr = [];

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      charCode += shift;

      if ((charCode > 90 && charCode < 97) || charCode > 122) {
        charCode -= 26;
      } else if (charCode < 65) {
        charCode += 26;
      }
    }

    newStr.push(charCode);
  }

  return String.fromCharCode(...newStr);
}

// 65 - 90
// 97 - 122
