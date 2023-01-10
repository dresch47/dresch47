
let n = 1;

function changePicture() {
    let changePictureSection = document.querySelector('.section1');
    if (n < 4) {
        changePictureSection.style.backgroundImage = "url('assets/images/lacatelli/banner-locatelli-" + n + ".jpg')";
        changePictureSection.style.transition = 'all ease 1.3s';
        n++;
    } else {
        n = 1;
    }
}

setInterval(changePicture, 3000);

/*MENU NAV*/

document.querySelector('.barra').addEventListener('click', (item)=>{
console.log(item.target);
});


/*SECTION 3*/
let btnBlog = document.querySelector('.sect3--btn--blog');
let btnAccess = document.querySelector('.btn--access');
let btnArrow = document.querySelector('.btn--arrow');
btnBlog.addEventListener('mouseover', function () {

    btnArrow.style.backgroundColor = '#fa461a';
    btnArrow.style.transitionProperty = 'all ease 0.8s';
    btnArrow.style.color = 'white';
    btnArrow.style.borderLeft = '1px solid white';


});

btnBlog.addEventListener('mouseout', function () {

    btnArrow.style.backgroundColor = 'white';
    btnArrow.style.transition = 'all ease 0.8s';
    btnArrow.style.color = '#fa461a';

});

/*SECTION 4*/

let sect4BtnBlog = document.querySelector('.sect4--btn--blog');
let sect4BtnAccess = document.querySelector('.sect4--btn--access');
let sect4BtnArrow = document.querySelector('.sect4--btn--arrow');
sect4BtnBlog.addEventListener('mouseover', function () {

    sect4BtnArrow.style.backgroundColor = '#fa461a';
    sect4BtnArrow.style.transition = 'all ease 0.8s';
    sect4BtnArrow.style.color = 'white';
    sect4BtnArrow.style.borderLeft = '1px solid white';


});

sect4BtnBlog.addEventListener('mouseout', function () {

    sect4BtnArrow.style.backgroundColor = 'white';
    sect4BtnArrow.style.transition = 'all ease 0.8s';
    sect4BtnArrow.style.color = '#fa461a';

});


let anime = document.querySelectorAll('[data-animate]');
let animation = 'animate';
let menuNav = document.querySelector('.menu--nav');


function fixed() {
    let teste = window.scrollY;
    if (teste > menuNav.offsetHeight + 30) {
        menuNav.style.position = 'fixed';
        

    }
}

function animeScroll() {
    let windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    anime.forEach(function (elem) {
        if (windowTop >= elem.offsetTop) {
            elem.classList.add(animation);

        } else {
            elem.classList.remove(animation);
        }

    });

}

animeScroll();

if (anime.length) {
    window.addEventListener('scroll', function () {

        fixed();
        animeScroll();
    });
}
