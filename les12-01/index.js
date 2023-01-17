// console.log(this);

// function sayHi {
//     console.log(`Hello, ${this.userName}`)
// }

// const user = {
//     userName: 'Olexiy',
// }

// const sayHiBinded = sayHi.bind(user);

// sayHiBinded();

// task timer

const timer = {
    secondPassed: 0,
    minsPassed: 0,
    startTimer() {
        console.log(this.secondPassed);
        // 
        setInterval(function() {
            this.secondPassed +=1;

            if (this.secondPassed === 60)
        }, 1000);
    },
    getTimer() {
        // 
    },
    stopTimer() {
        // 
    },
    resetTimer() {
        // 
    },
};

timer.startTimer();