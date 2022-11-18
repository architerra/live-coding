function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  console.log("THIS", obj);
  return { ...obj, [key]: value };
}

const testObj = { name: "Gena", balance: 100, city: "Lviv" };
const { name } = testObj;
console.log(name);

// const transaction = {
//   value: 170,
// };

const stud = {
  lastName: "Sam",
};

// addPropertyV1(transaction, "currency", "USD");

// addPropertyV3(stud, "name", "Tom");

const obj1 = {};
console.log(addPropertyV4(stud, "name", "John"));
// console.log("AFTER", stud);
