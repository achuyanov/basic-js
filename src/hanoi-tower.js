module.exports = function calculateHanoi(num, speed) {
    return {
        turns: 2 ** num  - 1 ,
        seconds: (2 ** num) / (speed / 3600) ,
    };
};