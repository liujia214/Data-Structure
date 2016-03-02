/**
 * Created by allenbklj on 12/3/15.
 */
var a = {address:{street:'lao',code:33},hello:function(){alert('hey')},hi:NaN};
var b = {address:{street:'lao',code:33},hello:function(){alert('hey')},hi:NaN};


function compare(a,b){
    if(a === b) return true;
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    for( i in a){
        if(valueIsNaN(a[i]) || typeof a[i] === 'undefined'){
            aProps.splice(aProps.indexOf(i),1);
        }
    }
    for( i in b){
        if(valueIsNaN(b[i]) || typeof b[i] === 'undefined'){
            bProps.splice(bProps.indexOf(i),1);
        }
    }
    if(aProps.length != bProps.length){
        return false;
    }
    for(var i =0;i<aProps.length;i++){
        if(bProps.indexOf(aProps[i]) != -1){
            if(typeof a[aProps[i]] === 'object'){
                if(!compare(a[aProps[i]],b[aProps[i]])) return false;
            }else if(typeof a[aProps[i]] === 'function'){
                if(a[aProps[i]].toString() !== b[aProps[i]].toString()) return false;
            }else{
                if(a[aProps[i]] !== b[aProps[i]]) return false;
            }
        }else{
            return false;
        }
    }
    return true;
}

function valueIsNaN(v){
    return v !== v;
}
console.log(compare(a,b));