var menu = document.getElementById('drop')

function togglemenu(){
    menu.classList.toggle('active')
}

var btn = document.querySelector('.btn1')

function animation(){

    btn.classList.toggle('animate')

}

setInterval(animation,2000)
