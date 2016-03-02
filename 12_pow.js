/**
 * Created by allenbklj on 3/1/16.
 */

var lastDigit = function(str1, str2){
    var result = Math.pow(str1,str2).toString();
    var length = result.length;
    console.log(result);
    return result.charAt(length-1);
};

//console.log(lastDigit('10','10000000000'));

function digit(str1,str2){
    var a = str1.slice(-1)%10;
    var b = str2.slice(-2)%4 || 4;
    //console.log('a:' + a);
    //console.log('b:'+b);
    //console.log(+!+str2);
    return +!+str2 || Math.pow(a,b) % 100;
}

console.log(digit('324','7699'));
console.log(digit('22','0'));