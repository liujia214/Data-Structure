/**
 * Created by allenbklj on 12/3/15.
 */

factorial.cache = {1:1};
function factorial(n){
    if(n in factorial.cache){
        return factorial.cache[n];
    }else{
        if(n>1){
            factorial.cache[n] = factorial(n-1) * n;
            return factorial.cache[n];
        }
    }
}
console.log(factorial(3));
console.log(factorial(4));