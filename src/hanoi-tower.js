module.exports = function calculateHanoi(num, speed) {
    return {
        turns: 2 ** num  - 1 ,
        seconds: Math.floor((2 ** num) / (speed / 3600)),
    };
};
