document.querySelector('main').contentEditable = "true";


var liczbaelementow = 2; //liczba tresci;


var gdzie = "#tresc_strony__1";
function dodajstyl(opcja, px) {
    document.getElementById(opcja).addEventListener('change', () => {
        if (px == 'p') {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value + 'px';
        } else if (px == "pr") {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value + '%';
        }  else {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value
        }
        wypiszkod();
    });

    document.getElementById(opcja).addEventListener('keyup', function () {
        if (px == 'p') {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value + 'px';
        } else if (px == "pr") {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value + '%';
        } else {
            document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value
        }
        wypiszkod();
    });

}

function wypiszkod() {
    sprawdzkod();
    if (/*document.getElementById('tresc_strony_').innerHTML != '' &&*/ typeof (document.getElementById('tresc_strony_')) != undefined) {
        document.getElementById('kod').value = document.querySelector('main').innerHTML;
    } else {
        edytowaniekody();
    }
}
function edytowaniekody() {
    document.querySelector('main').innerHTML = document.getElementById('kod').value;
    zmienmenu();
}

window.onload = () => {
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
    dodajstyl('opacity');
    dodajstyl('width', 'pr');
    dodajstyl('height', 'p');

    for (i=1;i<document.querySelectorAll('main div').length;i++) {
        gdzie = '#tresc_strony__' + i;
        ktoryelement();
    }
    zmienid();
    wypiszkod();
}

function odtworz() {
    document.querySelector('main').innerHTML = '<div id="tresc_strony_1" style="background: black;font-size: 104px;color:#ffff00;font-family: cursive;font-weight: 900;text-align: center;">';
}

function cien(co) {
    if (co == "textShadow") {
        document.querySelector(gdzie).style[co] = `${document.getElementById('x').value}px ${document.getElementById('y').value}px ${document.getElementById('r').value}px ${document.getElementById('c').value}`;
    } else if (co == "boxShadow") {
        document.querySelector(gdzie).style[co] = `${document.getElementById('xe').value}px ${document.getElementById('ye').value}px ${document.getElementById('re').value}px ${document.getElementById('ce').value}`;
    }
    wypiszkod();
}
function border() {
    document.querySelector(gdzie).style.border = `${document.getElementById('border_gruboś').value}px ${document.getElementById('border_rodzaj').value} ${document.getElementById('border_kolor').value}`;
    wypiszkod();
}
function nowyelementw() {
    let nowyelementp = document.createElement('div');
    nowyelementp.classList = gdzie + i;
    document.querySelector(gdzie).appendChild(nowyelementp);
    wypiszkod();
    i++;
}

function nowyelement(g) {
    let nowyelementp = document.createElement('div');
    nowyelementp.id = 'tresc_strony_' + liczbaelementow;
    nowyelementp.innerText = "Tutaj nowa treść";
    nowyelementp.style.position = "relative";
    nowyelementp.style.fontSize = "48px";
    if (g == 'p') {
        document.querySelector('main').appendChild(nowyelementp);
    } else {
        document.querySelector(gdzie).appendChild(nowyelementp);
    }
    wypiszkod();
    gdzie = '#tresc_strony_' + liczbaelementow;


    for (i = 0; i < document.querySelectorAll('input').length; i++) {
        if (document.querySelectorAll('input')[i].type == "number") {
            document.querySelectorAll('input')[i].value = '0';
        }
    }
    ktoryelement();

    men();
    zmienid();
}

function men() {
    document.getElementById('fontSize').value = "48";
    document.getElementById('textAlign').value = "left";
    document.getElementById('color').value = '#000000';
    document.getElementById('background').value = '#000000';
    document.getElementById('fontFamily').value = "auto";
    document.getElementById('x').value = "0";
    document.getElementById('y').value = "0";
    document.getElementById('r').value = "0";
    document.getElementById('xe').value = "0";
    document.getElementById('ye').value = "0";
    document.getElementById('re').value = "0";
    document.getElementById('border_gruboś').value = "0";
    liczbaelementow = parseFloat(liczbaelementow) + parseFloat(1);
}

function usunelement() {

    document.querySelector(gdzie).remove();
    document.getElementById('kod').value = document.querySelector('main').innerHTML;
    //  document.querySelector('main').innerHTML = "";
    //  wypiszkod();
    zmienid();

    if (document.querySelector('main').innerHTML == "") {
        nowyelementp = document.createElement('div');
        nowyelementp.id = "tresc_strony_";
        document.querySelector('main').appendChild(nowyelementp);
    }
    sprawdzkod();
    wypiszkod();
    men();
    zmienmenu();
}

ktoryelement();

function ktoryelement() {
    document.querySelector(gdzie).addEventListener('click', function (p) {
        gdzie = '#' + p.path[0].attributes[0].value;
        zmienmenu();
    })
}

function sprawdzkod() {
    if (document.querySelector('main').innerHTML == '' || document.querySelector('main').innerHTML == '\n            \n        ' || gdzie == "tresc_strony__") {
        nowyelementp = document.createElement('div');
        nowyelementp.style.position = "relative";
        nowyelementp.innerText = "Pisz tutaj tekst";
        //     nowyelement.style.width = "100%";
        nowyelementp.id = "tresc_strony__0";
        nowyelementp.style.fontSize = "48px";
        document.querySelector('main').appendChild(nowyelementp);



        zmienid();
        wypiszkod();
        ktoryelement();
    }
}



function pobieraniestylowcss(styl) {
    sprawdzkod();
    let p = document.getElementById(gdzie.substr(1)).style[styl];
    if (p.indexOf('px') != '-1') {
        w = p.slice(0, -2);
        parseFloat(w);
    } else {
        w = p;
    }


    document.getElementById(styl).value = w;

}


function pobierzaznaczonytekst() {
    let html = document.querySelector('main').innerHTML;
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
    pobieraniestylowcss('opacity');
    pobieraniestylowcss('width', 'pr');
    pobieraniestylowcss('height', 'p');
    wypiszkod();
}



function uruchomstrone() {
    document.getElementById('powiekszonastrona').style.display = "block";
    document.getElementById('strona').innerHTML = document.querySelector('main').innerHTML;
    document.location.hash = "strona_powiekszona";
    document.getElementById('powiekszonykod').style.display = "none";
    document.getElementById('edycja').style.display = "none";
    document.querySelector('body').classList.add('usunpasek');
}

function pokazkod() {
    document.getElementById('powiekszonastrona').style.display = "none";
    document.getElementById('powiekszonykod').style.display = "block";
    document.getElementById('kodpowieksz').value = document.querySelector('main').innerHTML;
    document.location.hash = "kod_zrodlowy";
    document.getElementById('edycja').style.display = "none";
    document.querySelector('body').classList.add('usunpasek');
}


function wypiszkodpow() {
    document.querySelector('main').innerHTML = document.getElementById('kodpowieksz').value;
    document.getElementById('kod').value = document.getElementById('kodpowieksz').value;
    wypiszkod();
    zmienmenu();
}



function zamknijstrone(co) {
    document.getElementById(co).style.display = 'none'
    document.location.hash = "edytuj";
    document.getElementById('edycja').style.display = "block";
    document.querySelector('body').classList.remove('usunpasek');
}








function zmienid() {
    liczbaelementow = document.querySelectorAll('main div').length;
    for (i = 0; i < liczbaelementow; i++) {
        let ktory = parseFloat(i) + parseFloat(1);
        document.querySelectorAll('main div')[i].id = "tresc_strony__" + ktory;


        document.querySelectorAll('main div')[i].addEventListener('change', () => {
            if (px == 'p') {
                document.querySelectorAll('main div')[i].style[opcja] = document.getElementById(opcja).value + 'px';
            } else {
                document.querySelectorAll('main div')[i].style[opcja] = document.getElementById(opcja).value
            }
            wypiszkod();
        });

        document.querySelectorAll('main div')[i].addEventListener('keyup', () => {
            if (px == 'p') {
                document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value + 'px';
            } else {
                document.querySelector(gdzie).style[opcja] = document.getElementById(opcja).value
            }
            wypiszkod();
        });
    }
    liczbaelementow = parseFloat(liczbaelementow);
    gdzie = "#tresc_strony__" + liczbaelementow;
    wypiszkod();
    zmienmenu();
}
