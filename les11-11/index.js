// callback:
// in: elem, index, arr
// out: bool

// algoritm:
// 0. create result array
// 1. iterate arr - loop
// 2. call callback
// 3. if callback = true => push elem
// 4. after iteration, return result arr

const filterArrayElements = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.lenght; i += 1) {
    const callbackRes = callback(arr[i], i, arr);
    if (callbackRes) {
      result.push(arr[i]);
    }
  }
  return result;
};

function func(arrElem, index, entierArr) {
  console.log("was called ", arrElem, index, entierArr);
  return arrElem >= 2;
}

const arrN = [7, 3, 9, 1, 1];

console.log(filterArrayElements(arrN, func));
