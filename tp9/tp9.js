function seconnecter(){
    var login = prompt("Donner votre nom d'utilisateur")
    var password = prompt(" Entrer mot de passe")
    if(login == "admin" && password =="admin"){
        document.write("Bienvenue " + login);
    }
    else{
        alert("Accès refusé")
    }
}
function    affichagetab(){
    document.write ('<table border=2px widht=75%>');
    for (var i=0; i<=5; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");
    }
    document.write('</table>');
}

function    affichagetab2(){
    var count = prompt('Combien de ligne souhaitez vous ?');
    document.write ('<table border=2px widht=30%>');
    for (let i=0; i<=count; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");
    }
    document.write('</table>');
}

function cdc() {
    var chaine = prompt("Donnner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient " + chaine.length+"  caractères " + "<br>");
    document.write("La première lettre est " + chaine.substring(0,1)+ "<br>");
}

function swich() {
    var color=prompt ("Entrez votre couleur");
    switch(color)
    { 
    case "rouge": document.body.style.background = "red";
    break;
    case "ROUGE": document.body.style.background = "red";
    break;
    case "bleu": document.body.style.background = "blue";
    break;
    case "BLEU": document.body.style.background = "blue";
    break;
    case "vert": document.body.style.background = "green";
    break;
    case "VERT": document.body.style.background = "green";
    break;

    default:alert("Couleur non définie");
}
}
function seconnecter3(){
    var i = 0;
    do{
        var id=prompt("Entrez votre nom d'utilisateur");
        var mdp=prompt("Entrez votre mot de passe");
        if (id== "admin" && mdp =="admin")
        {
            document.write("Bienvenue"+id);
            break;
        }
        else
        alert ("Accès refusé");
    i +=1;
    } while (i<3);

    if(i==3)
    alert("Delai dépassé");
}