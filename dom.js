console.log("Entramos");

var items = document.getElementsByClassName("item");
var cantidad = items.length; 

console.log(cantidad); 

//crear nuevos elementos
//document.CreateElement(NombreDelElemento)
var div = document.createElement("div");

div; //resultado = <div></div>;

//Insertando contenido
//  Mediante las propiedades innerText e innerHRML podemos manipular el código
//document.body.appendChild(de texto y el HTML dentro de un elemto del Dom
div.innerText= "Aprendiendo JavaScript";
var divUno = document.getElementById("uno");
divUno.appendChild(div);


var lista = document.getElementById("lista");
var hijo = document.createElement("li");
hijo.innerText="li dinámico";
lista.appendChild(hijo);

var p = document.getElementById("tres");
tres.style.color="red";


var li = document.getElementById("lista").style.color="#009933";



