let recursiveBS = function (arr, num, start, end) {
    if (arr.length == 0) return undefined;
    if (start > end) return false;
    if (arr.length = 1) return num;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) return mid;
    if (arr[mid] > num)
        return recursiveBS(arr, num, start, mid - 1);
    else
        return recursiveBS(arr, num, mid + 1, end);
};

const ClosureFibonacci = (num) => {
    let n = num;

    const fibonacciRecursive = (n) => {

        if (n < 2) {
            return n;
        }
        else {
            return (fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2))
        }
    };

    return fibonacciRecursive(n);
};

const fibonacciRecursive = (num) => {

    if (num < 2) {
        return num;
    }
    else {
        return (fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2))
    }
};

function factorial(num) {
    if (num == 0) {
        return 1;
    }
    if (num < 0) return 'Input error'
    return num * factorial(num - 1);
}

const getCounterLocking = () => {
    let counter = 0;

    return function () {
        return ++counter;
    };
};