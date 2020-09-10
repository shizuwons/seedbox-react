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

export function convertToString(str) {
    return str.toString();
}

export function arrangeValues(arr, code) {
    let networthIndex = arr.findIndex(x => x.code === code);
    let less = (arr[networthIndex]);
    if (networthIndex !== undefined) {
        arr.splice(networthIndex, 1);
        arr.unshift(less);
    }

    return arr;
}