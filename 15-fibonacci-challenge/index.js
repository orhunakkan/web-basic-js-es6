function fibonacciGenerator(n) {
    var myArray = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            myArray.push(i);
        }
        else if (i === 1) {
            myArray.push(i);
        }
        else {
            myArray.push(myArray[i - 1] + myArray[i - 2]);
        }
    }
    return myArray;
}

fibonacciGenerator(15);
