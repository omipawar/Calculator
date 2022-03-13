function clr(){
    document.getElementById('disp').innerHTML = "";
}

function cal(ctrl){    
    let num = ctrl.innerHTML;
    console.log(num);
    document.getElementById('disp').innerHTML += num;
    
}

function calculation(){
    let data = document.getElementById('disp').innerHTML ;
    let res = eval(data);
    console.log(res)
    document.getElementById('disp').innerHTML = res;
}

back = () =>{
    let get = document.getElementById('disp').innerHTML;
    console.log(get);
    let res = get.substr(0, get.length - 1);
    document.getElementById('disp').innerHTML = res;
}
