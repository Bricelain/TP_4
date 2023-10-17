function addition(){
    var a = document.getElementById("c1").value;
    var b = document.getElementById("c2").value;
    var c = Number(a)+Number(b);

    c3.value = c;
}

function soustraction(){
    var a = document.getElementById("c1").value;
    var b = document.getElementById("c2").value;
    var c = Number(a)-Number(b);

    c3.value = c;
}

function division(){
    var a = document.getElementById("c1").value;
    var b = document.getElementById("c2").value;
    var c = Number(a)/Number(b);

    c3.value = c;
}

function multiplication(){
    var a = document.getElementById("c1").value;
    var b = document.getElementById("c2").value;
    var c = Number(a)*Number(b);

    c3.value = c;
}

function permute(){
    var v3 = "";
    a = document.getElementById("c1").value;
    b = document.getElementById("c2").value;
    v3 = a;
    a = b;
    b = v3;

    c1.value = a;
    c2.value = b;

}

function parite(){
    var v;
    v = Number(document.getElementById("c3").value);
    if (v%2==0)
    t4.value = ("Pair")
else
t4.value = ("Impair")
}