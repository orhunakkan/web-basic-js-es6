var badName = "orhunakkan";

// Make your name so that it is formatted correctly

var goodName = badName.slice(0, 1).toUpperCase() + badName.slice(1, 5) + " " + badName.slice(5, 6).toUpperCase() + badName.slice(6, 10);
console.log(goodName); // Gives Orhun Akkan
