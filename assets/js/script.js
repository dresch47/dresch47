
let qs = (el) => document.querySelector(el);
let qsa = (el) => document.querySelectorAll(el);



/* TOGGLE MENU*/
let closed = qs('.tudo');
let menuToggle = qs('.bar');
let sideLeft = qs('.header--left');
let asideMenu = qs('.header--aside');
let t = true;

menuToggle.addEventListener('click', () => {

    if (t) {
        asideMenu.style.display = 'block';
        t = false;
    } else {
        asideMenu.style.display = 'none';
        t = true;
    }


});



/*  PICTURE AREA*/

let i_img1 = qs('.i--img1');

let i_img3 = qs('.i--img3');
let areaDiv = qs('.area--modal--grid');
let modal = qs('.picture--grid');
let areaX = qs('.area--append');
let container_modal = qs('.container');

let darkScroll = qs('.dark2');
let result1 = qs('.result--experience');
let result2 = qs('.result--webpage');
let result3 = qs('.result--apps');
let result4 = qs('.result--appsTouch');
let result5 = qs('.result--stores');
let result6 = qs('.result--employees');


areaX.addEventListener('click', () => {
    areaDiv.style.display = 'none';
    i_img1.style.display = 'block';
    
     i_img3.style.display = 'block';
});

let activate = qs('.header--left >ul > li');

let classLi = qs('.header--left ul li').classList;

activate.addEventListener('click', () => {
    if (classLi[0] == 'active') {
        activate.classList.remove('active');
    }

});

let arrowUp = qs('.arrow--above1');
let arrowUp2 = qs('.arrow--above2');
let arrowDown = qs('.arrow--bellow1');
let arrowDown2 = qs('.arrow--bellow2');


let changeImg = 1;
arrowUp.addEventListener('click', () => {
    if (changeImg = 1) {
        i_img1.style.backgroundImage = 'url("images/tiraRoupa/interaktiver_usecase_camel_activ_' + (changeImg) + '.jpg")';

alert('clicado');
    } else {
alert('clicado tambel');
        i_img1.style.backgroundImage = 'url("images/tiraRoupa/interaktiver_usecase_camel_activ_' + (changeImg - 1) + '.jpg")';
        changeImg--;
    }
});


arrowDown.addEventListener('click', () => {
    if (changeImg < 68) {
        i_img1.style.backgroundImage = 'url("images/tiraRoupa/interaktiver_usecase_camel_activ_' + (changeImg + 1) + '.jpg")';
        changeImg++;
    } else {
        return false;

    }
});


/* DARK2 - DATA INFORMATIONS IN NUMBERS */

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;



let dark2 = qs('.dark2');

window.document.addEventListener('scroll', () => {

    let sizeDark2 = dark2.getBoundingClientRect();

    if (sizeDark2.y < 1) {
        contNumbers();
    }

});

function contNumbers() {
    function contA() {
        if (a < 12) {
            result1.innerHTML = a + 1;
            a++;
        } else {
            clearInterval(stopContA);
        }
    }
    let stopContA = setInterval(contA, 200);

    function contB() {
        if (b < 359) {
            result2.innerHTML = b + 1;
            b++;
        } else {
            clearInterval(stopContB);
        }
    }
    let stopContB = setInterval(contB, 6.68);

    function contC() {
        if (c < 87) {
            result3.innerHTML = c + 1;
            c++;
        } else {
            clearInterval(stopContC);
        }
    }
    let stopContC = setInterval(contC, 27.58);

    function contD() {
        if (d < 287) {
            result4.innerHTML = d + 1;
            d++;
        } else {
            clearInterval(stopContD);
        }
    }
    let stopContD = setInterval(contD, 8.36);

    function contE() {
        if (e < 23) {
            result5.innerHTML = e + 1;
            e++;
        } else {
            clearInterval(stopContE);
        }
    }
    let stopContE = setInterval(contE, 104.34);

    function contF() {
        if (f < 17) {
            result6.innerHTML = f + 1;
            f++;
        } else {
            clearInterval(stopContF);
        }
    }
    let stopContF = setInterval(contF, 141.17);

}

/*INSERT NOTIFICATION IN GRID*/

i_img1.addEventListener('mouseover', () => {   
    areaDiv.style.display = 'block'; 
           
});










