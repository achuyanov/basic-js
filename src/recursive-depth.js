module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return !Array.isArray(arr)? 0 : arr.reduce((depth, cur) => Math.max(this.calculateDepth(cur), depth), 0) + 1;
    }
};