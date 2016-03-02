/**
 * Created by allenbklj on 3/1/16.
 */
function meters(x){
    var count = 0;
    var prefix = ['m','km','Mm','Gm','Tm','Pm','Em','Zm','Ym'];

    while(x >= 1000){
        count ++;
        x /= 1000;
    }
    return x + prefix[count];
}

console.log(meters(1999));