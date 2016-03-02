/**
 * Created by allenbklj on 3/1/16.
 */
function sortGiftCode(code){
    //TODO
    var array = [];
    console.log(typeof code);
    if(typeof code === 'string'){
        array = code.split('');
        array.sort();
        console.log(array)
    }
    return array.join('');
}

console.log(sortGiftCode('egeagsg'));