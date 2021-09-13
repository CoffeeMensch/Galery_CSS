let wheel = 0;

let array_div_left = document.getElementsByClassName('div_left');
let div_left = array_div_left[0];

let array_div_right = document.getElementsByClassName('div_right');
let div_right = array_div_right[0];

let body = document.getElementById('body');
body.addEventListener("wheel", onWheelLeft);

function onWheelLeft(e) {
    console.log(div_left.style.marginTop);

    if(div_left.style.marginTop=="") {
        div_left.style.marginTop = 259+e.deltaY + "px";
        div_left.style.marginLeft = -206+e.deltaY + "px";
    }else {
        div_left.style.marginTop = parseInt(div_left.style.marginTop) - e.deltaY + "px";
        div_left.style.marginLeft = parseInt(div_left.style.marginLeft) + e.deltaY + "px";
    }

    if(div_right.style.marginTop=="") {
        div_right.style.marginTop = 318+e.deltaY + "px";
        div_right.style.marginLeft = -389+e.deltaY + "px";
    }else {
        div_right.style.marginTop = parseInt(div_right.style.marginTop) + e.deltaY + "px";
        div_right.style.marginLeft = parseInt(div_right.style.marginLeft) - e.deltaY + "px";
    }
}


/*function onWheelRight(e) {
    console.log(div_right.style.marginTop);

    if(div_right.style.marginTop=="") {
        div_right.style.marginTop = 318+e.deltaY + "px";
        div_right.style.marginLeft = -389+e.deltaY + "px";
    }else {
        div_right.style.marginTop = parseInt(div_right.style.marginTop) - e.deltaY + "px";
        div_right.style.marginLeft = parseInt(div_right.style.marginTop) - e.deltaY + "px";
    }
}*/


