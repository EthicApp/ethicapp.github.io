/*function helloTitle(){              //első módszer:  ' ' +   :jelekkel
    var text = "";
        
    document.getElementById("title").innerHTML = 'Ez a weblap a jövőbeli &quot;EthicApp&quot; nevezetű applikációnknak néhány funkcióját próbálná meg prezentálni.' +
      'Az űrlapot készítette: ' +
      
      'Első körben az <b>&quot;A&quot;</b> vagy <b>&quot;B&quot;</b> opció közül választós szituációkat mutatnánk be.' +
      'Egy képet fogtok látni az adott szituációról, majd azt egy szöveg fogja követni. A szituációtól függően ' +
      'válasszatok A vagy B opció között! <b style="text-shadow: 0.5px 1px gray;"> Jó lenne </b>, ha kicsit jobban megfontolnátok a döntéseteket! ' +
      'Merüljetek bele a szituációba, ássatok mélyre, hogy megtudjátok, ti valójában mit is választanátok,<br><br> ' +
      'ha egy ilyen döntéshelyzet elé kerülnétek (lehetőleg egyedül töltsétek ki az űrlapot)! ' +
      ' Az űrlap kitöltése után jó lenne, ha tudnátok érvelni a döntésetek mellett!';
}*/

/* Dilemma üdvözlő szöveg */

function welcomeTitle(){
    document.getElementById("welcome_Title").innerHTML = 'EthicApp tesztelő weblap';
}

function welcomeText(){
    document.getElementById("welcome_Text").innerHTML = 'Ez a weblap a jövőbeli &quot;EthicApp&quot; nevezetű applikációnknak néhány funkcióját próbálná meg prezentálni. \
     Az űrlapot készítette: <b style="text-shadow: 0.5px 1px gray;">Király Márk</b> és <b style="text-shadow: 0.5px 1px gray;">Kovács Alex</b> \
      <br> \
      <br> \
    Egy szöveget fogtok látni, majd azt egy kép fogja követni. A szituációtól függően válasszatok <b>A</b> vagy <b>B</b> opció között! \
    Jó lenne, ha kicsit jobban megfontolnátok a döntéseteket! Merüljetek bele a szituációba, ássatok mélyre, hogy meg tudjátok, \
     ti valójában mit is választanátok, ha egy ilyen döntéshelyzet elé kerülnétek (lehetőleg egyedül töltsétek ki az űrlapot)!  \
    Az űrlap kitöltése után jó lenne, ha tudnátok érvelni a döntésetek mellett!';
}

/* AB típusú Dilemma felkészítő szöveg */

function titleAB(){
    document.getElementById("title_AB").innerHTML = '&quot;A&quot; és &quot;B&quot; opció közül választós szituáció';
}

/*
function textAB(){
    document.getElementById("text_AB").innerHTML = 'Egy képet fogtok látni az adott szituációról, majd azt egy szöveg fogja követni. \
         A szituációtól függően válasszatok az A vagy B opció között!';
}*/