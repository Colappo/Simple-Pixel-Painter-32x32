let ColorPrint = document.getElementById("color-printer");
let color;

function Color() {
    color = document.activeElement.getAttribute("value");
    ColorPrint.innerHTML = "Kolor: " + color;
    return color;
}

let inputColor = document.getElementById("input-color");
function CFI() {
    color = inputColor.value;
    ColorPrint.innerHTML = "Kolor: " + color;
    return color;
}

let d1 = document.getElementById("D1");
let d2 = document.getElementById("D2");
let devON = false;
let CP = document.getElementById("color-printer");

function dev() {
    if (devON === false) {
        d2.style.transform = "translateX(23px)";
        devON = true;
        d1.style.background = "#00FF00";
        console.log("1");
        CP.style.opacity = "1";
        return devON;
    } 
    if (devON === true) {
        d2.style.transform = "translateX(3px)";
        devON = false;
        d1.style.background = "#FF0000";
        CP.style.opacity = "0";
        console.log("2");
        return devON;
    }
};

function c() {
    let i_ = 0
    let p;
    while (true) {
        p = document.getElementById("btn" + i_)
        console.log(p)
        p.style.background = "#ffffff"
        i_++
        if (i_ === 4096) {
            break
        }
    }
}

function colorPrint() {
    colorP.innerHTML = "Color (HEX): " + color
}

let btn;
let paint = false

function paintStart(x) {
    x.style.background = color;
    paint = true
    console.log(paint)
}

function paintBtns(x) {
    if (paint === true) {
        x.style.background = color;
    }
}

function paintStop() {
    paint = false
}
let i = 0;
while (true) {
    pixel = document.createElement("div")
    pixel.id = "btn" + i
    pixel.setAttribute("class", "btns")
    document.getElementById("plotno").append(pixel)
    i ++
    if (i>= 1024) {
        break
    }
}

i = 0
while (true) {
    btn = document.getElementById("btn" + i)
    console.log(btn)
    btn.setAttribute("onmousemove", "paintBtns(btn" + i + ")")
    btn.setAttribute("onmouseup", "paintStop()")
    btn.setAttribute("onmousedown", "paintStart(btn" + i + ")")
    i = i + 1
    if (i  === 1024) {
        break
    }
}
// html2canwas https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js
document.getElementById('download').addEventListener('click', function() {
    html2canvas(document.getElementById('plotno')).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = imgData;
        link.download = 'div-content.png';
        link.click();
    });
});