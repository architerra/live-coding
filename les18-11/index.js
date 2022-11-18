function buildObject(keysList, valuesList) {
  return keysList.reduce(
    (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
    {}
  );

  //   const obj = {};
  //   for (let index = 0; index < keysList.length; index += 1) {
  //        obj[keysList[index]] = valuesList[index];
  //     const key = keysList[index];
  //     const value = valuesList[index];
  //     obj.key = value;
  //   }
  //   return obj;
}

// examples
const keys = ["name", "address", "age"];
const values = ["Bob", "Ukraine", 34];
const result = buildObject(keys, values);
console.log(result);
