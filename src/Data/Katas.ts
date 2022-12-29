export type Exercice = {
    id: number
    name: string
    description: string,
    mathematicalExample: string[],
    difficulty: number
    tags: string[]
    tests: any[]
    solution: string | null
    baseCode: string
}
// list of all exercices, the method to execute the code is always the same (execute(params));
const Exercices: Exercice[] = [
    {
        id: 1,
        name: 'Hello World',
        description: 'Write a function that returns "Hello World"',
        mathematicalExample: [],
        difficulty: 1,
        tags: ['hello', 'world'],
        tests: [
            {
                expected: 'Hello World',
            }
        ],
        baseCode: `// Do not change this method \nfunction execute() {\n// Write your code here and return the value\n}`,
        solution: 'function execute() {\nreturn "Hello World"\n}'
    },
    {
        id: 2,
        name: 'Sum',
        description: 'Write a function that returns the sum of two numbers',
        mathematicalExample: [
            'a = 1<br/>b = 2<br/>c = a + b<br/>=> c = 3',
            'a = 5<br/>b = 2<br/>c = a + b<br/>=> c = 7',
        ],
        difficulty: 1,
        tags: ['sum', 'addition'],
        tests: [
            {a: 1, b: 2, expected: 3},
            {a: 2, b: 3, expected: 5},
            {a: 3, b: 4, expected: 7},
            {a: 4, b: 5, expected: 9},
            {a: 5, b: 6, expected: 11},
            {a: 6, b: 7, expected: 13},
            {a: 7, b: 8, expected: 15},
            {a: 8, b: 9, expected: 17},
            {a: 9, b: 10, expected: 19},
            {a: 10, b: 11, expected: 21},
            {a: 281381313, b: 38198393, expected: 319579706},
            {a: 38198393, b: 281381313, expected: 319579706},
            {a: 38198393, b: 38198393, expected: 76396786},
            {a: 38198393, b: 38198393, expected: 76396786},
        ],
        baseCode: `// Do not change this method \nfunction execute(a, b) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a, b) {\nreturn a + b\n}'
    },
    {
        id: 3,
        name: 'Substraction',
        description: 'Write a function that returns the substraction of two numbers',
        mathematicalExample: [
            'a = 1<br/>b = 2<br/>c = a - b<br/>=> c = -1',
            'a = 5<br/>b = 2<br/>c = a - b<br/>=> c = 3',
        ],
        difficulty: 1,
        tags: ['substraction', 'subtraction'],
        tests: [
            {a: 1, b: 2, expected: -1},
            {a: 2, b: 3, expected: -1},
            {a: 3, b: 4, expected: -1},
            {a: 4, b: 5, expected: -1},
            {a: 5, b: 6, expected: -1},
            {a: 6, b: 7, expected: -1},
            {a: 7, b: 8, expected: -1},
            {a: 8, b: 9, expected: -1},
            {a: 9, b: 10, expected: -1},
            {a: 10, b: 11, expected: -1},
            {a: 281381313, b: 38198393, expected: 243182920},
            {a: 38198393, b: 281381313, expected: -243182920},
            {a: 38198393, b: 38198393, expected: 0},
            {a: 38198393, b: 38198393, expected: 0},
        ],
        baseCode: `// Do not change this method \nfunction execute(a, b) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a, b) {\nreturn a - b\n}'
    },
    {
        id: 4,
        name: 'Bubble Sort',
        description: 'Write a function that returns the sorted array',
        mathematicalExample: [
            'a = [1, 2, 3]<br/>b = bubbleSort(a)<br/>=> b = [1, 2, 3]',
            'a = [3, 2, 1]<br/>b = bubbleSort(a)<br/>=> b = [1, 2, 3]',
            'a = [1, 3, 2]<br/>b = bubbleSort(a)<br/>=> b = [1, 2, 3]',
            'a = [2, 1, 3]<br/>b = bubbleSort(a)<br/>=> b = [1, 2, 3]',
            'a = [2, 3, 1]<br/>b = bubbleSort(a)<br/>=> b = [1, 2, 3]',
            'a = [3, 1, 2]<br/>b = bubbleSort(a)<br/>=> b = [1, 2, 3]',
        ],
        difficulty: 2,
        tags: ['sort', 'bubble'],
        tests: [
            {a: [1, 2, 3], expected: [1, 2, 3]},
            {a: [3, 2, 1], expected: [1, 2, 3]},
            {a: [1, 3, 2], expected: [1, 2, 3]},
            {a: [2, 1, 3], expected: [1, 2, 3]},
            {a: [2, 3, 1], expected: [1, 2, 3]},
            {a: [3, 1, 2], expected: [1, 2, 3]},
            {a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 10, 9, 3, 8, 4, 7, 5, 6], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 3, 10, 9, 8, 4, 7, 5, 6], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 3, 4, 10, 9, 8, 7, 5, 6], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 3, 4, 5, 10, 9, 8, 7, 6], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 3, 4, 5, 6, 10, 9, 8, 7], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 3, 4, 5, 6, 7, 10, 9, 8], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 3, 4, 5, 6, 7, 8, 10, 9], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
            {a: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        ],
        baseCode: `// Do not change this method \nfunction execute(a) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a) {\nfor (let i = 0; i < a.length; i++) {\nfor (let j = 0; j < a.length - 1; j++) {\nif (a[j] > a[j + 1]) {\nlet temp = a[j];\na[j] = a[j + 1];\na[j + 1] = temp;\n}\n}\n}\nreturn a;\n}'
    },
    {
        id: 5,
        name: 'Factorial',
        description: 'Write a function that returns the factorial of a number',
        mathematicalExample: [
            'a = 1<br/>b = factorial(a)<br/>=> b = 1',
            'a = 2<br/>b = factorial(a)<br/>=> b = 2',
            'a = 3<br/>b = factorial(a)<br/>=> b = 6',
            'a = 4<br/>b = factorial(a)<br/>=> b = 24',
            'a = 5<br/>b = factorial(a)<br/>=> b = 120',
            'a = 6<br/>b = factorial(a)<br/>=> b = 720',
            'a = 7<br/>b = factorial(a)<br/>=> b = 5040',
            'a = 8<br/>b = factorial(a)<br/>=> b = 40320',
            'a = 9<br/>b = factorial(a)<br/>=> b = 362880',
            'a = 10<br/>b = factorial(a)<br/>=> b = 3628800',
        ],
        difficulty: 2,
        tags: ['factorial'],
        tests: [
            {a: 1, expected: 1},
            {a: 2, expected: 2},
            {a: 3, expected: 6},
            {a: 4, expected: 24},
            {a: 5, expected: 120},
            {a: 6, expected: 720},
            {a: 7, expected: 5040},
            {a: 8, expected: 40320},
            {a: 9, expected: 362880},
            {a: 10, expected: 3628800},
        ],
        baseCode: `// Do not change this method \nfunction execute(a) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a) {\nlet result = 1;\nfor (let i = 1; i <= a; i++) {\nresult *= i;\n}\nreturn result;\n}'
    },
    {
        id: 6,
        name: 'Fibonacci',
        description: 'Write a function that returns the nth number of the Fibonacci sequence',
        mathematicalExample: [
            'a = 1<br/>b = fibonacci(a)<br/>=> b = 1',
            'a = 2<br/>b = fibonacci(a)<br/>=> b = 1',
            'a = 3<br/>b = fibonacci(a)<br/>=> b = 2',
            'a = 4<br/>b = fibonacci(a)<br/>=> b = 3',
            'a = 5<br/>b = fibonacci(a)<br/>=> b = 5',
            'a = 6<br/>b = fibonacci(a)<br/>=> b = 8',
            'a = 7<br/>b = fibonacci(a)<br/>=> b = 13',
            'a = 8<br/>b = fibonacci(a)<br/>=> b = 21',
            'a = 9<br/>b = fibonacci(a)<br/>=> b = 34',
            'a = 10<br/>b = fibonacci(a)<br/>=> b = 55',
        ],
        difficulty: 2,
        tags: ['fibonacci'],
        tests: [
            {a: 1, expected: 1},
            {a: 2, expected: 1},
            {a: 3, expected: 2},
            {a: 4, expected: 3},
            {a: 5, expected: 5},
            {a: 6, expected: 8},
            {a: 7, expected: 13},
            {a: 8, expected: 21},
            {a: 9, expected: 34},
            {a: 10, expected: 55},
        ],
        baseCode: `// Do not change this method \nfunction execute(a) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a) {\nlet result = 1;\nlet prev = 0;\nfor (let i = 1; i < a; i++) {\nlet temp = result;\nresult += prev;\nprev = temp;\n}\nreturn result;\n}'
    },
    {
        id: 7,
        name: 'Greatest Common Divisor',
        description: 'Write a function that returns the greatest common divisor of two numbers',
        mathematicalExample: [
            'a = 1<br/>b = 1<br/>c = gcd(a, b)<br/>=> c = 1',
            'a = 2<br/>b = 2<br/>c = gcd(a, b)<br/>=> c = 2',
            'a = 3<br/>b = 3<br/>c = gcd(a, b)<br/>=> c = 3',
            'a = 128<br/>b = 64<br/>c = gcd(a, b)<br/>=> c = 64'
        ],
        difficulty: 2,
        tags: ['gcd'],
        tests: [
            {a: 1, b: 1, expected: 1},
            {a: 2, b: 2, expected: 2},
            {a: 3, b: 3, expected: 3},
            {a: 128, b: 64, expected: 64},
        ],
        baseCode: `// Do not change this method \nfunction execute(a, b) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a, b) {\nlet temp;\nwhile (b !== 0) {\ntemp = b;\nb = a % b;\na = temp;\n}\nreturn a;\n}'
    },
    {
        id: 8,
        name: 'Is Prime',
        description: 'Write a function that returns true if a number is prime and false otherwise',
        mathematicalExample: [
            'a = 1<br/>b = isPrime(a)<br/>=> b = false',
            'a = 2<br/>b = isPrime(a)<br/>=> b = true',
            'a = 3<br/>b = isPrime(a)<br/>=> b = true',
            'a = 4<br/>b = isPrime(a)<br/>=> b = false',
            'a = 5<br/>b = isPrime(a)<br/>=> b = true',
            'a = 6<br/>b = isPrime(a)<br/>=> b = false',
            'a = 7<br/>b = isPrime(a)<br/>=> b = true'
        ],
        difficulty: 2,
        tags: ['prime'],
        tests: [
            {a: 1, expected: false},
            {a: 2, expected: true},
            {a: 3, expected: true},
            {a: 4, expected: false},
            {a: 5, expected: true},
            {a: 6, expected: false},
            {a: 7, expected: true},
        ],
        baseCode: `// Do not change this method \nfunction execute(a) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a) {\nif (a < 2) {\nreturn false;\n}\nfor (let i = 2; i < a; i++) {\nif (a % i === 0) {\nreturn false;\n}\n}\nreturn true;\n}'
    },
    {
        id: 9,
        name: 'Is Palindrome',
        description: 'Write a function that returns true if a string is a palindrome and false otherwise',
        mathematicalExample: [
            'a = "a"<br/>b = isPalindrome(a)<br/>=> b = true',
            'a = "aa"<br/>b = isPalindrome(a)<br/>=> b = true',
            'a = "ab"<br/>b = isPalindrome(a)<br/>=> b = false',
            'a = "aba"<br/>b = isPalindrome(a)<br/>=> b = true',
            'a = "abba"<br/>b = isPalindrome(a)<br/>=> b = true',
            'a = "abcba"<br/>b = isPalindrome(a)<br/>=> b = true'
        ],
        difficulty: 2,
        tags: ['palindrome'],
        tests: [
            {a: 'a', expected: true},
            {a: 'aa', expected: true},
            {a: 'ab', expected: false},
            {a: 'aba', expected: true},
            {a: 'abba', expected: true},
            {a: 'abcba', expected: true},
        ],
        baseCode: `// Do not change this method \nfunction execute(a) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a) {\nlet i = 0;\nlet j = a.length - 1;\nwhile (i < j) {\nif (a[i] !== a[j]) {\nreturn false;\n}\ni++;\nj--;\n}\nreturn true;\n}'
    },
    {
        id: 10,
        name: 'Graph Traversal',
        description: 'Write a function that returns the nodes of a graph in the order they were visited',
        mathematicalExample: [
            'a = [[1, 2], [0, 2], [0, 1]]<br/>b = graphTraversal(a)<br/>=> b = [0, 1, 2]',
            'a = [[1, 2], [0, 2], [0, 1, 3], [2]]<br/>b = graphTraversal(a)<br/>=> b = [0, 1, 2, 3]',
            'a = [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3]]<br/>b = graphTraversal(a)<br/>=> b = [0, 1, 2, 3, 4]',
            'a = [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4]]<br/>b = graphTraversal(a)<br/>=> b = [0, 1, 2, 3, 4, 5]',
            'a = [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4, 6], [5]]<br/>b = graphTraversal(a)<br/>=> b = [0, 1, 2, 3, 4, 5, 6]',
            'a = [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6]]<br/>b = graphTraversal(a)<br/>=> b = [0, 1, 2, 3, 4, 5, 6, 7]',
            'a = [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7]]<br/>b = graphTraversal(a)<br/>=> b = [0, 1, 2, 3, 4, 5, 6, 7, 8]'
        ],
        difficulty: 3,
        tags: ['graph'],
        tests: [
            {a: [[1, 2], [0, 2], [0, 1]], expected: [0, 1, 2]},
            {a: [[1, 2], [0, 2], [0, 1, 3], [2]], expected: [0, 1, 2, 3]},
            {a: [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3]], expected: [0, 1, 2, 3, 4]},
            {a: [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4]], expected: [0, 1, 2, 3, 4, 5]},
            {a: [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4, 6], [5]], expected: [0, 1, 2, 3, 4, 5, 6]},
            {a: [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6]], expected: [0, 1, 2, 3, 4, 5, 6, 7]},
            {
                a: [[1, 2], [0, 2], [0, 1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7]],
                expected: [0, 1, 2, 3, 4, 5, 6, 7, 8]
            },
        ],
        baseCode: `// Do not change this method \nfunction execute(a) {\n// Write your code here and return the value\n}`,
        solution: '\n' +
            'function execute(a){\n' +
            '    const visited = new Set();\n' +
            '\n' +
            '    const dfs = (node)  => {\n' +
            '        visited.add(node);\n' +
            '\n' +
            '        for (const neighbor of a[node]) {\n' +
            '            if (!visited.has(neighbor)) {\n' +
            '                dfs(neighbor);\n' +
            '            }\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    for (let i = 0; i < a.length; i++) {\n' +
            '        if (!visited.has(i)) {\n' +
            '            dfs(i);\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    return Array.from(visited);\n' +
            '}'
    },
    {
        id: 11,
        name: 'Dijkstra\'s Algorithm',
        description: 'Write a function that returns the shortest path between two nodes in a graph',
        mathematicalExample: [
            'a = [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]]<br/>b = dijkstra(a, 0, 4)<br/>=> b = [0, 1, 2, 4]',
            'a = [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]]<br/>b = dijkstra(a, 0, 3)<br/>=> b = [0, 1, 3]',
            'a = [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]]<br/>b = dijkstra(a, 0, 2)<br/>=> b = [0, 1, 2]',
            'a = [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]]<br/>b = dijkstra(a, 0, 1)<br/>=> b = [0, 1]'
        ],
        difficulty: 4,
        tags: ['graph'],
        tests: [
            {
                a: [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]],
                start: 0,
                end: 4,
                expected: [0, 1, 2, 4]
            },
            {
                a: [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]],
                start: 0,
                end: 3,
                expected: [0, 1, 3]
            },
            {
                a: [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]],
                start: 0,
                end: 2,
                expected: [0, 1, 2]
            },
            {
                a: [[0, 1, 1, 0, 0], [1, 0, 1, 1, 0], [1, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 1, 1, 0]],
                start: 0,
                end: 1,
                expected: [0, 1]
            },
        ],
        baseCode: `// Do not change this method \nfunction execute(a, start, end) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a, start, end) {\nconst visited = [];\nconst queue = [];\nconst path = [];\nqueue.push({node: start, path: [start]});\nwhile (queue.length > 0) {\nconst {node, path} = queue.shift();\nif (node === end) {\nreturn path;\n}\nif (!visited.includes(node)) {\nvisited.push(node);\na[node].forEach((neighbor, index) => {\nif (neighbor === 1) {\nqueue.push({node: index, path: [...path, index]});\n}\n});\n}\n}\nreturn [];\n}'
    },
    {
        id: 12,
        name: 'Octree Compression',
        description: 'Write a function that compresses a 3D array into an octree',
        mathematicalExample: [
            'a = [\n[[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]],\n[[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]],\n[[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]],\n[[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]]\n]\n\nb = octreeCompress(a)\n\n=> b = {\n  value: 0,\n  children: [\n    {\n      value: 0,\n      children: [\n        {\n          value: 0,\n          children: [\n            {\n              value: 0\n            },\n            {\n              value: 1\n            }\n          ]\n        },\n        {\n          value: 0,\n          children: [\n            {\n              value: 0\n            },\n            {\n              value: 1\n            }\n          ]\n        }\n      ]\n    },\n    {\n      value: 0,\n      children: [\n        {\n          value: 0,\n          children: [\n            {\n              value: 0\n            },\n            {\n              value: 1\n            }\n          ]\n        },\n        {\n          value: 0,\n          children: [\n            {\n              value: 0\n            },\n            {\n              value: 1\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}',
        ],
        difficulty: 4,
        tags: ['octree'],
        tests: [
            {
                a: [[[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]], [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]], [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]], [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]]],
                expected: {
                    value: 0,
                    children: [{
                        value: 0,
                        children: [{value: 0, children: [{value: 0}, {value: 1}]}, {
                            value: 0,
                            children: [{value: 0}, {value: 1}]
                        }]
                    }, {
                        value: 0,
                        children: [{value: 0, children: [{value: 0}, {value: 1}]}, {
                            value: 0,
                            children: [{value: 0}, {value: 1}]
                        }]
                    }]
                }
            },
            {
                a: [[[2, 1, 2, 2], [2, 1, 2, 2], [1, 1, 1, 2], [2, 1, 2, 2]], [[2, 1, 2, 2], [2, 1, 2, 2], [1, 1, 1, 2], [2, 1, 2, 2]], [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], [[2, 1, 2, 2], [2, 1, 2, 2], [1, 1, 1, 2], [2, 1, 2, 2]]],
                expected: {
                    value: 2,
                    children: [{
                        value: 1,
                        children: [{value: 2, children: [{value: 2}, {value: 2}]}, {
                            value: 2,
                            children: [{value: 2}, {value: 2}]
                        }]
                    }, {
                        value: 1,
                        children: [{value: 1, children: [{value: 1}, {value: 1}]}, {
                            value: 1,
                            children: [{value: 1}, {value: 1}]
                        }]
                    }]
                }
            },
        ],
        baseCode: `// Do not change this method \nfunction execute(a) {\n// Write your code here and return the value\n}`,
        solution: 'function execute(a) {\nconst value = a[0][0][0];\nconst same = a.every((plane) => plane.every((row) => row.every((cell) => cell === value)));\nif (same) {\nreturn {value};\n}\nreturn {\nvalue,\nchildren: [\n{\nchildren: [\n{\nchildren: [{value: a[0][0][0]}, {value: a[0][0][1]}],\n},\n{\nchildren: [{value: a[0][1][0]}, {value: a[0][1][1]}],\n},\n],\n},\n{\nchildren: [\n{\nchildren: [{value: a[1][0][0]}, {value: a[1][0][1]}],\n},\n{\nchildren: [{value: a[1][1][0]}, {value: a[1][1][1]}],\n},\n],\n},\n],\n};\n}'
    }
]

export default Exercices
