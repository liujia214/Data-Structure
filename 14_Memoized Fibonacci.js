/**
 * Created by allenbklj on 3/1/16.
 */
var cache = {};
var fibonacci = function(n) {
    if(n in cache){
        //console.log('from cache');
        return cache[n];
    }else{
        console.log('calculate');
        if(n==0 || n == 1)
            return cache[n] = n;
        return cache[n] = fibonacci(n-1) + fibonacci(n-2);
    }
};

console.log(fibonacci(70));
console.log(fibonacci(8));