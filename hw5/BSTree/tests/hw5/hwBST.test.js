describe('BSTree', () => {
    describe('init()', () => {
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 4, 8, 5, 3, 4, 5],
                expected: [1, 2, 4, 8, 5, 3, 4, 5]
            },
            {
                array: [0],
                expected: [0]
            },
            {
                array: [],
                expected: []
            },

        ];

        testData.forEach(data => {
            const { array, expected } = data;

            let tree = new BST();

            const actual = tree.init(array);

            it(`Должо вернуть массив [${expected}], когда массив = [${array}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });
    describe(' getArray()', () => {
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [1, 2, 3, 4, 4, 5, 5, 8],
                expected: [1, 2, 3, 4, 4, 5, 5, 8]
            },
            {
                array: [0],
                expected: [0]
            },
            {
                array: [],
                expected: []
            },
            {
                array: [1, 2, 3],
                expected: [1, 2, 3]
            },
            {
                array: [1, 2],
                expected: [1, 2]
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            let tree = new BST();
            tree.init(array);

            const actual = tree.getArray();

            it(`Должно вернуть массив [${expected}]`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('getSize()', () => {
        const testData = [
            {
                array: [1, 2, 3, 4, 5],
                expected: 5
            },
            {
                array: [1, 2, 3, 4, 5, 8],
                expected: 6
            },
            {
                array: [0],
                expected: 1
            },
            {
                array: [],
                expected: 0,
            },
            {
                array: [1, 2],
                expected: 2
            },
            {
                array: [1, 2, 3],
                expected: 3
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            let tree = new BST();
            tree.init(array);
            const actual = tree.getSize();

            it(`Должно вернуть размер ${expected}, когда массив = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('toString()', () => {
        const testData = [
            {
                array: [],
                expected: '[]'
            },
            {
                array: [1],
                expected: '[1]'
            },
            {
                array: [2],
                expected: '[2]'
            },
            {
                array: [1, 2],
                expected: '[1, 2]'
            },
            {
                array: [1, 2, 3],
                expected: '[1, 2, 3]'
            },
            {
                array: [1, 3, 5, 7, 9],
                expected: '[1, 3, 5, 7, 9]'
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            let tree = new BST();
            tree.init(array);
            const actual = tree.toString();

            it(`Должно вернуть строку ${expected}, когда массив = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
    describe('push()', () => {
        const testData = [
            {
                array: [],
                value: 0,
                expected: {
                    array: [0],
                    len: 1
                }
            },
           
            {
                array: [1, 2],
                value: 3,
                expected: {
                    array: [1, 2, 3],
                    len: 3
                }
            },
            {
                array: [2, 4, 6, 8],
                value: 10,
                expected: {
                    array: [2, 4, 6, 8, 10],
                    len: 5
                }
            },
            {
                array: [2, 4, 6, 8],
                value: 0,
                expected: {
                    array: [0, 2, 4, 6, 8],
                    len: 5
                }
            },
           
        ];

        testData.forEach(data => {
            const {array, value, expected} = data;

            let tree = new BST();
            tree.init(array);
            tree.push(value);

            const actual = {
                array: tree.getArray(),
                len: tree.getSize()
            };

            it(`Должно вернуть {массив: [${expected.array}], длину: ${expected.len}} когда массив = "[${array}]" и новые элемент = ${value}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('remove', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BST();
        });

        it('Должно вернуть новую длину массива 0 когда init массива = undefined и удаляемый элемент = undefined', function () {
            bTree.init(undefined);
            const value = undefined;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('Должно вернуть новую длину массива 0 когда init массива = null и удаляемый элемент = null', function () {
            bTree.init(null);
            const value = null;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('Должно вернуть новую длину массива 0 когда init массива = null и удаляемый элемент = undefined', function () {
            bTree.init([]);
            const value = undefined;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('Должно вернуть новую длину массива 0 когда init массива = null и удаляемый элемент = null', function () {
            bTree.init([]);
            const value = null;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('Должно вернуть новую длину массива 0 когда init массива = [1] и удаляемый элемент = 1', function () {
            bTree.init([1]);
            const value = 1;
            const expected = 0;
            const size = 0;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('Должно вернуть новую длину массива 1 когда init массива = [1, 6] и удаляемый элемент = 6', function () {
            bTree.init([1, 6]);
            const value = 6;
            const expected = 1;
            const size = 1;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('Должно вернуть новую длину массива 6 когда init массива = [1, 6, 3, 4, 8, 9, 3] и удаляемый элемент = 3', function () {
            bTree.init([1, 6, 3, 4, 8, 9, 3]);
            const value = 3;
            const expected = 6;
            const size = 6;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });

        it('Должно вернуть новую длину массива 7 когда init массива = [1, 6, 3, 4, 8, 9, 3] и удаляемый элемент = 12', function () {
            bTree.init([1, 6, 3, 4, 8, 9, 3]);
            const value = 12;
            const expected = 7;
            const size = 7;

            const actual = bTree.remove(value);

            assert.strictEqual(actual, expected);
            assert.strictEqual(bTree.getSize(), size);
        });
    });

    describe('setBalance', () => {
        let bTree;

        beforeEach(() => {
            bTree = new BST();
        });

        it('Должно вернуть null когда init массива = undefined', function () {
            bTree.init(undefined);
            const expected = null;

            const actual = bTree.setBalance();

            assert.strictEqual(actual, expected);
        });

        it('Должно вернуть null когда init массива = null', function () {
            bTree.init(null);
            const expected = null;

            const actual = bTree.setBalance();

            assert.strictEqual(actual, expected);
        });

        it('Должно вернуть null когда init массива = []', function () {
            bTree.init([]);
            const expected = null;

            const actual = bTree.setBalance();

            assert.strictEqual(actual, expected);
        });

        it('Должно вернуть { value: 1, right: null, left: null } когда init массива = [1]', function () {
            bTree.init([1]);
            const expected = { value: 1, right: null, left: null };

            const actual = bTree.setBalance();

            assert.deepEqual(actual, expected);
        });

        it('Должно вернуть {value: 11, left: Node, right: Node} когда init массива = [7, 11, 10, 15, 33, -3, 20]', function () {
            bTree.init([7, 11, 10, 15, 33, -3, 20]);
            const expected = {value: 11, right: {value: 20, right: {value: 33, right: null, left: null}, left: {value: 15, right: null, left: null}}, left: {value: 7, right: {value: 10, right: null, left: null}, left: {value: -3, right: null, left: null}}};

            const actual = bTree.setBalance();

            assert.deepEqual(actual, expected);
        });
    });


});
