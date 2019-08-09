describe('Home work 5', () => {
    describe('recursiveBS', () => {
        testData = [
            {
                arr: [],
                num: 10,
                start: 0,
                end: 5,
                expected: undefined,
            },
            {
                arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                num: 10,
                start: 25,
                end: 15,
                expected: false,
            },
            {
                arr: [10, 11],
                num: 10,
                start: 0,
                end: 2,
                expected: 10,
            },

            {
                arr: [10, 11, 12],
                num: 12,
                start: 0,
                end: 3,
                expected: 12,
            },

            {
                arr: [11],
                num: 11,
                start: 0,
                end: 1,
                expected: 11,
            },
        ];

        testData.forEach(data => {
            const { arr, num, start, end, expected } = data;
            const actual = recursiveBS(arr, num, start, end);
            it(`Должна вернуть ${expected} когда массив - [${arr}], num = ${num}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('ClosureFibonacci', () => {
        testData = [
            {
                num: 5,
                expected: 5,
            },

            {
                num: 4,
                expected: 3,
            },

            {
                num: 9,
                expected: 34,
            },

            {
                num: 0,
                expected: 0,
            },

        ];

        testData.forEach(data => {
            const { num, expected } = data;
            const actual = ClosureFibonacci(num);
            it(`Должна вернуть ${expected}, когда num = ${num}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('fibonacciRecursive', () => {
        testData = [
            {
                num: 5,
                expected: 5,
            },

            {
                num: 4,
                expected: 3,
            },

            {
                num: 9,
                expected: 34,
            },

            {
                num: 0,
                expected: 0,
            },

        ];

        testData.forEach(data => {
            const { num, expected } = data;
            const actual = fibonacciRecursive(num);
            it(`Должна вернуть ${expected}, когда num = ${num}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('Factorial', () => {
        testData = [
            {
                num: 5,
                expected: 120,
            },

            {
                num: -5,
                expected: 'Input error',
            },

            {
                num: 3,
                expected: 6,
            },

            {
                num: 4,
                expected: 24,
            },
            {
                num: 0,
                expected: 1,
            },

        ];

        testData.forEach(data => {
            const { num, expected } = data;
            const actual = factorial(num);
            it(`Должна вернуть ${expected}, когда num = ${num}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    
    describe('getCounterLocking()', () => {
        const testData = [
            {
                num: 1,
                expected: 1
            },
            {
                num: 5,
                expected: 5
            },
            {
                num: 10,
                expected: 10
            },
            {
                num: 100,
                expected: 100
            },
            {
                num: 10000,
                expected: 10000
            },
            {
                num: 100000,
                expected: 100000
            },
        ];
    
        testData.forEach(data => {
            const {num, expected} = data;
    
            let counter = getCounterLocking();
    
            for (let i = 0; i < num - 1; i++) {
                counter();
            }
    
            const actual = counter();
    
            it(`Должна вернуть ${expected}, когда num = ${num}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});