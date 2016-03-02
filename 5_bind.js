/**
 * Created by allenbklj on 12/4/15.
 */
var a = [1,2,3,4,5];
var n =4;
var f = (function fn(n,value,index,array){
    return value > n;
}).bind(null,n);

console.log(a.filter(f));
console.log(a);
