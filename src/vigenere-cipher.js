class VigenereCipheringMachine {
    
    constructor( direct = true ){
        this.table = new Array(26).fill(new Array(26).fill('').map((v,i) =>String.fromCharCode(65+i))).map((a,i)=> a.slice(i).concat(a.slice(0,i)));
        this.direct = direct;  
    }
    
    createKeyString(str,key) {
        return key.repeat(Math.ceil(str.length/key.length));
    } 

    encrypt(str, key, isDirect) {
        throw 'Not implemented';
        // remove line with error and write your code here
    }

    decrypt(str, key, isDirect) {
        throw 'Not implemented';
        // remove line with error and write your code here
    }

    crypt(input, key, isDirect)
}

module.exports = VigenereCipheringMachine;
