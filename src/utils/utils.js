const ALPHA = 'ABCDEFGHIJ';
function randomColor() {
    let x = function () {
        return Math.floor(Math.random() * 256);
    };
    return 'rgb(' + x() + ',' + x() + ',' + x() + ')';
}

const DEFAULT_PROCESSES = [
    {
        id: 0,
        name: 'A',
        bursttime: 10,
        insertion: 0,
        color: 'rgb(221,47,84)',
        priority: 0,
    },
    {
        id: 1,
        name: 'B',
        bursttime: 15,
        insertion: 2,
        color: 'rgb(6,160,188)',
        priority: 1,
    },
    {
        id: 2,
        name: 'C',
        bursttime: 12,
        insertion: 6,
        color: 'rgb(255,255,103)',
        priority: 2,
    },
    {
        id: 3,
        name: 'D',
        bursttime: 25,
        insertion: 5,
        color: 'rgb(219,138,36)',
        priority: 3,
    },
    {
        id: 4,
        name: 'E',
        bursttime: 40,
        insertion: 4,
        color: 'rgb(235,140,218)',
        priority: 4,
    },
    {
        id: 5,
        name: 'F',
        bursttime: 5,
        insertion: 9,
        color: 'rgb(188,151,126)',
        priority: 5,
    },
    {
        id: 6,
        name: 'G',
        bursttime: 16,
        insertion: 8,
        color: 'rgb(137,207,99)',
        priority: 6,
    },
    {
        id: 7,
        name: 'H',
        bursttime: 20,
        insertion: 7,
        color: 'rgb(197,200,202)',
        priority: 7,
    },
    {
        id: 8,
        name: 'I',
        bursttime: 35,
        insertion: 3,
        color: 'rgb(58,142,243)',
        priority: 8,
    },
    {
        id: 9,
        name: 'J',
        bursttime: 1,
        insertion: 1,
        color: 'rgb(66,207,147)',
        priority: 9,
    },
];

export { randomColor, ALPHA, DEFAULT_PROCESSES };
