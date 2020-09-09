const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {

    constructor(direct = true) {
        this.table = new Array(26).fill(new Array(26).fill('').map((v, i) => i)).map((a, i) => a.slice(i).concat(a.slice(0, i)));
        this.direct = direct;
    }

    _createKeyString(str, key) {
        let ret = key.repeat(Math.ceil(str.length / key.length));
        for (let pos in str) {
            ret = (!str[pos].match(/[A-Z]/gi)) ? ret.substring(0, +pos) + '_' + ret.substring(+pos) : ret;
        }
        return ret;
    }

    _stringToNumberArray(str) {
        return str.toUpperCase().split('').map(v => v.charCodeAt(0) - 65);
    }

    _numberArrayToString(arr) {
        return arr.map(v => String.fromCharCode(65 + v)).join('');
    }

    _isChar(num) {
        return (num >= 0 && num < 26);
    }

    encrypt(str, key) {
        let strArr = this._stringToNumberArray(str);
        let keyArr = this._stringToNumberArray(this._createKeyString(str, key));
        let ret = strArr.map((v, i) => this._isChar(v) ? this.table[keyArr[i]][v] : v);
        if (!this.direct) ret = ret.reverse();
        return this._numberArrayToString(ret);
    }

    decrypt(str, key) {
        let strArr = this._stringToNumberArray(str);
        let keyArr = this._stringToNumberArray(this._createKeyString(str, key));
        let ret = strArr.map((v, i) => this._isChar(strArr[i]) ? this.table[keyArr[i]].indexOf(v) : v);
        if (!this.direct) ret = ret.reverse();
        return this._numberArrayToString(ret);
    }

}

module.exports = VigenereCipheringMachine;