"use strict"
let bt=document.querySelector('.switcher');
let bt1= document.querySelector('#bt');
let mail=document.querySelector("#mail");
let body= document.querySelector("body");
let image= document.getElementById("img-caroussel");
let pseudo=document.querySelector("#pseudo");
let mdp=document.querySelector("#mdp");
let bt2=document.getElementById("submitBtn");







// menu burger //

document.addEventListener('DOMContentLoaded', function() {
    //Obtient les références de l'Ic^ne du Menu Burger et du Menu de Navigation
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');

    //Ajout un écouteur d'événement au clic sur l'Icône du Menu Burger
    burgerIcon.addEventListener('click', function() {
        //Bascule la classe 'active' pour afficher/masquer le Menu de Navigation
        menu.classList.toggle('active');
    });
});


// dark mode //

function dark(){
    body.classList.toggle("dark")
}
bt.addEventListener('click',dark)


// formulaire //

function check(e){
    e.preventDefault()
    console.log(pseudo.value);
    console.log(mdp.value);
    console.log(mail.value);

}
bt2.addEventListener('click',check)
let p5=document.querySelectorAll('p');
console.log(p5);





// regex //

function validatePassword(){

    let passwordError = document.getElementById('mdpError');

    let passwordRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

    if (passwordRegex.test(mdp.value) && mdp.value.length >=8 ) {
        passwordError.textContent = ''; 
    } else {
        passwordError.textContent = 'Le mot de passe doit contenir au  moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.';
    }
    
}
mdp.addEventListener('input', validatePassword)


// caroussel // autre façon de faire

//function tourneImage(){
//     let monImage=document.getElementById("img-caroussel").getAttribute('src');
    
//     switch(monImage){
//        case 'img/mbulbizarre.jpg':
//             document.getElementById('img-caroussel').src='img/mcarapuce.jpg';
//             break;
//         case 'img/mcarapuce.jpg':
//             document.getElementById('img-caroussel').src='img/msalameche.jpg';
//             break;
//         case 'img/msalameche.jpg':
//             document.getElementById('img-caroussel').src='img/mbulbizarre.jpg';
//             break;
       
//         }
// }


// image.addEventListener('click',tourneImage);
// console.log(bt);




