function fizzBuzz(n: number): string[] {
    let items = [];
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0) items.push("Fizz");
        else if (i % 5 == 0) items.push("Buzz");
        else if (i % 3 == 0 && i % 5 == 0) items.push("FizzBuzz");
        else items.push(`${i}`);
    }
    return items;
}

console.log(fizzBuzz(5))
