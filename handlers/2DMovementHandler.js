var movement = {
    up:false,
    down:false,
    left:false,
    right:false
}

var controls = {
    up:90,
    down:83,
    left:81,
    right:68
}

document.addEventListener('keydown',(e)=>{
    switch(e.keyCode){
        case controls.left:
            movement.left = true;
            break;
        case controls.right:
            movement.right = true;
            break;
        case controls.up:
            movement.up = true;
            break;
        case controls.down:
            movement.down = true;
            break;
    }
})

document.addEventListener('keyup',(e)=>{
    switch(e.keyCode){
        case controls.left:
            movement.left = false;
            break;
        case controls.right:
            movement.right = false;
            break;
        case controls.up:
            movement.up = false;
            break;
        case controls.down:
            movement.down = false;
            break;
    }
})

console.log(movement)