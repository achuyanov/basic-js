const chainMaker = {
  arr:[],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push (`( ${value} )`);
    //console.log(value);
    return this;
  },

  removeLink(pos) {
    if ( (typeof (pos) != 'number') || (pos-1 < 0) || (pos-1 >= this.getLength()) ) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(pos - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    let ret = this.arr.join('~~');
    this.arr = [];
    return ret;
  }
};

module.exports = chainMaker;

/*
let a = chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();

console.log(a);*/