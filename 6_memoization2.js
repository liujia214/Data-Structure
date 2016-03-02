/**
 * Created by allenbklj on 12/4/15.
 */
function memo(fn){
    fn.cache = {};
    return function(){
        var a = Array.prototype.slice.call(arguments);
        if(a in fn.cache){
            console.log('old');
            return fn.cache[a];
        }else{
            console.log('new');
            fn.cache[a] = fn.apply(null,arguments);
            return fn.apply(null,arguments);
        }
    }
}

function sum(x,y){
    return x+y;
}

var summ = memo(sum);
console.log(summ(1,2));
console.log(summ(1,2));