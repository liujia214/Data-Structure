///**
// * Created by allenbklj on 12/4/15.
// */
//for(var i = 0;i<5;i++){
//    setTimeout((function(i){
//        console.log(i);
//    })(i),10000);
//}

for(var i = 0;i<5;i++){
    setTimeout((function(i){
        return function(){
            console.log(i)
        }
    })(i),1000 * i);
}