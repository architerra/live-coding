// function getCustomers(obj) {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   console.log(entries);

//   for (let index = 0; index < entries.length; index += 1) {
//     resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }

//   resArr.sort((a, b) => a.age - b.age);
//   console.log(resArr);
//   return resArr;
// }

const getCustomers = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);

const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 20,
  },
  "customer-id-3": {
    name: "Bob",
    age: 17,
  },
  "customer-id-4": {
    name: "John",
    age: "22",
  },
};

getCustomers(customers);
