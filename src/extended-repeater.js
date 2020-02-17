module.exports = function repeater(str, options) {
    let  addition =  (options.addition===undefined) ? '': String(options.addition);
    const [ initStr,
            repeatTimes,
            separator,
            additionRepeatTimes,
            additionSeparator ] =
            [   String(str),
                options.repeatTimes || 1,
                options.separator || '+',
                options.additionRepeatTimes || 1,
                options.additionSeparator || '|'];

    let additionString = strRepeat(String(addition), additionSeparator, additionRepeatTimes);
    return  strRepeat(initStr + additionString, separator, repeatTimes);  
};

function strRepeat (st, sep, num) {
    return new Array(num).fill(st).join(sep);
}


  