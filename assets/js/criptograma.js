 let obj_attributes = [{
     "image/C.png": 'C',
     "image/U.png": 'U',
     "image/E.png": 'E',
     "image/A.png": 'A',
     "image/R.png": 'R',
     "image/S.png": 'S',
     "image/B.png": 'B',
     "image/D.png": 'D',
     "image/F.png": 'F',
     "image/O.png": 'O',
     "image/V.png": 'V',
     "image/N.png": 'N',
     "image/L.png": 'L',
     "image/M.png": 'M',
     "image/Q.png": 'Q',
     "image/P.png": 'P',
     "image/X.png": 'X',
     "image/T.png": 'T',
     "image/G.png": 'G',
     "image/I.png": 'I',
     "image/H.png": 'H',
     "image/J.png": 'J',
     "image/Z.png": 'Z',
     "image/W.png": 'W',
 }];

 let input_teste = document.querySelectorAll('input');
 let letra_key = document.querySelectorAll('#letra-key');


 input_teste.forEach((element, index) => {
     element.addEventListener('keyup', (e) => {
         e.preventDefault();
         let input_letter = e.key.toUpperCase();
         let previous_tag = element.previousElementSibling.getAttribute('src');
         obj_attributes.forEach((item, index) => {
             if (item[previous_tag] == input_letter) {
                 console.log(item[`image/${input_letter}.png`]);
                 element.disabled = true;
             } else {
                 element.disabled = false;
             }
         });
         letra_key.forEach((item, index) => {
             //console.log(item);

         });

     })
 });