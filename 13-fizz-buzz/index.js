function fizzBuzz() {
    var outPut = [];

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            outPut.push("FizzBuzz");
        } else if (i % 3 === 0) {
            outPut.push("Fizz");
        } else if (i % 5 === 0) {
            outPut.push("Buzz");
        } else {
            outPut.push(i);
        }
    }
    console.log(outPut);
}

fizzBuzz();
