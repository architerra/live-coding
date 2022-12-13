// function compareObjects(firstObj, secondObj) {
//   return !Object.keys({ ...firstObj, ...secondObj }).some(
//     (key) => firstObj[key] !== secondObj[key]
//   );
// }

function compareObjects(firstObj, secondObj) {
  return Object.keys({ ...firstObj, ...secondObj }).every(
    (key) => firstObj[key] === secondObj[key]
  );
}

// function compareObjects(firstObj, secondObj) {
//   const biggerObj =
//     JSON.stringify(firstObj).length > JSON.stringify(secondObj).length
//       ? firstObj
//       : secondObj;
//   return !Object.keys(biggerObj).some(
//     (key) => firstObj[key] !== secondObj[key]
//   );
// }

// const compareObjects = (firstObj, secondObj) => {
//   const firstArr = Object.keys(firstObj);

//   if (firstArr.length !== Object.keys(secondObj)) {
//     return false;
//   }
//   return firstArr.every((key) => firstObj[key] === secondObj[key]);
// };

// const compareObjects2 = (firstObj, secondObj) =>
//   JSON.stringify(Object.entries(firstObj).sort()) ===
//   JSON.stringify(Object.entries(secondObj).sort());

// function compareObjects(firstObj, secondObj) {
//   const firstArray = Object.keys(firstObj);
//   if (firstArray.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstArray.reduce((acc, key) => {
//     if (firstObj[key] !== secondObj[key]) {
//       acc = false;
//     };
//     return acc;
//   }, true);
// };

// const compareObjects = (firstObj, secondObj) =>
//   Object.keys(firstObj).reduce(
//     (acc, key, index) =>
//       firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1,
//     0
//   ) === Object.keys(secondObj).length;

// const compareObjects = (firstObj, secondObj) =>
//   Object.entries(firstObj).sort().join() === Object.entries(secondObj).sort().join();

// const strFromObjSorted = obj => Object.entries(obj).sort().join();
// const compareObjects = (firstObj, secondObj) =>
//   strFromObjSorted(firstObj) === strFromObjSorted(secondObj);

// function compareObjects(firstObj, secondObj) {
//   const ordered = (obj) =>
//     Object.keys(obj)
//       .sort()
//       .reduce((acc, el) => {
//         acc[el] = obj[el];
//         console.log(acc);
//         return acc;
//       }, {});
//   const sortFirstObj = ordered(firstObj);
//   const sortSecondObj = ordered(secondObj);
//   return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
// }

// examples
const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};

const obj5 = {
  age: 17,
  name: "Tom",
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
compareObjects(obj4, obj5); // ==> true
