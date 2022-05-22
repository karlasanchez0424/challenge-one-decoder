//declaracion de variables
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var textoResultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".btn-copiar");
var contenedorResultado = document.querySelector(".contenedor-resultado");
var contenedorCopiar = document.querySelector(".contenedor-copiar");

//Ocultamos ambos contenedores
//En la funcion ocultarAdelante los mostramos
contenedorResultado.classList.add("ocultar");
contenedorCopiar.classList.add("ocultar");

//Activamos funcion para cuando se haga click en estos botones
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;

//funcion que encripta el texto
function encriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    textoResultado.textContent = encriptarTexto(area);
    
}

//funcion que desencripta el texto
function desencriptar(){
    ocultarAdelante();
    var area = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(area);
}

//funcion que guarda el texto que se encuentra en el textarea
function recuperarTexto(){
    var areaTexto = document.querySelector(".area-texto");
    return areaTexto.value;
}

//funcion que oculta el grafico del muneco, y los mensajes de "ningun mensaje fue encontrado"
//y muestra el resultado
function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    contenedorResultado.classList.remove("ocultar");
    contenedorCopiar.classList.remove("ocultar");
}

//funcion que realiza la encriptacion, la variable texto es igual al mensaje que es el parametro de la encriptacion
//el texto final es ingresado por el usuario
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    //iteracion, declaro contador que comienza en 0, mientras el contador sea menor al length del texto, le suma 1
    for(var i = 0; i < texto.length; i++){
        //si el texto, tiene como array al contador, encuentra una "a" 
        //entonces el texto final sera igual a el mismo mas "ai"
        if(texto[i] == "a"){
            textofinal = textofinal + "ai";
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter";
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes";
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober";
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat";
        }
        //de lo contrario el texto final es lo mismo que se haya ingresado
        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

//funcion que desencripta el texto, en este caso siempre que encuentra una vocal le elimina el resto que se anadio anteriormente
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u";
            i = i+3;
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }
    return textofinal;
}

//funcion de copiar el texto que se encuentra en el textarea
function copiarTexto(){
    
    botonCopiar.addEventListener("click", function(e){
        textoResultado.select();
        //try-catch para la validacion de errores
        try {
            var successful = document.execCommand("copy");
            if(successful) answer.innerHTML = 'Copiado!';
            else answer.innerHTML = 'Incapaz de copiar!';
        } catch (error) {
            answer.innerHTML = 'Browser no soportado!';
        }
    })
}