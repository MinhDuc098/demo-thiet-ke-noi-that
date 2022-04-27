function content(m,a){
 document.getElementsByClassName(a)[0].innerHTML = m;


 
}
function disappear(a){
    document.getElementsByClassName(a)[0].innerHTML = '';
}

function submit(){
   var a = document.getElementsByClassName('text');
   for(var i = 0;i<a.length;i++) a[i].value = '';
    
}


function pleaseCall(b,c,a){
    if(a.innerHTML == c) a.innerHTML = b;
    else a.innerHTML = c;
     
}