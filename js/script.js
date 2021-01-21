//Main
navBar();
setDate();

//FUNCTIONS
function setDate() {
    var showDate = document.getElementById('date');
    var date = new Date();
    var year =  date.getFullYear();

    showDate.innerHTML = year;
}

function navBar()
{
    var burger = document.getElementsByClassName('burger');
    var nav = document.querySelector('nav ul');
    var line1 = document.querySelector('.line1');
    var line2 = document.querySelector('.line2');
    var line3 = document.querySelector('.line3');

    for(var i = 0; i < burger.length; i++)
        burger[i].addEventListener('click', () => {
            nav.classList.toggle('burgerClicked');
            
            //for animating burger icon
            line1.classList.toggle('changeLine1');
            line2.classList.toggle('changeLine2');
            line3.classList.toggle('changeLine3');

            document.body.classList.toggle('burgerCBody');
        });
}