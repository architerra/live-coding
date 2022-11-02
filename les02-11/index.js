const numbersListOne = [1, 2, 3, 4, 5, 6];

const numbersListTwo = new Array();

console.log("before pop", numbersListOne);

numbersListOne.pop();
// input: none;
// output: element;

const popRes = numbersListOne.pop();
console.log(popRes);

console.log("after pop", numbersListOne);

numbersListTwo.push(100);

const pushRes = numbersListTwo.push(100);

console.log(pushRes);
console.log("after push", numbersListTwo);

const numbersListThree = [2, 3, 4, 5, 6];
