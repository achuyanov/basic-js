const CustomError = require("../extensions/custom-error");
module.exports = function calculateHanoi(num, speed) {
    let turns = 2 ** num -1;
    let turnSpeed = speed / 3600;
    return {
        turns: turns,
        seconds: Math.floor(turns/turnSpeed),
    };
};
