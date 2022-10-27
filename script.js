document.querySelector('main').contentEditable = "true";
i = 0; //liczba tresci
    var gdzie = "#tresc_bloga";
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
        if (document.getElementById('tresc_bloga').innerHTML != '' && typeof (document.getElementById('tresc_bloga')) != undefined) {
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
    dodajstyl('marginLeft','p');
    dodajstyl('padding', 'p');
    wypiszkod();


    function odtworz() {
        document.querySelector('main').innerHTML = '<div id="tresc_bloga" style="background: black;font-size: 104px;color:#ffff00;font-family: cursive;font-weight: 900;text-align: center;">';
    }

    function cien(co) {
        document.querySelector('#tresc_bloga').style[co] = `${document.getElementById('x').value}px ${document.getElementById('y').value}px ${document.getElementById('r').value}px ${document.getElementById('c').value}`;
        wypiszkod();
    }
    function border() {
        document.querySelector('#tresc_bloga').style.border = `${document.getElementById('border_gruboś').value}px ${document.getElementById('border_rodzaj').value} ${document.getElementById('border_kolor').value}`;
        wypiszkod();
    }
    function nowyelement() {
        let nowyelement = document.createElement('div');
        nowyelement.classList = gdzie + i;
        document.querySelector(gdzie).appendChild(nowyelement);
        wypiszkod();
        i++;
    }