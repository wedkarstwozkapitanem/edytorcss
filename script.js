document.querySelector('main').contentEditable = "true";


var liczbaelementow = 0; //liczba tresci
var gdzie = "#tresc_strony";
function dodajstyl(opcja, px) {
    document.getElementById(opcja).addEventListener('change', function () {
        if (px == 'p') {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value + 'px';
        } else {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value
        }
        wypiszkod();
    });
}

function wypiszkod() {
    if (document.getElementById('tresc_strony').innerHTML != '' && typeof (document.getElementById('tresc_strony')) != undefined) {
        document.getElementById('kod').value = document.querySelector('main').innerHTML;
    } else {
        edytowaniekody();
    }
}
function edytowaniekody() {
    document.querySelector('main').innerHTML = document.getElementById('kod').value;
}


dodajstyl('background');
dodajstyl('color')
dodajstyl('fontSize', 'p');
dodajstyl('fontFamily');
dodajstyl('fontWeight');
dodajstyl('textAlign');
dodajstyl('borderRadius', 'p');
dodajstyl('letterSpacing', 'p');
dodajstyl('marginTop', 'p');
dodajstyl('marginLeft', 'p');
dodajstyl('padding', 'p');
wypiszkod();


function odtworz() {
    document.querySelector('main').innerHTML = '<div id="tresc_strony" style="background: black;font-size: 104px;color:#ffff00;font-family: cursive;font-weight: 900;text-align: center;">';
}

function cien(co) {
    document.querySelector(gdzie).style[co] = `${document.getElementById('x').value}px ${document.getElementById('y').value}px ${document.getElementById('r').value}px ${document.getElementById('c').value}`;
    wypiszkod();
}
function border() {
    document.querySelector(gdzie).style.border = `${document.getElementById('border_gruboś').value}px ${document.getElementById('border_rodzaj').value} ${document.getElementById('border_kolor').value}`;
    wypiszkod();
}
function nowyelementw() {
    let nowyelement = document.createElement('div');
    nowyelement.classList = gdzie + i;
    document.querySelector(gdzie).appendChild(nowyelement);
    wypiszkod();
    i++;
}

function nowyelement() {
    let nowyelement = document.createElement('div');
    nowyelement.id = 'tresc_strony' + liczbaelementow;
    nowyelement.innerText = "Tutaj nowa treść";
    nowyelement.style.position = "relative";
    nowyelement.style.fontSize = "48px";
    document.querySelector('main').appendChild(nowyelement);
    wypiszkod();
    gdzie = '#tresc_strony' + liczbaelementow;
   

    for (i = 0; i < document.querySelectorAll('input').length; i++) {
        if (document.querySelectorAll('input')[i].type == "number") {
            document.querySelectorAll('input')[i].value = '0';
            document.getElementById('fontSize').value = "48";
            document.getElementById('textAlign').value = "left";
        }
    }
    ktoryelement();


   liczbaelementow = parseFloat(liczbaelementow) + parseFloat(1);
}



ktoryelement();

function ktoryelement() {
    document.querySelector(gdzie).addEventListener('click', function (p) {
        gdzie = '#' + p.path[0].attributes[0].value;
    })
}





function pobieraniestylowcss(styl) {
   document.getElementById(styl).value = document.getElementById(gdzie.substr(1)).style[styl];
}


function pobierzaznaczonytekst() {
   let html =  document.querySelector('main').innerHTML;
   let zaznaczonytekst = window.getSelection();
   console.log(zaznaczonytekst);
}




function zmienmenu() {
    pobieraniestylowcss('background');
    pobieraniestylowcss('color')
    pobieraniestylowcss('fontSize', 'p');
    pobieraniestylowcss('fontFamily');
    pobieraniestylowcss('fontWeight');
    pobieraniestylowcss('textAlign');
    pobieraniestylowcss('borderRadius', 'p');
    pobieraniestylowcss('letterSpacing', 'p');
    pobieraniestylowcss('marginTop', 'p');
    pobieraniestylowcss('marginLeft', 'p');
    pobieraniestylowcss('padding', 'p');
    wypiszkod();
}
