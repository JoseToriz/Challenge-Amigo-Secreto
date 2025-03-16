// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//------------------- Variables  -------------------

let amigos = [];
let i = 0; 



//------------------- Funciones -------------------

function agregarAmigo()
{
    if (document.getElementById('amigo').value == "" || amigos.includes(document.getElementById('amigo').value) == true)
    {
        alert("Debes ingresar un nombre distinto para continuar");
    }
    else 
    {
        amigos.push(document.getElementById('amigo').value);
        document.getElementById('listaAmigos').value = amigos[i] + "\n";
        console,console.log(amigos);
        document.getElementById('amigo').setAttribute('placeholder', 'Ingresa otro amigo'); 
        document.getElementById('amigo').value = "";
        
    }
    actualizarLista();
} 

function actualizarLista()
{
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "-------------Lista Amigos-------------\n";
        amigos.forEach((amigo) => {
            let li = document.createElement('li');
            li.textContent = amigo;
            lista.appendChild(li);
        });
        i++; 
        lista.innerHTML += "-------------------------------------\n";
}

function sortearAmigo()
{
    let amigoSecreto = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    let ii = Math.floor(Math.random() * amigos.length);
    if(ii == amigoSecreto)
    {
        sortearAmigo();
    }
    else
    {
        resultado.innerHTML = "El amigo secreto de " + amigos[ii] + " es " + amigos[amigoSecreto]+ "\n"; 
    }
}