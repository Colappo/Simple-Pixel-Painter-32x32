let ColorPrint = document.getElementById("color-printer");
let color = "#FFFFFF"

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


let rysowanie = false;

function start() {
    rysowanie = true;
    console.log("START")
    q = document.activeElement.getAttribute("id");
    console.log(q)
    return rysowanie;
}

function end() {
    rysowanie = false;
    console.log("END")
    return rysowanie;
}

function w() {
    let i_ = 0;
    while (i_ < 256) {
        pixel_ = document.getElementById("pixel" + i_);
        pixel_.style.background = "#FFFFFF";
        i_ = i_ + 1;
    };
}


function rysuj0() {
    if (rysowanie === true) {
        q = document.getElementById("pixel0").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
};

function rysuj1() {
    if (rysowanie === true) {
        q = document.getElementById("pixel1").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj2() {
    if (rysowanie === true) {
        q = document.getElementById("pixel2").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
};

function rysuj3() {
    if (rysowanie === true) {
        q = document.getElementById("pixel3").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj4() {
    if (rysowanie === true) {
        q = document.getElementById("pixel4").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
};

function rysuj5() {
    if (rysowanie === true) {
        q = document.getElementById("pixel5").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj6() {
    if (rysowanie === true) {
        q = document.getElementById("pixel6").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
};

function rysuj7() {
    if (rysowanie === true) {
        q = document.getElementById("pixel7").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj8() {
    if (rysowanie === true) {
        q = document.getElementById("pixel8").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
};

function rysuj9() {
    if (rysowanie === true) {
        q = document.getElementById("pixel9").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj10() {
    if (rysowanie === true) {
        q = document.getElementById("pixel10").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
};

function rysuj11() {
    if (rysowanie === true) {
        q = document.getElementById("pixel11").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj12() {
    if (rysowanie === true) {
        q = document.getElementById("pixel12").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj13() {
    if (rysowanie === true) {
        q = document.getElementById("pixel13").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj14() {
    if (rysowanie === true) {
        q = document.getElementById("pixel14").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj15() {
    if (rysowanie === true) {
        q = document.getElementById("pixel15").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj16() {
    if (rysowanie === true) {
        q = document.getElementById("pixel16").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj17() {
    if (rysowanie === true) {
        q = document.getElementById("pixel17").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj18() {
    if (rysowanie === true) {
        q = document.getElementById("pixel18").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj19() {
    if (rysowanie === true) {
        q = document.getElementById("pixel19").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj20() {
    if (rysowanie === true) {
        q = document.getElementById("pixel20").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj21() {
    if (rysowanie === true) {
        q = document.getElementById("pixel21").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj22() {
    if (rysowanie === true) {
        q = document.getElementById("pixel22").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj23() {
    if (rysowanie === true) {
        q = document.getElementById("pixel23").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj24() {
    if (rysowanie === true) {
        q = document.getElementById("pixel24").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj25() {
    if (rysowanie === true) {
        q = document.getElementById("pixel25").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj26() {
    if (rysowanie === true) {
        q = document.getElementById("pixel26").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj27() {
    if (rysowanie === true) {
        q = document.getElementById("pixel27").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj28() {
    if (rysowanie === true) {
        q = document.getElementById("pixel28").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj29() {
    if (rysowanie === true) {
        q = document.getElementById("pixel29").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj30() {
    if (rysowanie === true) {
        q = document.getElementById("pixel30").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj31() {
    if (rysowanie === true) {
        q = document.getElementById("pixel31").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj32() {
    if (rysowanie === true) {
        q = document.getElementById("pixel32").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj33() {
    if (rysowanie === true) {
        q = document.getElementById("pixel33").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj34() {
    if (rysowanie === true) {
        q = document.getElementById("pixel34").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}function rysuj35() {
    if (rysowanie === true) {
        q = document.getElementById("pixel35").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj36() {
    if (rysowanie === true) {
        q = document.getElementById("pixel36").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj37() {
    if (rysowanie === true) {
        q = document.getElementById("pixel37").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj38() {
    if (rysowanie === true) {
        q = document.getElementById("pixel38").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj39() {
    if (rysowanie === true) {
        q = document.getElementById("pixel39").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj40() {
    if (rysowanie === true) {
        q = document.getElementById("pixel40").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj41() {
    if (rysowanie === true) {
        q = document.getElementById("pixel41").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj42() {
    if (rysowanie === true) {
        q = document.getElementById("pixel42").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj43() {
    if (rysowanie === true) {
        q = document.getElementById("pixel43").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj44() {
    if (rysowanie === true) {
        q = document.getElementById("pixel44").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj45() {
    if (rysowanie === true) {
        q = document.getElementById("pixel45").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj46() {
    if (rysowanie === true) {
        q = document.getElementById("pixel46").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj47() {
    if (rysowanie === true) {
        q = document.getElementById("pixel47").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj48() {
    if (rysowanie === true) {
        q = document.getElementById("pixel48").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj49() {
    if (rysowanie === true) {
        q = document.getElementById("pixel49").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj50() {
    if (rysowanie === true) {
        q = document.getElementById("pixel50").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj51() {
    if (rysowanie === true) {
        q = document.getElementById("pixel51").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj52() {
    if (rysowanie === true) {
        q = document.getElementById("pixel52").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj53() {
    if (rysowanie === true) {
        q = document.getElementById("pixel53").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj54() {
    if (rysowanie === true) {
        q = document.getElementById("pixel54").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj55() {
    if (rysowanie === true) {
        q = document.getElementById("pixel55").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj56() {
    if (rysowanie === true) {
        q = document.getElementById("pixel56").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj57() {
    if (rysowanie === true) {
        q = document.getElementById("pixel57").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj58() {
    if (rysowanie === true) {
        q = document.getElementById("pixel58").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj59() {
    if (rysowanie === true) {
        q = document.getElementById("pixel59").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj60() {
    if (rysowanie === true) {
        q = document.getElementById("pixel60").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj61() {
    if (rysowanie === true) {
        q = document.getElementById("pixel61").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj62() {
    if (rysowanie === true) {
        q = document.getElementById("pixel62").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj63() {
    if (rysowanie === true) {
        q = document.getElementById("pixel63").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj64() {
    if (rysowanie === true) {
        q = document.getElementById("pixel64").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj65() {
    if (rysowanie === true) {
        q = document.getElementById("pixel65").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj66() {
    if (rysowanie === true) {
        q = document.getElementById("pixel66").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj67() {
    if (rysowanie === true) {
        q = document.getElementById("pixel67").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj68() {
    if (rysowanie === true) {
        q = document.getElementById("pixel68").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj69() {
    if (rysowanie === true) {
        q = document.getElementById("pixel69").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj70() {
    if (rysowanie === true) {
        q = document.getElementById("pixel70").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj71() {
    if (rysowanie === true) {
        q = document.getElementById("pixel71").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj72() {
    if (rysowanie === true) {
        q = document.getElementById("pixel72").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj73() {
    if (rysowanie === true) {
        q = document.getElementById("pixel73").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj74() {
    if (rysowanie === true) {
        q = document.getElementById("pixel74").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj75() {
    if (rysowanie === true) {
        q = document.getElementById("pixel75").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj76() {
    if (rysowanie === true) {
        q = document.getElementById("pixel76").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj77() {
    if (rysowanie === true) {
        q = document.getElementById("pixel77").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj78() {
    if (rysowanie === true) {
        q = document.getElementById("pixel78").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj79() {
    if (rysowanie === true) {
        q = document.getElementById("pixel79").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj80() {
    if (rysowanie === true) {
        q = document.getElementById("pixel80").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj81() {
    if (rysowanie === true) {
        q = document.getElementById("pixel81").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj82() {
    if (rysowanie === true) {
        q = document.getElementById("pixel82").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj83() {
    if (rysowanie === true) {
        q = document.getElementById("pixel83").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj84() {
    if (rysowanie === true) {
        q = document.getElementById("pixel84").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj85() {
    if (rysowanie === true) {
        q = document.getElementById("pixel85").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj86() {
    if (rysowanie === true) {
        q = document.getElementById("pixel86").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj87() {
    if (rysowanie === true) {
        q = document.getElementById("pixel87").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj88() {
    if (rysowanie === true) {
        q = document.getElementById("pixel88").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj89() {
    if (rysowanie === true) {
        q = document.getElementById("pixel89").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj90() {
    if (rysowanie === true) {
        q = document.getElementById("pixel90").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj91() {
    if (rysowanie === true) {
        q = document.getElementById("pixel91").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj92() {
    if (rysowanie === true) {
        q = document.getElementById("pixel92").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj93() {
    if (rysowanie === true) {
        q = document.getElementById("pixel93").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj94() {
    if (rysowanie === true) {
        q = document.getElementById("pixel94").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj95() {
    if (rysowanie === true) {
        q = document.getElementById("pixel95").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj96() {
    if (rysowanie === true) {
        q = document.getElementById("pixel96").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj97() {
    if (rysowanie === true) {
        q = document.getElementById("pixel97").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj98() {
    if (rysowanie === true) {
        q = document.getElementById("pixel98").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj99() {
    if (rysowanie === true) {
        q = document.getElementById("pixel99").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj100() {
    if (rysowanie === true) {
        q = document.getElementById("pixel100").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj101() {
    if (rysowanie === true) {
        q = document.getElementById("pixel101").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj102() {
    if (rysowanie === true) {
        q = document.getElementById("pixel102").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj103() {
    if (rysowanie === true) {
        q = document.getElementById("pixel103").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj104() {
    if (rysowanie === true) {
        q = document.getElementById("pixel104").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj105() {
    if (rysowanie === true) {
        q = document.getElementById("pixel105").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj106() {
    if (rysowanie === true) {
        q = document.getElementById("pixel106").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj107() {
    if (rysowanie === true) {
        q = document.getElementById("pixel107").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj108() {
    if (rysowanie === true) {
        q = document.getElementById("pixel108").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj109() {
    if (rysowanie === true) {
        q = document.getElementById("pixel109").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj110() {
    if (rysowanie === true) {
        q = document.getElementById("pixel110").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj111() {
    if (rysowanie === true) {
        q = document.getElementById("pixel111").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj112() {
    if (rysowanie === true) {
        q = document.getElementById("pixel112").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj113() {
    if (rysowanie === true) {
        q = document.getElementById("pixel113").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj114() {
    if (rysowanie === true) {
        q = document.getElementById("pixel114").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj115() {
    if (rysowanie === true) {
        q = document.getElementById("pixel115").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj116() {
    if (rysowanie === true) {
        q = document.getElementById("pixel116").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj117() {
    if (rysowanie === true) {
        q = document.getElementById("pixel117").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj118() {
    if (rysowanie === true) {
        q = document.getElementById("pixel118").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj119() {
    if (rysowanie === true) {
        q = document.getElementById("pixel119").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj120() {
    if (rysowanie === true) {
        q = document.getElementById("pixel120").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj121() {
    if (rysowanie === true) {
        q = document.getElementById("pixel121").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj122() {
    if (rysowanie === true) {
        q = document.getElementById("pixel122").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj123() {
    if (rysowanie === true) {
        q = document.getElementById("pixel123").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj124() {
    if (rysowanie === true) {
        q = document.getElementById("pixel124").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj125() {
    if (rysowanie === true) {
        q = document.getElementById("pixel125").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj126() {
    if (rysowanie === true) {
        q = document.getElementById("pixel126").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj127() {
    if (rysowanie === true) {
        q = document.getElementById("pixel127").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj128() {
    if (rysowanie === true) {
        q = document.getElementById("pixel128").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj129() {
    if (rysowanie === true) {
        q = document.getElementById("pixel129").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj130() {
    if (rysowanie === true) {
        q = document.getElementById("pixel130").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj131() {
    if (rysowanie === true) {
        q = document.getElementById("pixel131").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj132() {
    if (rysowanie === true) {
        q = document.getElementById("pixel132").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj133() {
    if (rysowanie === true) {
        q = document.getElementById("pixel133").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj134() {
    if (rysowanie === true) {
        q = document.getElementById("pixel134").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj135() {
    if (rysowanie === true) {
        q = document.getElementById("pixel135").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj136() {
    if (rysowanie === true) {
        q = document.getElementById("pixel136").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj137() {
    if (rysowanie === true) {
        q = document.getElementById("pixel137").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj138() {
    if (rysowanie === true) {
        q = document.getElementById("pixel138").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj139() {
    if (rysowanie === true) {
        q = document.getElementById("pixel139").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj140() {
    if (rysowanie === true) {
        q = document.getElementById("pixel140").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj141() {
    if (rysowanie === true) {
        q = document.getElementById("pixel141").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj142() {
    if (rysowanie === true) {
        q = document.getElementById("pixel142").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj143() {
    if (rysowanie === true) {
        q = document.getElementById("pixel143").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj144() {
    if (rysowanie === true) {
        q = document.getElementById("pixel144").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj145() {
    if (rysowanie === true) {
        q = document.getElementById("pixel145").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj146() {
    if (rysowanie === true) {
        q = document.getElementById("pixel146").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj147() {
    if (rysowanie === true) {
        q = document.getElementById("pixel147").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj148() {
    if (rysowanie === true) {
        q = document.getElementById("pixel148").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj149() {
    if (rysowanie === true) {
        q = document.getElementById("pixel149").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj150() {
    if (rysowanie === true) {
        q = document.getElementById("pixel150").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj151() {
    if (rysowanie === true) {
        q = document.getElementById("pixel151").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj152() {
    if (rysowanie === true) {
        q = document.getElementById("pixel152").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj153() {
    if (rysowanie === true) {
        q = document.getElementById("pixel153").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj154() {
    if (rysowanie === true) {
        q = document.getElementById("pixel154").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj155() {
    if (rysowanie === true) {
        q = document.getElementById("pixel155").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj156() {
    if (rysowanie === true) {
        q = document.getElementById("pixel156").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj157() {
    if (rysowanie === true) {
        q = document.getElementById("pixel157").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj158() {
    if (rysowanie === true) {
        q = document.getElementById("pixel158").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj159() {
    if (rysowanie === true) {
        q = document.getElementById("pixel159").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj160() {
    if (rysowanie === true) {
        q = document.getElementById("pixel160").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj161() {
    if (rysowanie === true) {
        q = document.getElementById("pixel161").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj162() {
    if (rysowanie === true) {
        q = document.getElementById("pixel162").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj163() {
    if (rysowanie === true) {
        q = document.getElementById("pixel163").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj164() {
    if (rysowanie === true) {
        q = document.getElementById("pixel164").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj165() {
    if (rysowanie === true) {
        q = document.getElementById("pixel165").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj166() {
    if (rysowanie === true) {
        q = document.getElementById("pixel166").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj167() {
    if (rysowanie === true) {
        q = document.getElementById("pixel167").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj168() {
    if (rysowanie === true) {
        q = document.getElementById("pixel168").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj169() {
    if (rysowanie === true) {
        q = document.getElementById("pixel169").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj170() {
    if (rysowanie === true) {
        q = document.getElementById("pixel170").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj171() {
    if (rysowanie === true) {
        q = document.getElementById("pixel171").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj172() {
    if (rysowanie === true) {
        q = document.getElementById("pixel172").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj173() {
    if (rysowanie === true) {
        q = document.getElementById("pixel173").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj174() {
    if (rysowanie === true) {
        q = document.getElementById("pixel174").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj175() {
    if (rysowanie === true) {
        q = document.getElementById("pixel175").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj176() {
    if (rysowanie === true) {
        q = document.getElementById("pixel176").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj177() {
    if (rysowanie === true) {
        q = document.getElementById("pixel177").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj178() {
    if (rysowanie === true) {
        q = document.getElementById("pixel178").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj179() {
    if (rysowanie === true) {
        q = document.getElementById("pixel179").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj180() {
    if (rysowanie === true) {
        q = document.getElementById("pixel180").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj181() {
    if (rysowanie === true) {
        q = document.getElementById("pixel181").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj182() {
    if (rysowanie === true) {
        q = document.getElementById("pixel182").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj183() {
    if (rysowanie === true) {
        q = document.getElementById("pixel183").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj184() {
    if (rysowanie === true) {
        q = document.getElementById("pixel184").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj185() {
    if (rysowanie === true) {
        q = document.getElementById("pixel185").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj186() {
    if (rysowanie === true) {
        q = document.getElementById("pixel186").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj187() {
    if (rysowanie === true) {
        q = document.getElementById("pixel187").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj188() {
    if (rysowanie === true) {
        q = document.getElementById("pixel188").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj189() {
    if (rysowanie === true) {
        q = document.getElementById("pixel189").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj190() {
    if (rysowanie === true) {
        q = document.getElementById("pixel190").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj191() {
    if (rysowanie === true) {
        q = document.getElementById("pixel191").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj192() {
    if (rysowanie === true) {
        q = document.getElementById("pixel192").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj193() {
    if (rysowanie === true) {
        q = document.getElementById("pixel193").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj194() {
    if (rysowanie === true) {
        q = document.getElementById("pixel194").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj195() {
    if (rysowanie === true) {
        q = document.getElementById("pixel195").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj196() {
    if (rysowanie === true) {
        q = document.getElementById("pixel196").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj197() {
    if (rysowanie === true) {
        q = document.getElementById("pixel197").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj198() {
    if (rysowanie === true) {
        q = document.getElementById("pixel198").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj199() {
    if (rysowanie === true) {
        q = document.getElementById("pixel199").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj200() {
    if (rysowanie === true) {
        q = document.getElementById("pixel200").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj201() {
    if (rysowanie === true) {
        q = document.getElementById("pixel201").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj202() {
    if (rysowanie === true) {
        q = document.getElementById("pixel202").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj203() {
    if (rysowanie === true) {
        q = document.getElementById("pixel203").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj204() {
    if (rysowanie === true) {
        q = document.getElementById("pixel204").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj205() {
    if (rysowanie === true) {
        q = document.getElementById("pixel205").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj206() {
    if (rysowanie === true) {
        q = document.getElementById("pixel206").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj207() {
    if (rysowanie === true) {
        q = document.getElementById("pixel207").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj208() {
    if (rysowanie === true) {
        q = document.getElementById("pixel208").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj209() {
    if (rysowanie === true) {
        q = document.getElementById("pixel209").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj210() {
    if (rysowanie === true) {
        q = document.getElementById("pixel210").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj211() {
    if (rysowanie === true) {
        q = document.getElementById("pixel211").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj212() {
    if (rysowanie === true) {
        q = document.getElementById("pixel212").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj213() {
    if (rysowanie === true) {
        q = document.getElementById("pixel213").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj214() {
    if (rysowanie === true) {
        q = document.getElementById("pixel214").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj215() {
    if (rysowanie === true) {
        q = document.getElementById("pixel215").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj216() {
    if (rysowanie === true) {
        q = document.getElementById("pixel216").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj217() {
    if (rysowanie === true) {
        q = document.getElementById("pixel217").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj218() {
    if (rysowanie === true) {
        q = document.getElementById("pixel218").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj219() {
    if (rysowanie === true) {
        q = document.getElementById("pixel219").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj220() {
    if (rysowanie === true) {
        q = document.getElementById("pixel220").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj221() {
    if (rysowanie === true) {
        q = document.getElementById("pixel221").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj222() {
    if (rysowanie === true) {
        q = document.getElementById("pixel222").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj223() {
    if (rysowanie === true) {
        q = document.getElementById("pixel223").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj224() {
    if (rysowanie === true) {
        q = document.getElementById("pixel224").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj225() {
    if (rysowanie === true) {
        q = document.getElementById("pixel225").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj226() {
    if (rysowanie === true) {
        q = document.getElementById("pixel226").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj227() {
    if (rysowanie === true) {
        q = document.getElementById("pixel227").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj228() {
    if (rysowanie === true) {
        q = document.getElementById("pixel228").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj229() {
    if (rysowanie === true) {
        q = document.getElementById("pixel229").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj230() {
    if (rysowanie === true) {
        q = document.getElementById("pixel230").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj231() {
    if (rysowanie === true) {
        q = document.getElementById("pixel231").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj232() {
    if (rysowanie === true) {
        q = document.getElementById("pixel232").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj233() {
    if (rysowanie === true) {
        q = document.getElementById("pixel233").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj234() {
    if (rysowanie === true) {
        q = document.getElementById("pixel234").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj235() {
    if (rysowanie === true) {
        q = document.getElementById("pixel235").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj236() {
    if (rysowanie === true) {
        q = document.getElementById("pixel236").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj237() {
    if (rysowanie === true) {
        q = document.getElementById("pixel237").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj238() {
    if (rysowanie === true) {
        q = document.getElementById("pixel238").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj239() {
    if (rysowanie === true) {
        q = document.getElementById("pixel239").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj240() {
    if (rysowanie === true) {
        q = document.getElementById("pixel240").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj241() {
    if (rysowanie === true) {
        q = document.getElementById("pixel241").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj242() {
    if (rysowanie === true) {
        q = document.getElementById("pixel242").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj243() {
    if (rysowanie === true) {
        q = document.getElementById("pixel243").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj244() {
    if (rysowanie === true) {
        q = document.getElementById("pixel244").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj245() {
    if (rysowanie === true) {
        q = document.getElementById("pixel245").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj246() {
    if (rysowanie === true) {
        q = document.getElementById("pixel246").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj247() {
    if (rysowanie === true) {
        q = document.getElementById("pixel247").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj248() {
    if (rysowanie === true) {
        q = document.getElementById("pixel248").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj249() {
    if (rysowanie === true) {
        q = document.getElementById("pixel249").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj250() {
    if (rysowanie === true) {
        q = document.getElementById("pixel250").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj251() {
    if (rysowanie === true) {
        q = document.getElementById("pixel251").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj252() {
    if (rysowanie === true) {
        q = document.getElementById("pixel252").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj253() {
    if (rysowanie === true) {
        q = document.getElementById("pixel253").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj254() {
    if (rysowanie === true) {
        q = document.getElementById("pixel254").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

function rysuj255() {
    if (rysowanie === true) {
        q = document.getElementById("pixel255").style.background = color;
        console.log("MOVING")
        console.log(q)
    }
}

let i = 0;
while (i < 256) {
    pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.id = "pixel" + i;
    document.getElementById("plotno").append(pixel);

    pixel.setAttribute("onmousedown", "start()");
    pixel.setAttribute("onmousemove", "rysuj" + i + "()");
    pixel.setAttribute("onmouseup", "end()");
    i = i + 1;
};