function yourPercentage() {
    var randomNumber = Math.random();
    return Math.floor(randomNumber * 100) + 1;
}

console.log("Your percentage is " + yourPercentage() + "%")
