/**
 * Created by allenbklj on 12/4/15.
 */
function asy(search,callback){
    var x = new XMLHttpRequest();
    x.open('GET','https://api.github.com/search/repositories?q='+search);
    x.send();
    x.addEventListener('readystatechange',function(){
        if(x.readyState === 4){
            if(x.status === 200){
                callback(null, x.responseText);
            }else{
                callback(x.responseText,null);
            }
        }
    })
}


function createPromise(search){
    return new Promise(function(resolve,reject){
        asy(search,function(err,result){
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    });
}

var task = ['nodejs','angularjs'];
//var promise = createPromise('nodejs');
//promise.then(function(data){
//    console.log(data);
//});

var a = task.map(function(ele){
    return createPromise(ele)
});

Promise.all(a).then(function(){
    console.log(arguments);
});