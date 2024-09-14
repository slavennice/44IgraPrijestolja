// JavaScript source code

// alert('Hello Guest!');



function loadImage(id, targetId) {
    var el = document.getElementById(id);
    var targetEl = targetId ? document.getElementById(targetId) : el;
    var imageToLoad;
    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    }

    else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    }

    else {
        imageToLoad = el.currentSrc;
    }

    if (imageToLoad) {
        var img = new Image();
        img.src = imageToLoad;
        img.onload = function () {
            targetEl.classList.add('is-loaded');
        }

            ;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});

var spol = window.confirm("Kliknite OK ako ste zenskog spola,\na ako ste muskog spola, kliknite Cancel?")

oslovljavanje = (spol == true) ? "draga gospodjo " : "dragi gospodine "


var naziv = window.prompt("Kako se zovete?", "Molimo upisite Vase ime");
naziv = (naziv == null) ? "Sramežljiva Osoba" : naziv
window.confirm("Lijep pozdrav " + oslovljavanje + naziv   + "!\n"  +
    "Dobrodosli na ovu stranicu o igri prijestolja. \nNadam se da cete pronaci sve sto zelite!");



var now = new Date();
var hrs = now.getHours();
var msg = "";

if (hrs > 0) msg = "Tko rano rani dvije srece grabi!"; // REALLY early
if (hrs > 6) msg = "Dobro jutro!";      // After 6am
if (hrs > 12) msg = "Dobar dan!";    // After 12pm
if (hrs > 17) msg = "Dobra vecer!";      // After 5pm
if (hrs > 22) msg = "Zar nije malo prekasno...ili ne?";        // After 10pm

alert(msg);