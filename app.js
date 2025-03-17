// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//funcion agregarAmigo() que recupera el nombre del amigo escrito en el input
//y lo guarda en el array amigos para luego mostrarlo en la lista de amigos
//si el input esta vacio no agrega nada al array
//luego limpia el input
//mostrarAmigos() recorre el array amigos y lo muestra en la lista de amigos
amigos = [];

function agregarAmigo(){
    var nombre = document.getElementById("amigo").value;
    if(nombre != ""){
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}


//funcion mostrarAmigos() recorre el array amigos y lo muestra en la lista de amigos
//en cada iteracion crea un elemento li y le asigna el valor del amigo 
//permite eliminar al amigo especifico de la lista
//si la lista esta vacia muestra un mensaje de que no hay amigos
//finalmente muestra la lista de amigos

function mostrarAmigos(){
    var lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    if(amigos.length == 0){
        lista.innerHTML = "<p>No hay amigos</p>";
    }else{
        for(var i = 0; i < amigos.length; i++){
            var li = document.createElement("li");
            li.innerHTML = amigos[i] + " <button onclick='eliminarAmigo("+i+")'>Eliminar</button>";
            lista.appendChild(li);
        }
    }
}

function eliminarAmigo(index){
    amigos.splice(index, 1);
    mostrarAmigos();
}

//funcion sortear() que recorre el array amigos y elige un amigo aleatorio
//muestra el amigo elegido en la lista de sorteo
//si la lista de amigos esta vacia muestra un mensaje de que no hay amigos
function sortearAmigo(){
    var sorteo = document.getElementById("resultado");
    sorteo.innerHTML = "";
    if(amigos.length == 0){
        sorteo.innerHTML = "<p>No hay amigos</p>";
    }else{
        var index = Math.floor(Math.random() * amigos.length);
        sorteo.innerHTML = "<p>El amigo elegido es: " + amigos[index] + "</p>";
    }
}