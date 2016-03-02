/**
 * Created by allenbklj on 12/4/15.
 */
for(var i = 0;i<5;i++){
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button' + i));
    btn.addEventListener('click',function(){
        console.log(i);
    });
    document.body.appendChild(btn);
}