function fibonacciSum(limit: number): number {
    let a: number = 3;
    let b: number = 4;
    let sum: number = 0;

    while (a <= limit) {
        if (a % 2 === 0) {
            sum += a;
        }

        let nextTerm: number = a + b;
        a = b;
        b = nextTerm;
    }

    return sum;
}

const limit: number = 7000000;
const result: number = fibonacciSum(limit);

console.log(result);
