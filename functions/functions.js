export function compareStrings(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
  
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

export function sortById(a, b) {
    return a - b;
}

export function sortIncome(a, b) {
    let firstChar = a.substring(3, 4);
    let secondChar = b.substring(3, 4);

    return firstChar - secondChar;
}