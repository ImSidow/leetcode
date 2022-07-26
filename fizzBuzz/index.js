function fizzBuzz(n) {
    var items = [];
    for (var i = 1; i < n + 1; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            items.push("FizzBuzz");
        else if (i % 3 == 0)
            items.push("Fizz");
        else if (i % 5 == 0)
            items.push("Buzz");
        else
            items.push("".concat(i));
    }
    return items;
}
console.log(fizzBuzz(5));
