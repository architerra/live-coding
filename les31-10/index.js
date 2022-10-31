function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    // console.log(number);
    let count = 0;

    for (let index = 2; index <= number; index += 1) {
      //   console.log("step" + index);
      if (number % index === 0) {
        count += 1;
      }
    }

    if (count === 1) {
      console.log(number);
    }
  }
}

getPrimes(13);
getPrimes(67);
